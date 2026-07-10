window.PTCAD_TEMPLATES = window.PTCAD_TEMPLATES || [];

window.PTCAD_TEMPLATES.push({
  id: "E11",
  stage: "RENEWAL",
  title: "ส่งใบเสนอราคาต่ออายุ License",
  shortTitle: "Renewal Quotation",
  active: true,
  subject: "PTCAD | ใบเสนอราคาสำหรับการต่ออายุ License ของ {{CompanyName}}",
  attachment: "ใบเสนอราคาต่ออายุ / รายละเอียดบัญชีธนาคาร",

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
    { key: "Quantity", label: "จำนวน License", default: "1 License", full: false },
    { key: "ExpireDate", label: "วันหมดอายุเดิม", default: "DD-MM-YYYY", full: false },

    { key: "QuotationNo", label: "เลขที่ใบเสนอราคา", default: "PAP-QXXXXX", full: false },
    { key: "QuotationDate", label: "วันที่ใบเสนอราคา", default: "DD-MM-YYYY", full: false },
    { key: "ValidUntil", label: "ใบเสนอราคามีผลถึงวันที่", default: "DD-MM-YYYY", full: false },

    {
      key: "AttachQuotation",
      label: "แนบใบเสนอราคาต่ออายุ",
      type: "checkbox",
      default: true,
      full: true
    },

    {
      key: "AttachBookBank",
      label: "แนบรายละเอียดบัญชีธนาคาร",
      type: "checkbox",
      default: true,
      full: true
    },

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
      Quantity: values.Quantity || "1 License",
      ExpireDate: values.ExpireDate || "DD-MM-YYYY",
      QuotationNo: values.QuotationNo || "PAP-QXXXXX",
      QuotationDate: values.QuotationDate || "DD-MM-YYYY",
      ValidUntil: values.ValidUntil || "DD-MM-YYYY",
      LineUrl: values.LineUrl || "",
      SalesName: values.SalesName || "เจ้าหน้าที่ฝ่ายขาย"
    };

    const attachmentItems = [
      [values.AttachQuotation, "ใบเสนอราคาสำหรับการต่ออายุ License"],
      [values.AttachBookBank, "รายละเอียดบัญชีธนาคารสำหรับการชำระเงิน"]
    ].filter(([enabled]) => Boolean(enabled));

    const attachmentRows = attachmentItems.length
      ? attachmentItems.map(([, label]) => `
          <tr>
            <td style="padding:11px 14px;background:#fbfdff;border:1px solid #e2edf8;border-radius:10px;font-size:15px;">
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

    const lineButton = v.LineUrl
      ? `<div style="text-align:center;margin:28px 0 8px;">
          <a href="${v.LineUrl}" style="display:inline-block;padding:13px 22px;border-radius:10px;background:#19b55b;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;">
            ติดต่อผ่าน LINE Official Account
          </a>
        </div>`
      : "";

    return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>PTCAD Renewal Quotation</title>
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
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;background:linear-gradient(135deg,#eef6ff,#f8fbff);border:1px solid #cfe0f5;border-radius:16px;">
                <tr>
                  <td style="padding:24px 24px 22px;">
                    <div style="display:inline-block;padding:6px 12px;border-radius:999px;background:#dcecff;color:#17449f;font-size:12px;font-weight:700;letter-spacing:.08em;">
                      RENEWAL QUOTATION
                    </div>

                    <div style="margin-top:16px;font-size:23px;line-height:1.35;font-weight:700;color:#17449f;">
                      ใบเสนอราคาสำหรับการต่ออายุ License
                    </div>

                    <div style="margin-top:10px;font-size:15px;line-height:1.75;color:#4d6483;">
                      เพื่อให้สามารถใช้งาน PTCAD ได้อย่างต่อเนื่อง ทางทีมงานได้จัดเตรียมใบเสนอราคาสำหรับการต่ออายุ License เรียบร้อยแล้วค่ะ
                    </div>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 16px;font-size:18px;line-height:1.7;"><strong>เรียน ${v.CustomerName}</strong></p>
              <p style="margin:0 0 16px;font-size:17px;line-height:1.8;">สวัสดีค่ะ</p>

              <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">
                ดิฉัน <strong>${v.SalesName}</strong>
                จากบริษัท <strong>แรบบิท โปร อินดัสเทรียส์ จำกัด</strong>
                ขออนุญาตส่งใบเสนอราคาสำหรับการต่ออายุ License ผลิตภัณฑ์ <strong>PTCAD</strong>
                ของ <strong>${v.CompanyName}</strong> เพื่อประกอบการพิจารณาค่ะ
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
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">วันหมดอายุเดิม</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.ExpireDate}</strong></td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0;background:#eef6ff;border-left:4px solid #2d66d5;border-radius:12px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <div style="font-size:17px;font-weight:700;color:#17449f;margin-bottom:10px;">รายละเอียดใบเสนอราคา</div>
                    <div style="font-size:15px;line-height:1.9;color:#3f5674;">
                      เลขที่ใบเสนอราคา: <strong>${v.QuotationNo}</strong><br>
                      วันที่ใบเสนอราคา: <strong>${v.QuotationDate}</strong><br>
                      ใบเสนอราคามีผลถึงวันที่: <strong>${v.ValidUntil}</strong>
                    </div>
                  </td>
                </tr>
              </table>

              <div style="font-size:18px;color:#18345c;font-weight:700;margin:26px 0 14px;">เอกสารที่แนบมาพร้อมอีเมล</div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 22px;">
                ${attachmentRows}
              </table>

              <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">
                หากท่านประสงค์ยืนยันการต่ออายุ
                รบกวนลงนามในใบเสนอราคา พร้อมแนบหลักฐานการชำระเงิน
                และส่งกลับมาทางอีเมล เพื่อให้ทีมงานดำเนินการต่ออายุ License ในขั้นตอนถัดไปค่ะ
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0;background:#fbfdff;border:1px solid #e2edf8;border-radius:12px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <div style="font-size:17px;font-weight:700;color:#18345c;margin-bottom:9px;">เอกสารสำหรับยืนยันการต่ออายุ</div>
                    <ol style="margin:0;padding-left:22px;font-size:15px;line-height:1.9;color:#3f5674;">
                      <li>ใบเสนอราคาที่ลงนามยืนยันเรียบร้อยแล้ว</li>
                      <li>หลักฐานการชำระเงิน</li>
                      <li>หนังสือรับรองการหักภาษี ณ ที่จ่าย สำหรับนิติบุคคลที่หัก ณ ที่จ่าย 3%</li>
                    </ol>
                  </td>
                </tr>
              </table>

              ${lineButton}

              <p style="margin:24px 0 18px;font-size:17px;line-height:1.85;">
                หากมีข้อสงสัยเกี่ยวกับใบเสนอราคา เงื่อนไขการต่ออายุ
                หรือต้องการปรับรายละเอียดเพิ่มเติม
                สามารถตอบกลับอีเมลฉบับนี้ได้โดยตรง
                ดิฉันยินดีให้ข้อมูลและดูแลท่านค่ะ
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