window.PTCAD_TEMPLATES = window.PTCAD_TEMPLATES || [];

window.PTCAD_TEMPLATES.push({
  id: "E08",
  stage: "RENEWAL",
  title: "แจ้งเตือนต่ออายุล่วงหน้า 30 วัน",
  shortTitle: "Renewal Reminder · 30 Days",
  active: true,
  subject: "PTCAD | แจ้งเตือนการต่ออายุ License สำหรับ {{CompanyName}}",
  attachment: "ใบเสนอราคาต่ออายุ (ถ้ามี)",

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
      default: "Subscription License",
      full: false,
      options: [
        { value: "Subscription License", label: "Subscription License" },
        { value: "Network License", label: "Network License" }
      ]
    },

    { key: "LicenseNo", label: "เลขที่ License", default: "XXXX-XXXX-XXXX-XXXX", full: true },
    { key: "ExpireDate", label: "วันหมดอายุ", default: "DD-MM-YYYY", full: false },
    { key: "Quantity", label: "จำนวน License", default: "1 License", full: false },

    {
      key: "AttachQuotation",
      label: "แนบใบเสนอราคาต่ออายุ",
      type: "checkbox",
      default: false,
      full: true
    },

    { key: "RenewalUrl", label: "ลิงก์ขอใบเสนอราคาต่ออายุ", default: "", full: true },
    { key: "LineUrl", label: "ลิงก์ LINE Official Account", default: "", full: true },
    { key: "SalesName", label: "ชื่อเซลล์", default: "เจ้าหน้าที่ฝ่ายขาย", full: true }
  ],

  render(values) {
    const v = {
      CustomerName: values.CustomerName || "คุณลูกค้า",
      CompanyName: values.CompanyName || "บริษัทของท่าน",
      ProductName: values.ProductName || "PTCAD Standard",
      LicenseType: values.LicenseType || "Subscription License",
      LicenseNo: values.LicenseNo || "XXXX-XXXX-XXXX-XXXX",
      ExpireDate: values.ExpireDate || "DD-MM-YYYY",
      Quantity: values.Quantity || "1 License",
      RenewalUrl: values.RenewalUrl || "",
      LineUrl: values.LineUrl || "",
      SalesName: values.SalesName || "เจ้าหน้าที่ฝ่ายขาย"
    };

    const renewalButton = v.RenewalUrl
      ? `<a href="${v.RenewalUrl}" style="display:inline-block;margin:6px;padding:13px 22px;border-radius:10px;background:#2d66d5;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;">
          ขอใบเสนอราคาต่ออายุ
        </a>`
      : "";

    const lineButton = v.LineUrl
      ? `<a href="${v.LineUrl}" style="display:inline-block;margin:6px;padding:13px 22px;border-radius:10px;background:#19b55b;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;">
          LINE Official Account
        </a>`
      : "";

    const ctaBlock = (renewalButton || lineButton)
      ? `<div style="text-align:center;margin:28px 0 8px;">${renewalButton}${lineButton}</div>`
      : "";

    const attachmentBlock = values.AttachQuotation
      ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:20px 0;background:#fbfdff;border:1px solid #e2edf8;border-radius:12px;">
          <tr>
            <td style="padding:14px 16px;font-size:15px;line-height:1.7;color:#30445f;">
              ใบเสนอราคาสำหรับการต่ออายุ License ได้แนบมาพร้อมอีเมลฉบับนี้
            </td>
          </tr>
        </table>`
      : "";

    return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>PTCAD Renewal Reminder 30 Days</title>
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
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;background:linear-gradient(135deg,#fffaf0,#fff3d7);border:1px solid #f0d79c;border-radius:16px;">
                <tr>
                  <td style="padding:24px 24px 22px;">
                    <div style="display:inline-block;padding:6px 12px;border-radius:999px;background:#ffe6a7;color:#7a5510;font-size:12px;font-weight:700;letter-spacing:.08em;">
                      RENEWAL REMINDER
                    </div>

                    <div style="margin-top:16px;font-size:23px;line-height:1.35;font-weight:700;color:#6d4a00;">
                      แจ้งเตือนการต่ออายุ License
                    </div>

                    <div style="margin-top:8px;font-size:18px;line-height:1.5;color:#8a6419;">
                      เหลืออีกประมาณ <strong>30 วัน</strong>
                    </div>

                    <div style="margin-top:12px;font-size:15px;line-height:1.75;color:#6f5b34;">
                      เพื่อให้สามารถใช้งานได้อย่างต่อเนื่อง แนะนำให้ดำเนินการต่ออายุล่วงหน้าก่อนวันหมดอายุ
                    </div>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 16px;font-size:18px;line-height:1.7;"><strong>เรียน ${v.CustomerName}</strong></p>
              <p style="margin:0 0 16px;font-size:17px;line-height:1.8;">สวัสดีค่ะ</p>

              <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">
                ขอแจ้งให้ทราบว่า License ผลิตภัณฑ์ <strong>PTCAD</strong>
                ของ <strong>${v.CompanyName}</strong> กำลังจะหมดอายุในอีกประมาณ 30 วันค่ะ
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
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">เลขที่ License</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.LicenseNo}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">จำนวน</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.Quantity}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">วันหมดอายุ</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;color:#a66500;"><strong>${v.ExpireDate}</strong></td>
                </tr>
              </table>

              <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">
                เพื่อป้องกันการใช้งานสะดุดและให้ทีมงานมีเวลาเพียงพอในการตรวจสอบข้อมูล
                แนะนำให้ดำเนินการต่ออายุก่อนวันหมดอายุค่ะ
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0;background:#eef6ff;border-left:4px solid #2d66d5;border-radius:12px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <div style="font-size:17px;font-weight:700;color:#17449f;margin-bottom:7px;">ทีมงานช่วยดูแลให้ได้</div>
                    <div style="font-size:15px;line-height:1.75;color:#3f5674;">
                      สามารถขอใบเสนอราคาต่ออายุ ตรวจสอบรายละเอียด License
                      หรือสอบถามเงื่อนไขเพิ่มเติมได้โดยตอบกลับอีเมลฉบับนี้โดยตรง
                    </div>
                  </td>
                </tr>
              </table>

              ${attachmentBlock}
              ${ctaBlock}

              <p style="margin:24px 0 18px;font-size:17px;line-height:1.85;">
                หากต้องการใบเสนอราคา หรือมีข้อสงสัยเกี่ยวกับการต่ออายุ
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