window.PTCAD_TEMPLATES = window.PTCAD_TEMPLATES || [];

window.PTCAD_TEMPLATES.push({
  id: "E07",
  stage: "DELIVERY",
  title: "ส่ง License และข้อมูลการใช้งาน",
  shortTitle: "License Delivery",
  active: true,
  subject: "PTCAD | License พร้อมใช้งานสำหรับ {{CompanyName}}",
  attachment: "License File / Installation Guide / User Manual (ตามที่เลือก)",

  fields: [
    { key: "CustomerName", label: "ชื่อลูกค้า", default: "คุณลูกค้า", full: false },
    { key: "CompanyName", label: "ชื่อบริษัทลูกค้า", default: "บริษัทของท่าน", full: false },

    {
      key: "ProductName",
      label: "ผลิตภัณฑ์",
      type: "select",
      default: "PTCAD Standard",
      full: false,
      options: [
        { value: "PTCAD Lite", label: "PTCAD Lite" },
        { value: "PTCAD Standard", label: "PTCAD Standard" },
        { value: "PTCAD Plus", label: "PTCAD Plus" }
      ]
    },

    {
      key: "LicenseType",
      label: "ประเภท License",
      type: "select",
      default: "Subscription — เช่าใช้รายปี",
      full: false,
      options: [
        { value: "Subscription — เช่าใช้รายปี", label: "Subscription — เช่าใช้รายปี" },
        { value: "Perpetual — ซื้อขาด", label: "Perpetual — ซื้อขาด" },]
    },

    { key: "LicenseKey", label: "License Key", default: "XXXX-XXXX-XXXX-XXXX", full: true },
    { key: "Quantity", label: "จำนวน License", default: "1 License", full: false },
    { key: "StartDate", label: "วันที่เริ่มใช้งาน", type: "date", default: "", full: false },
    { key: "ExpireDate", label: "วันหมดอายุ", type: "date", default: "", full: false },

    { key: "DownloadUrl", label: "ลิงก์ดาวน์โหลดโปรแกรม", default: "", full: true },
    { key: "InstallGuideUrl", label: "ลิงก์คู่มือติดตั้ง", default: "", full: true },
    { key: "ActivateGuideUrl", label: "ลิงก์คู่มือ Activate", default: "", full: true },
    { key: "LineUrl", label: "ลิงก์ LINE Support", default: "", full: true },
    { key: "AIUrl", label: "ลิงก์ AI Assistant", default: "", full: true },

    { key: "AttachLicenseFile", label: "แนบ License File", type: "checkbox", default: true, full: true },
    { key: "AttachInstallGuide", label: "แนบ Installation Guide", type: "checkbox", default: true, full: true },
    { key: "AttachUserManual", label: "แนบ User Manual", type: "checkbox", default: true, full: true },
    { key: "AttachTaxInvoice", label: "แนบใบกำกับภาษี", type: "checkbox", default: false, full: true },
    { key: "AttachReleaseNotes", label: "แนบ Release Notes", type: "checkbox", default: false, full: true },

    { key: "SalesName", label: "ชื่อเซลล์", default: "เจ้าหน้าที่ฝ่ายขาย", full: true }
  ],

  render(values) {
    const v = {
      CustomerName: values.CustomerName || "คุณลูกค้า",
      CompanyName: values.CompanyName || "บริษัทของท่าน",
      ProductName: values.ProductName || "PTCAD Standard",
      LicenseType: values.LicenseType || "Subscription — เช่าใช้รายปี",
      LicenseKey: values.LicenseKey || "XXXX-XXXX-XXXX-XXXX",
      Quantity: values.Quantity || "1 License",
      StartDate: values.StartDate || "วันที่ เดือน ปี",
      ExpireDate: values.ExpireDate || "วันที่ เดือน ปี",
      DownloadUrl: values.DownloadUrl || "",
      InstallGuideUrl: values.InstallGuideUrl || "",
      ActivateGuideUrl: values.ActivateGuideUrl || "",
      LineUrl: values.LineUrl || "",
      AIUrl: values.AIUrl || "",
      SalesName: values.SalesName || "เจ้าหน้าที่ฝ่ายขาย"
    };

    const expiryText = v.LicenseType.includes("Perpetual")
      ? "ไม่มีวันหมดอายุ"
      : v.ExpireDate;

    const attachmentItems = [
      [values.AttachLicenseFile, "License File"],
      [values.AttachInstallGuide, "Installation Guide"],
      [values.AttachUserManual, "User Manual"],
      [values.AttachTaxInvoice, "ใบกำกับภาษี"],
      [values.AttachReleaseNotes, "Release Notes"]
    ].filter(([enabled]) => Boolean(enabled));

    const attachmentRows = attachmentItems.length
      ? attachmentItems.map(([, label]) => `
          <tr>
            <td style="padding:10px 13px;background:#fbfdff;border:1px solid #e2edf8;border-radius:10px;font-size:15px;">
              ${label}
            </td>
          </tr>
          <tr><td style="height:8px;"></td></tr>
        `).join("")
      : `
          <tr>
            <td style="padding:12px 14px;background:#fff8e8;border:1px solid #f1d897;border-radius:10px;font-size:15px;color:#795b18;">
              ไม่มีไฟล์แนบที่เลือก
            </td>
          </tr>
        `;

    const makeButton = (url, text, color) => url
      ? `<a href="${url}" style="display:inline-block;margin:6px;padding:13px 20px;border-radius:10px;background:${color};color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;">${text}</a>`
      : "";

    const buttons = [
      makeButton(v.DownloadUrl, "ดาวน์โหลดโปรแกรม", "#2d66d5"),
      makeButton(v.InstallGuideUrl, "คู่มือติดตั้ง", "#2d66d5"),
      makeButton(v.ActivateGuideUrl, "คู่มือ Activate", "#2d66d5"),
      makeButton(v.LineUrl, "LINE Support", "#19b55b"),
      makeButton(v.AIUrl, "AI Assistant", "#6c4cff")
    ].join("");

    const ctaBlock = buttons
      ? `<div style="text-align:center;margin:26px 0 8px;">${buttons}</div>`
      : "";

    return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>PTCAD License Delivery</title>
</head>
<body style="margin:0;padding:0;background:#f4f8fc;font-family:Arial,'Noto Sans Thai',sans-serif;color:#22324a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f8fc;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:680px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 16px 45px rgba(36,72,121,.12);">
          <tr>
            <td align="center" style="padding:28px 24px 22px;background:#eef6ff;border-bottom:1px solid #dce9f7;">
              <img src="https://pt-cad.com/wp-content/uploads/2025/06/cropped-PTCAD-Logo-Trademark-1-300x300.png" alt="PTCAD" width="82" style="display:block;width:82px;height:auto;margin:0 auto 10px;">
              <div style="font-size:15px;color:#4773b5;">ใช้งานง่าย • คุ้มค่า • พร้อมช่วยเหลือ</div>
            </td>
          </tr>

          <tr>
            <td style="padding:34px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;background:#eef9f2;border:1px solid #ccead6;border-radius:14px;">
                <tr>
                  <td style="padding:20px;text-align:center;">
                    <div style="width:42px;height:42px;border-radius:50%;background:#19b55b;color:#ffffff;line-height:42px;text-align:center;font-size:20px;font-weight:700;margin:0 auto 10px;">✓</div>
                    <div style="font-size:21px;font-weight:700;color:#176f3b;">License พร้อมใช้งานแล้ว</div>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 16px;font-size:18px;line-height:1.7;"><strong>เรียน ${v.CustomerName}</strong></p>
              <p style="margin:0 0 16px;font-size:17px;line-height:1.8;">สวัสดีค่ะ</p>

              <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">
                ขอขอบคุณที่เลือกใช้ผลิตภัณฑ์ <strong>PTCAD</strong> ค่ะ
                ทีมงานได้จัดเตรียม License สำหรับ <strong>${v.CompanyName}</strong>
                เรียบร้อยแล้ว โดยมีรายละเอียดดังต่อไปนี้
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0;background:#f8fbff;border:1px solid #dce9f7;border-radius:14px;">
                <tr>
                  <td style="padding:13px 18px;color:#6c7f98;font-size:14px;">ผลิตภัณฑ์</td>
                  <td align="right" style="padding:13px 18px;font-size:15px;color:#17449f;"><strong>${v.ProductName}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">ประเภท License</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.LicenseType}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">License Key</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.LicenseKey}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">จำนวน</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.Quantity}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">วันที่เริ่มใช้งาน</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.StartDate}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">วันหมดอายุ</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${expiryText}</strong></td>
                </tr>
              </table>

              <div style="font-size:18px;color:#18345c;font-weight:700;margin:26px 0 14px;">ไฟล์ที่แนบมาพร้อมอีเมล</div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 22px;">
                ${attachmentRows}
              </table>

              ${ctaBlock}

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0 20px;background:#eef6ff;border-left:4px solid #2d66d5;border-radius:12px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <div style="font-size:17px;font-weight:700;color:#17449f;margin-bottom:7px;">Technical Support</div>
                    <div style="font-size:15px;line-height:1.75;color:#3f5674;">
                      หากพบปัญหาในการติดตั้งหรือ Activate License
                      ทีม Technical Support พร้อมให้คำแนะนำในวันจันทร์–ศุกร์
                      เวลา 08:30–17:30 น.
                    </div>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">
                หากมีข้อสงสัยเกี่ยวกับ License การติดตั้ง หรือการเริ่มต้นใช้งาน
                สามารถตอบกลับอีเมลฉบับนี้ได้โดยตรง
                ดิฉัน <strong>${v.SalesName}</strong> ยินดีให้ข้อมูลและดูแลท่านค่ะ
              </p>

              <p style="margin:0;font-size:17px;line-height:1.8;">ขอบคุณค่ะ</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
  }
});