window.PTCAD_TEMPLATES = window.PTCAD_TEMPLATES || [];

window.PTCAD_TEMPLATES.push({
  id: "E06",
  stage: "ORDER",
  title: "ยืนยันการได้รับชำระเงิน",
  shortTitle: "Payment Confirmation",
  active: true,
  subject: "PTCAD | ยืนยันการได้รับชำระเงินสำหรับ {{CompanyName}}",
  attachment: "ใบเสร็จรับเงิน / ใบกำกับภาษี (ถ้ามี)",

  fields: [
    { key: "CustomerName", label: "ชื่อลูกค้า", default: "คุณลูกค้า", full: false },
    { key: "CompanyName", label: "ชื่อบริษัทลูกค้า", default: "บริษัทของท่าน", full: false },
    { key: "QuotationNo", label: "เลขที่ใบเสนอราคา", default: "PAP-QXXXXX", full: false },
    { key: "PaymentDate", label: "วันที่ได้รับชำระเงิน", default: "วันที่ เดือน ปี", full: false },

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
        { value: "Perpetual License (ซื้อขาด)", label: "Perpetual License (ซื้อขาด)" },
        { value: "Network License", label: "Network License" }
      ]
    },

    { key: "Quantity", label: "จำนวน License", default: "1 License", full: false },
    { key: "Amount", label: "ยอดชำระ", default: "-", full: false },

    {
      key: "PaymentMethod",
      label: "ช่องทางการชำระเงิน",
      type: "select",
      default: "โอนเงินผ่านธนาคาร",
      full: false,
      options: [
        { value: "โอนเงินผ่านธนาคาร", label: "โอนเงินผ่านธนาคาร" },
        { value: "บัตรเครดิต", label: "บัตรเครดิต" },
        { value: "อื่น ๆ", label: "อื่น ๆ" }
      ]
    },

    {
      key: "TaxDocumentStatus",
      label: "สถานะเอกสารภาษี",
      type: "select",
      default: "กำลังดำเนินการจัดเตรียม",
      full: false,
      options: [
        { value: "กำลังดำเนินการจัดเตรียม", label: "กำลังดำเนินการจัดเตรียม" },
        { value: "แนบมาพร้อมอีเมลฉบับนี้", label: "แนบมาพร้อมอีเมลฉบับนี้" },
        { value: "จะจัดส่งให้ภายหลัง", label: "จะจัดส่งให้ภายหลัง" },
        { value: "ไม่ต้องการเอกสารภาษี", label: "ไม่ต้องการเอกสารภาษี" }
      ]
    },

    { key: "SalesName", label: "ชื่อเซลล์", default: "เจ้าหน้าที่ฝ่ายขาย", full: true },
    { key: "LineUrl", label: "ลิงก์ LINE Official Account", default: "", full: true }
  ],

  render(values) {
    const v = {
      CustomerName: values.CustomerName || "คุณลูกค้า",
      CompanyName: values.CompanyName || "บริษัทของท่าน",
      QuotationNo: values.QuotationNo || "PAP-QXXXXX",
      PaymentDate: values.PaymentDate || "วันที่ เดือน ปี",
      ProductName: values.ProductName || "PTCAD Standard",
      LicenseType: values.LicenseType || "Subscription License",
      Quantity: values.Quantity || "1 License",
      Amount: values.Amount || "-",
      PaymentMethod: values.PaymentMethod || "โอนเงินผ่านธนาคาร",
      TaxDocumentStatus: values.TaxDocumentStatus || "กำลังดำเนินการจัดเตรียม",
      SalesName: values.SalesName || "เจ้าหน้าที่ฝ่ายขาย",
      LineUrl: values.LineUrl || ""
    };

    const lineButton = v.LineUrl
      ? `<div style="text-align:center;margin:26px 0 4px;">
          <a href="${v.LineUrl}" style="display:inline-block;padding:13px 22px;background:#19b55b;color:#ffffff;text-decoration:none;border-radius:10px;font-weight:700;">
            ติดต่อผ่าน LINE Official Account
          </a>
        </div>`
      : "";

    return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>PTCAD Payment Confirmation</title>
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
                ทางบริษัทได้รับชำระเงินสำหรับคำสั่งซื้อผลิตภัณฑ์ <strong>PTCAD</strong>
                ของ <strong>${v.CompanyName}</strong> เรียบร้อยแล้วค่ะ
                ขอขอบคุณสำหรับการชำระเงินและความไว้วางใจที่มีให้กับ PTCAD
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0;background:#f8fbff;border:1px solid #dce9f7;border-radius:14px;">
                <tr>
                  <td style="padding:13px 18px;color:#6c7f98;font-size:14px;">เลขที่ใบเสนอราคา</td>
                  <td align="right" style="padding:13px 18px;font-size:15px;color:#17449f;"><strong>${v.QuotationNo}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">วันที่ได้รับชำระเงิน</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.PaymentDate}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">ผลิตภัณฑ์</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.ProductName}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">ประเภท License</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.LicenseType}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">จำนวน</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.Quantity}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">ยอดชำระ</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.Amount}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">ช่องทางการชำระเงิน</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.PaymentMethod}</strong></td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0;background:#eef6ff;border-left:4px solid #2d66d5;border-radius:12px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <div style="font-size:13px;color:#6c7f98;margin-bottom:5px;">สถานะเอกสารภาษี</div>
                    <div style="font-size:18px;font-weight:700;color:#17449f;">${v.TaxDocumentStatus}</div>
                  </td>
                </tr>
              </table>

              <div style="font-size:18px;color:#18345c;font-weight:700;margin:26px 0 12px;">ขั้นตอนถัดไป</div>

              <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">
                ทีมงานจะดำเนินการจัดเตรียม License และข้อมูลการใช้งาน
                จากนั้นจะจัดส่งไปยังอีเมลที่แจ้งไว้โดยเร็วที่สุดค่ะ
              </p>

              ${lineButton}

              <p style="margin:22px 0 18px;font-size:17px;line-height:1.85;">
                หากมีข้อสงสัยเกี่ยวกับสถานะคำสั่งซื้อ เอกสารภาษี หรือการจัดส่ง License
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