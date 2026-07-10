window.PTCAD_TEMPLATES = window.PTCAD_TEMPLATES || [];

window.PTCAD_TEMPLATES.push({
  id: "E04",
  stage: "PRE-SALES",
  title: "ขอข้อมูลเพิ่มเติม",
  shortTitle: "Smart Information Request",
  active: true,
  subject: "PTCAD | ขอข้อมูลเพิ่มเติมเพื่อดำเนินการสำหรับ {{CompanyName}}",
  attachment: "ไม่มีไฟล์แนบ",

  fields: [
    {
      key: "Preset",
      label: "เลือกชุดข้อมูลที่ต้องการ",
      type: "select",
      default: "custom",
      full: true,
      options: [
        { value: "custom", label: "กำหนดเอง" },
        { value: "tax", label: "ข้อมูลสำหรับออกใบกำกับภาษี" },
        { value: "order", label: "ข้อมูลสำหรับเปิดคำสั่งซื้อ" },
        { value: "license", label: "ข้อมูลสำหรับจัดส่ง License" }
      ]
    },
    { key: "CustomerName", label: "ชื่อลูกค้า", default: "คุณลูกค้า", full: false },
    { key: "CompanyName", label: "ชื่อบริษัทลูกค้า", default: "บริษัทของท่าน", full: false },
    { key: "SalesName", label: "ชื่อเซลล์", default: "เจ้าหน้าที่ฝ่ายขาย", full: true },

    { key: "NeedCompany", label: "ชื่อบริษัท / หน่วยงาน", type: "checkbox", default: false, full: true },
    { key: "NeedTaxId", label: "เลขประจำตัวผู้เสียภาษี", type: "checkbox", default: true, full: true },
    { key: "NeedTaxAddress", label: "ที่อยู่สำหรับออกใบกำกับภาษี", type: "checkbox", default: true, full: true },
    { key: "NeedBranch", label: "สำนักงานใหญ่ / สาขา", type: "checkbox", default: false, full: true },
    { key: "NeedContact", label: "ชื่อผู้ประสานงาน", type: "checkbox", default: false, full: true },
    { key: "NeedPhone", label: "เบอร์โทรศัพท์", type: "checkbox", default: false, full: true },
    { key: "NeedEmail", label: "อีเมลสำหรับจัดส่ง License", type: "checkbox", default: false, full: true },
    { key: "NeedQuantity", label: "จำนวน License ที่ต้องการ", type: "checkbox", default: false, full: true },
    { key: "NeedPO", label: "Purchase Order (PO) (ถ้ามี)", type: "checkbox", default: false, full: true },
    { key: "NeedPayment", label: "หลักฐานการชำระเงิน", type: "checkbox", default: false, full: true },
    { key: "NeedWithholding", label: "หนังสือรับรองการหักภาษี ณ ที่จ่าย", type: "checkbox", default: false, full: true },
    { key: "NeedUserName", label: "ชื่อผู้ใช้งานสำหรับออก License", type: "checkbox", default: false, full: true },

    { key: "LineUrl", label: "ลิงก์ LINE Official Account", default: "", full: true }
  ],

  onFieldChange(key, value, values) {
    if (key !== "Preset") return values;

    const checkboxKeys = [
      "NeedCompany","NeedTaxId","NeedTaxAddress","NeedBranch","NeedContact",
      "NeedPhone","NeedEmail","NeedQuantity","NeedPO","NeedPayment",
      "NeedWithholding","NeedUserName"
    ];

    checkboxKeys.forEach(item => values[item] = false);

    if (value === "tax") {
      values.NeedCompany = true;
      values.NeedTaxId = true;
      values.NeedTaxAddress = true;
      values.NeedBranch = true;
    }

    if (value === "order") {
      values.NeedCompany = true;
      values.NeedContact = true;
      values.NeedPhone = true;
      values.NeedEmail = true;
      values.NeedQuantity = true;
      values.NeedPO = true;
    }

    if (value === "license") {
      values.NeedContact = true;
      values.NeedPhone = true;
      values.NeedEmail = true;
      values.NeedUserName = true;
    }

    return values;
  },

  render(values) {
    const v = {
      CustomerName: values.CustomerName || "คุณลูกค้า",
      CompanyName: values.CompanyName || "บริษัทของท่าน",
      SalesName: values.SalesName || "เจ้าหน้าที่ฝ่ายขาย",
      LineUrl: values.LineUrl || ""
    };

    const requested = [
      ["NeedCompany", "ชื่อบริษัท / หน่วยงาน"],
      ["NeedTaxId", "เลขประจำตัวผู้เสียภาษี"],
      ["NeedTaxAddress", "ที่อยู่สำหรับออกใบกำกับภาษี"],
      ["NeedBranch", "สำนักงานใหญ่ / สาขา"],
      ["NeedContact", "ชื่อผู้ประสานงาน"],
      ["NeedPhone", "เบอร์โทรศัพท์"],
      ["NeedEmail", "อีเมลสำหรับจัดส่ง License"],
      ["NeedQuantity", "จำนวน License ที่ต้องการ"],
      ["NeedPO", "Purchase Order (PO) (ถ้ามี)"],
      ["NeedPayment", "หลักฐานการชำระเงิน"],
      ["NeedWithholding", "หนังสือรับรองการหักภาษี ณ ที่จ่าย"],
      ["NeedUserName", "ชื่อผู้ใช้งานสำหรับออก License"]
    ].filter(([key]) => Boolean(values[key]));

    const requestRows = requested.length
      ? requested.map(([, label]) => `
          <tr>
            <td style="padding:11px 14px;background:#fbfdff;border:1px solid #e2edf8;border-radius:10px;font-size:16px;">
              ${label}
            </td>
          </tr>
          <tr><td style="height:8px;"></td></tr>
        `).join("")
      : `
        <tr>
          <td style="padding:14px;background:#fff8e8;border:1px solid #f3d99a;border-radius:10px;font-size:16px;color:#7a5a15;">
            กรุณาเลือกข้อมูลที่ต้องการอย่างน้อย 1 รายการก่อนส่ง
          </td>
        </tr>
      `;

    const lineButton = v.LineUrl
      ? `<div style="text-align:center;margin:26px 0 6px;">
          <a href="${v.LineUrl}" style="display:inline-block;padding:13px 22px;background:#19b55b;color:#ffffff;text-decoration:none;border-radius:10px;font-weight:700;">
            ส่งข้อมูลผ่าน LINE Official Account
          </a>
        </div>`
      : "";

    return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>PTCAD Request Information</title>
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
              <p style="margin:0 0 16px;font-size:18px;line-height:1.7;"><strong>เรียน ${v.CustomerName}</strong></p>
              <p style="margin:0 0 16px;font-size:17px;line-height:1.8;">สวัสดีค่ะ</p>

              <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">
                ขอบคุณสำหรับข้อมูลที่ส่งมาให้ทีมงานค่ะ
                เพื่อให้สามารถดำเนินการสำหรับ <strong>${v.CompanyName}</strong>
                ในขั้นตอนถัดไปได้อย่างถูกต้องและครบถ้วน
                รบกวนส่งข้อมูลเพิ่มเติม ดังต่อไปนี้
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0;">
                ${requestRows}
              </table>

              <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">
                เมื่อได้รับข้อมูลครบถ้วนแล้ว ทีมงานจะดำเนินการและประสานงานในขั้นตอนถัดไปโดยเร็วที่สุดค่ะ
              </p>

              ${lineButton}

              <p style="margin:22px 0 18px;font-size:17px;line-height:1.85;">
                หากมีข้อสงสัยเพิ่มเติม สามารถตอบกลับอีเมลนี้ได้โดยตรง
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