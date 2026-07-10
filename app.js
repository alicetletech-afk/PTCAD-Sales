(() => {
  const templates = (window.PTCAD_TEMPLATES || []).sort((a,b) => a.id.localeCompare(b.id));
  let current = templates.find(t => t.active) || templates[0];
  let values = {};
  let renderedHtml = "";

  const list = document.getElementById('templateList');
  const form = document.getElementById('dynamicForm');
  const subjectInput = document.getElementById('subjectInput');
  const preview = document.getElementById('emailPreview');
  const currentCode = document.getElementById('currentCode');
  const currentTitle = document.getElementById('currentTitle');
  const attachmentText = document.getElementById('attachmentText');
  const toast = document.getElementById('toast');

  function renderSubject(template, data) {
    return String(template || '').replace(/\{\{(\w+)\}\}/g, (_, key) => {
      const value = data[key];
      return value !== undefined && value !== null && String(value).trim() !== ''
        ? String(value)
        : '';
    });
  }

  function refreshSubject() {
    subjectInput.value = renderSubject(current.subject, values);
  }

  function buildList() {
    list.innerHTML = '';
    templates.forEach(template => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `template-item ${template.id === current.id ? 'active' : ''}`;
      button.disabled = !template.active;
      button.innerHTML = `
        <span class="template-code">${template.id}</span>
        <span class="template-copy">
          <strong>${template.title}</strong>
          <span>${template.shortTitle}</span>
        </span>`;
      if (template.active) button.addEventListener('click', () => selectTemplate(template.id));
      list.appendChild(button);
    });
  }

  function selectTemplate(id) {
    const next = templates.find(t => t.id === id && t.active);
    if (!next) return;
    current = next;
    setupTemplate();
  }

  function setupTemplate() {
    values = {};
    current.fields.forEach(field => values[field.key] = localStorage.getItem(`ptcad_${current.id}_${field.key}`) || field.default || '');
    currentCode.textContent = `${current.id} · ${current.stage}`;
    currentTitle.textContent = current.title;
    refreshSubject();
    attachmentText.textContent = current.attachment || 'ไม่มีไฟล์แนบ';
    buildForm();
    buildList();
    refreshPreview();
  }

  function buildForm() {
    form.innerHTML = '';
    current.fields.forEach(field => {
      const wrap = document.createElement('div');
      wrap.className = `field ${field.full ? 'full' : ''}`;
      const label = document.createElement('label');
      label.textContent = field.label;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = values[field.key];
      input.addEventListener('input', e => {
        values[field.key] = e.target.value;
        localStorage.setItem(`ptcad_${current.id}_${field.key}`, e.target.value);
        refreshSubject();
        refreshPreview();
      });
      wrap.append(label, input);
      form.appendChild(wrap);
    });
  }

  function refreshPreview() {
    renderedHtml = current.render(values);
    preview.srcdoc = renderedHtml;
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 2100);
  }

  async function copyText(text, success) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(success);
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
      showToast(success);
    }
  }

  async function copyRichEmail() {
    try {
      const blobHtml = new Blob([renderedHtml], {type: 'text/html'});
      const doc = new DOMParser().parseFromString(renderedHtml, 'text/html');
      const blobText = new Blob([doc.body.innerText], {type: 'text/plain'});
      await navigator.clipboard.write([new ClipboardItem({'text/html': blobHtml, 'text/plain': blobText})]);
      showToast('คัดลอกอีเมลแบบจัดรูปแบบแล้ว');
    } catch {
      await copyText(renderedHtml, 'คัดลอก HTML แล้ว');
    }
  }

  function downloadHtml() {
    const blob = new Blob([renderedHtml], {type: 'text/html;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${current.id}-PTCAD-email.html`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('ดาวน์โหลดไฟล์ HTML แล้ว');
  }

  document.getElementById('copySubjectBtn').addEventListener('click', () => copyText(subjectInput.value, 'คัดลอก Subject แล้ว'));
  document.getElementById('copyEmailBtn').addEventListener('click', copyRichEmail);
  document.getElementById('downloadBtn').addEventListener('click', downloadHtml);
  document.getElementById('resetBtn').addEventListener('click', () => {
    current.fields.forEach(field => localStorage.removeItem(`ptcad_${current.id}_${field.key}`));
    setupTemplate();
    showToast('คืนค่าเริ่มต้นแล้ว');
  });
  document.querySelectorAll('.device-button').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.device-button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const viewport = document.getElementById('emailViewport');
    viewport.className = `email-viewport ${btn.dataset.view}`;
  }));

  setupTemplate();
})();
