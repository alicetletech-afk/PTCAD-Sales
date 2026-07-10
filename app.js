const els = {
  templateList: document.getElementById('templateList'),
  pageTitle: document.getElementById('pageTitle'),
  subject: document.getElementById('subjectInput'),
  customer: document.getElementById('customerName'),
  sales: document.getElementById('salesName'),
  company: document.getElementById('companyName'),
  trial: document.getElementById('trialLink'),
  info: document.getElementById('infoLink'),
  preview: document.getElementById('emailPreview'),
  viewport: document.getElementById('emailViewport'),
  toast: document.getElementById('toast')
};

const STORAGE_KEY = 'ptcad-email-hub-intro-v1';
let activeTemplate = 'intro';

function renderTemplateList() {
  els.templateList.innerHTML = TEMPLATE_CATALOG.map(item => `
    <button class="template-item ${item.id === activeTemplate ? 'active' : ''} ${!item.ready ? 'locked' : ''}" data-id="${item.id}" type="button">
      <span class="template-number">${item.code}</span>
      <span class="template-copy"><strong>${item.title}</strong><small>${item.subtitle}</small></span>
      <span class="status-dot"></span>
    </button>
  `).join('');

  els.templateList.querySelectorAll('.template-item').forEach(button => {
    button.addEventListener('click', () => {
      const item = TEMPLATE_CATALOG.find(t => t.id === button.dataset.id);
      if (!item.ready) {
        showToast(`${item.code} เตรียมโครงไว้แล้ว กำลังรอข้อความฉบับถัดไป`);
        return;
      }
      activeTemplate = item.id;
      els.pageTitle.textContent = item.title;
      renderTemplateList();
    });
  });
}

function getData() {
  return {
    subject: els.subject.value.trim(),
    customerName: els.customer.value.trim(),
    salesName: els.sales.value.trim(),
    companyName: els.company.value.trim(),
    trialLink: els.trial.value.trim(),
    infoLink: els.info.value.trim()
  };
}

function setData(data) {
  els.subject.value = data.subject ?? DEFAULT_DATA.subject;
  els.customer.value = data.customerName ?? DEFAULT_DATA.customerName;
  els.sales.value = data.salesName ?? DEFAULT_DATA.salesName;
  els.company.value = data.companyName ?? DEFAULT_DATA.companyName;
  els.trial.value = data.trialLink ?? DEFAULT_DATA.trialLink;
  els.info.value = data.infoLink ?? DEFAULT_DATA.infoLink;
}

function renderPreview() {
  const html = buildEmailHtml(getData(), 'assets/images/ptcad-logo.png');
  els.preview.srcdoc = html;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getData()));
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove('show'), 2200);
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch (error) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    showToast(successMessage);
  }
}

async function copyRichEmail() {
  const html = buildEmailHtml(getData(), 'assets/images/ptcad-logo.png');
  const plain = els.preview.contentDocument?.body.innerText || '';
  try {
    if (window.ClipboardItem && navigator.clipboard?.write) {
      const item = new ClipboardItem({
        'text/html': new Blob([html], { type: 'text/html' }),
        'text/plain': new Blob([plain], { type: 'text/plain' })
      });
      await navigator.clipboard.write([item]);
      showToast('คัดลอกอีเมลแบบจัดรูปแบบแล้ว');
    } else {
      await copyText(plain, 'คัดลอกข้อความอีเมลแล้ว');
    }
  } catch (error) {
    await copyText(plain, 'คัดลอกข้อความอีเมลแล้ว');
  }
}

function exportHtml() {
  const html = buildEmailHtml(getData(), 'https://pt-cad.com/wp-content/uploads/2025/06/cropped-PTCAD-Logo-Trademark-1-300x300.png');
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'PTCAD-E01-Product-Introduction.html';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('Export HTML เรียบร้อย');
}

function resetData() {
  localStorage.removeItem(STORAGE_KEY);
  setData(DEFAULT_DATA);
  renderPreview();
  showToast('รีเซ็ตข้อมูลแล้ว');
}

function init() {
  renderTemplateList();
  const saved = localStorage.getItem(STORAGE_KEY);
  setData(saved ? { ...DEFAULT_DATA, ...JSON.parse(saved) } : DEFAULT_DATA);
  renderPreview();

  [els.subject, els.customer, els.sales, els.company, els.trial, els.info].forEach(input => {
    input.addEventListener('input', renderPreview);
  });

  document.getElementById('copySubjectBtn').addEventListener('click', () => copyText(els.subject.value, 'คัดลอก Subject แล้ว'));
  document.getElementById('copyEmailBtn').addEventListener('click', copyRichEmail);
  document.getElementById('exportBtn').addEventListener('click', exportHtml);
  document.getElementById('resetBtn').addEventListener('click', resetData);

  document.querySelectorAll('.icon-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.icon-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      els.viewport.className = `email-viewport ${button.dataset.width}`;
    });
  });
}

document.addEventListener('DOMContentLoaded', init);
