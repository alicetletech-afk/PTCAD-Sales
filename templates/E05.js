window.PTCAD_TEMPLATES = window.PTCAD_TEMPLATES || [];

window.PTCAD_TEMPLATES.push({
  id: "E05",
  stage: "ORDER",
  title: "ยืนยันการรับคำสั่งซื้อ",
  shortTitle: "Order Confirmation",
  active: true,
  subject: "PTCAD | ยืนยันการรับคำสั่งซื้อสำหรับ {{CompanyName}}",
  attachment: "Purchase Order / ใบเสนอราคาที่ลงนาม (ถ้ามี)",

  fields: [
    { key: "CustomerName", label: "ชื่อลูกค้า", default: "คุณลูกค้า", full: false },
    { key: "CompanyName", label: "ชื่อบริษัทลูกค้า", default: "บริษัทของท่าน", full: false },
    { key: "QuotationNo", label: "เลขที่ใบเสนอราคา", default: "PAP-QXXXXX", full: false },
    { key: "OrderNo", label: "เลขที่คำสั่งซื้อ / PO", default: "-", full: false },

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

    {
      key: "OrderStatus",
      label: "สถานะคำสั่งซื้อ",
      type: "select",
      default: "received",
      full: false,
      options: [
        { value: "received", label: "รับคำสั่งซื้อแล้ว" },
        { value: "reviewing", label: "กำลังตรวจสอบข้อมูล" },
        { value: "awaiting_payment", label: "รอการชำระเงิน" },
        { value: "paid", label: "ได้รับชำระเงินแล้ว" },
        { value: "issuing", label: "กำลังออก License" },
        { value: "delivered", label: "จัดส่ง License แล้ว" }
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
      OrderNo: values.OrderNo || "-",
      ProductName: values.ProductName || "PTCAD Standard",
      LicenseType: values.LicenseType || "Subscription License",
      Quantity: values.Quantity || "1 License",
      OrderStatus: values.OrderStatus || "received",
      SalesName: values.SalesName || "เจ้าหน้าที่ฝ่ายขาย",
      LineUrl: values.LineUrl || ""
    };

    const statusConfig = {
      received: {
        label: "รับคำสั่งซื้อแล้ว",
        message: "ทีมงานได้รับคำสั่งซื้อและเอกสารเบื้องต้นเรียบร้อยแล้ว",
        currentStep: 1
      },
      reviewing: {
        label: "กำลังตรวจสอบข้อมูล",
        message: "ทีมงานกำลังตรวจสอบข้อมูลและเอกสารประกอบคำสั่งซื้อ",
        currentStep: 2
      },
      awaiting_payment: {
        label: "รอการชำระเงิน",
        message: "คำสั่งซื้อได้รับการยืนยันแล้ว และอยู่ระหว่างรอการชำระเงิน",
        currentStep: 3
      },
      paid: {
        label: "ได้รับชำระเงินแล้ว",
        message: "ทีมงานได้รับชำระเงินเรียบร้อยแล้ว และจะดำเนินการออก License ต่อไป",
        currentStep: 4
      },
      issuing: {
        label: "กำลังออก License",
        message: "ทีมงานกำลังจัดเตรียมและออก License สำหรับคำสั่งซื้อของท่าน",
        currentStep: 5
      },
      delivered: {
        label: "จัดส่ง License แล้ว",
        message: "ทีมงานได้จัดส่ง License ไปยังอีเมลที่แจ้งไว้เรียบร้อยแล้ว",
        currentStep: 6
      }
    };

    const selected = statusConfig[v.OrderStatus] || statusConfig.received;

    const steps = [
      "รับคำสั่งซื้อ",
      "ตรวจสอบข้อมูล",
      "รอชำระเงิน",
      "ยืนยันการชำระเงิน",
      "ออก License",
      "จัดส่ง License"
    ];

    const timeline = steps.map((step, index) => {
      const stepNumber = index + 1;
      const completed = stepNumber < selected.currentStep;
      const current = stepNumber === selected.currentStep;
      const circleBg = completed ? "#2d66d5" : current ? "#ffffff" : "#edf3fa";
      const circleBorder = completed || current ? "#2d66d5" : "#cbd9e9";
      const circleColor = completed ? "#ffffff" : current ? "#2d66d5" : "#8da0b8";
      const lineColor = completed ? "#2d66d5" : "#d9e4f1";
      const marker = completed ? "✓" : stepNumber;

      return `
        <tr>
          <td width="38" valign="top" align="center" style="padding:0;">
            <div style="width:26px;height:26px;border:2px solid ${circleBorder};background:${circleBg};color:${circleColor};border-radius:50%;font-size:12px;font-weight:700;line-height:22px;text-align:center;">
              ${marker}
            </div>
            ${stepNumber < steps.length ? `<div style="width:2px;height:28px;background:${lineColor};margin:3px auto;"></div>` : ""}
          </td>
          <td valign="top" style="padding:2px 0 19px 10px;font-size:15px;line-height:1.5;color:${current ? "#17449f" : "#425873"};font-weight:${current ? "700" : "500"};">
            ${step}
            ${current ? `<div style="margin-top:3px;font-size:13px;font-weight:400;color:#6f819a;">สถานะปัจจุบัน</div>` : ""}
          </td>
        </tr>
      `;
    }).join("");

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
  <title>PTCAD Order Confirmation</title>
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
                ขอขอบคุณที่เลือกใช้ผลิตภัณฑ์ <strong>PTCAD</strong> ค่ะ
                ทางบริษัทได้รับคำสั่งซื้อสำหรับ <strong>${v.CompanyName}</strong> เรียบร้อยแล้ว
                และขอยืนยันรายละเอียดคำสั่งซื้อ ดังต่อไปนี้
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0;background:#f8fbff;border:1px solid #dce9f7;border-radius:14px;">
                <tr>
                  <td style="padding:13px 18px;color:#6c7f98;font-size:14px;">เลขที่ใบเสนอราคา</td>
                  <td align="right" style="padding:13px 18px;font-size:15px;color:#17449f;"><strong>${v.QuotationNo}</strong></td>
                </tr>
                <tr>
                  <td style="padding:13px 18px;border-top:1px solid #e2edf8;color:#6c7f98;font-size:14px;">เลขที่คำสั่งซื้อ / PO</td>
                  <td align="right" style="padding:13px 18px;border-top:1px solid #e2edf8;font-size:15px;"><strong>${v.OrderNo}</strong></td>
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
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0;background:#eef6ff;border-left:4px solid #2d66d5;border-radius:12px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <div style="font-size:13px;color:#6c7f98;margin-bottom:5px;">สถานะคำสั่งซื้อ</div>
                    <div style="font-size:19px;font-weight:700;color:#17449f;margin-bottom:7px;">${selected.label}</div>
                    <div style="font-size:15px;line-height:1.7;color:#3f5674;">${selected.message}</div>
                  </td>
                </tr>
              </table>

              <div style="font-size:18px;color:#18345c;font-weight:700;margin:26px 0 16px;">ความคืบหน้าคำสั่งซื้อ</div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px;">
                ${timeline}
              </table>

              <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">
                ทีมงานจะดำเนินการตามลำดับและแจ้งความคืบหน้าให้ทราบอีกครั้ง
                หากต้องการแก้ไขข้อมูลในคำสั่งซื้อ หรือต้องการสอบถามสถานะเพิ่มเติม
                สามารถตอบกลับอีเมลฉบับนี้ได้โดยตรงค่ะ
              </p>

              ${lineButton}

              <p style="margin:22px 0 18px;font-size:17px;line-height:1.85;">
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