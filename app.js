(() => {
  const templates = window.PTCAD_TEMPLATES || {};
  let activeId = "E01";
  let activeValues = {};
  let latestEmailHtml = "";

  const listEl = document.getElementById("templateList");
  const fieldsEl = document.getElementById("dynamicFields");
  const subjectInput = document.getElementById("subjectInput");
  const preview = document.getElementById("emailPreview");
  const titleEl = document.getElementById("pageTitle");
  const attachmentText = document.getElementById("attachmentText");
  const toast = document.getElementById("toast");

  const orderedIds = Object.keys(templates).sort();

  function renderTemplateList() {
    listEl.innerHTML = orderedIds.map(id => {
      const t = templates[id];
      const ready = t.status === "ready";
      return `
        <button class="template-item ${id === activeId ? "active" : ""} ${ready ? "" : "disabled"}" data-id="${id}" type="button">
          <span class="template-code">${id}</span>
          <span class="template-copy"><strong>${t.title}</strong><span>${t.shortTitle}</span></span>
          <span class="template-dot"></span>
        </button>`;
    }).join("");

    listEl.querySelectorAll(".template-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        if (templates[id].status !== "ready") {
          showToast(`${id} เตรียมไฟล์ไว้แล้ว รอเติมเนื้อหา`);
          return;
        }
        activeId = id;
        loadTemplate();
      });
    });
  }

  function loadTemplate() {
    const t = templates[activeId];
    activeValues = Object.fromEntries((t.fields || []).map(field => [field.key, localStorage.getItem(`ptcad-${activeId}-${field.key}`) || field.defaultValue || ""]));
    subjectInput.value = localStorage.getItem(`ptcad-${activeId}-subject`) || t.subject;
    titleEl.textContent = `${t.id} · ${t.title}`;
    attachmentText.textContent = t.attachments?.length ? t.attachments.join(", ") : "ไม่มีไฟล์แนบเริ่มต้น";
    renderFields(t);
    renderTemplateList();
    updatePreview();
  }

  function renderFields(t) {
    fieldsEl.innerHTML = (t.fields || []).map(field => `
      <div class="field-group ${field.fullWidth ? "full-width" : ""}">
        <label for="field-${field.key}">${field.label}</label>
        <input id="field-${field.key}" data-key="${field.key}" type="text" value="${escapeAttribute(activeValues[field.key])}">
      </div>`).join("");

    fieldsEl.querySelectorAll("input").forEach(input => {
      input.addEventListener("input", () => {
        activeValues[input.dataset.key] = input.value;
        localStorage.setItem(`ptcad-${activeId}-${input.dataset.key}`, input.value);
        updatePreview();
      });
    });
  }

  function updatePreview() {
    const t = templates[activeId];
    latestEmailHtml = t.buildEmail(activeValues);
    preview.srcdoc = latestEmailHtml;
  }

  function escapeAttribute(value) {
    return String(value ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  subjectInput.addEventListener("input", () => {
    localStorage.setItem(`ptcad-${activeId}-subject`, subjectInput.value);
  });

  document.getElementById("copySubjectBtn").addEventListener("click", async () => {
    await navigator.clipboard.writeText(subjectInput.value);
    showToast("คัดลอกหัวข้ออีเมลแล้ว");
  });

  document.getElementById("copyEmailBtn").addEventListener("click", async () => {
    try {
      const plainText = preview.contentDocument?.body?.innerText || "";
      const item = new ClipboardItem({
        "text/html": new Blob([latestEmailHtml], { type: "text/html" }),
        "text/plain": new Blob([plainText], { type: "text/plain" })
      });
      await navigator.clipboard.write([item]);
      showToast("คัดลอกอีเมลแบบจัดรูปแบบแล้ว");
    } catch (error) {
      await navigator.clipboard.writeText(preview.contentDocument?.body?.innerText || "");
      showToast("คัดลอกข้อความอีเมลแล้ว");
    }
  });

  document.getElementById("exportBtn").addEventListener("click", () => {
    const blob = new Blob([latestEmailHtml], { type: "text/html;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${activeId}-PTCAD-email.html`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
    showToast("Export HTML เรียบร้อย");
  });

  document.querySelectorAll(".device-button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".device-button").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      preview.classList.toggle("mobile", button.dataset.width === "mobile");
    });
  });

  loadTemplate();
})();
