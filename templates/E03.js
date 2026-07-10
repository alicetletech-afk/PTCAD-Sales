window.PTCAD_TEMPLATES = window.PTCAD_TEMPLATES || [];

window.PTCAD_TEMPLATES.push({
  id: "E03",
  stage: "PRE-SALES",
  title: "ติดตามใบเสนอราคา",
  shortTitle: "Follow-up Quotation",
  active: true,
  subject: "PTCAD | ติดตามการพิจารณาใบเสนอราคาสำหรับ {{CompanyName}}",
  attachment: "ใบเสนอราคาเดิม (แนบซ้ำเมื่อจำเป็น)",

  fields: [
    { key: "CustomerName", label: "ชื่อลูกค้า", default: "คุณลูกค้า", full: false },
    { key: "CompanyName", label: "ชื่อบริษัทลูกค้า", default: "บริษัทของท่าน", full: false },
    { key: "QuotationNo", label: "เลขที่ใบเสนอราคา", default: "PAP-QXXXXX", full: false },
    { key: "QuotationDate", label: "วันที่ส่งใบเสนอราคา", default: "วันที่ เดือน ปี", full: false },
    { key: "SalesName", label: "ชื่อเซลล์", default: "เจ้าหน้าที่ฝ่ายขาย", full: true }
  ],

  render(values) {
    const v = {
      CustomerName: values.CustomerName || "คุณลูกค้า",
      CompanyName: values.CompanyName || "บริษัทของท่าน",
      QuotationNo: values.QuotationNo || "PAP-QXXXXX",
      QuotationDate: values.QuotationDate || "วันที่ เดือน ปี",
      SalesName: values.SalesName || "เจ้าหน้าที่ฝ่ายขาย"
    };

    return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PTCAD Follow-up Quotation</title>
</head>
<body style="margin:0;padding:0;background:#f4f8fc;font-family:Arial,'Noto Sans Thai',sans-serif;color:#22324a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f8fc;padding:28px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:680px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 16px 45px rgba(36,72,121,.12);">
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
              ตามที่ดิฉัน <strong>${v.SalesName}</strong>
              จากบริษัท <strong>แรบบิท โปร อินดัสเทรียส์ จำกัด</strong>
              ได้ส่งใบเสนอราคาผลิตภัณฑ์ <strong>PTCAD</strong>
              สำหรับ <strong>${v.CompanyName}</strong>
              เมื่อวันที่ <strong>${v.QuotationDate}</strong> นั้น
              ดิฉันขออนุญาตติดตามความคืบหน้าในการพิจารณาค่ะ
            </p>

            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:22px 0;background:#f2f7ff;border:1px solid #dce9f7;border-radius:14px;">
              <tr>
                <td style="padding:15px 18px;color:#6c7f98;font-size:15px;">เลขที่ใบเสนอราคา</td>
                <td align="right" style="padding:15px 18px;font-size:16px;color:#17449f;"><strong>${v.QuotationNo}</strong></td>
              </tr>
              <tr>
                <td style="padding:15px 18px;border-top:1px solid #dce9f7;color:#6c7f98;font-size:15px;">วันที่ส่งใบเสนอราคา</td>
                <td align="right" style="padding:15px 18px;border-top:1px solid #dce9f7;font-size:16px;"><strong>${v.QuotationDate}</strong></td>
              </tr>
            </table>

            <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">
              ไม่ทราบว่าทางบริษัทได้รับเอกสารเรียบร้อยแล้วหรือไม่
              และมีประเด็นใดที่ต้องการข้อมูลเพิ่มเติม
              หรือต้องการให้ทีมงานช่วยแนะนำเพิ่มเติมไหมคะ
            </p>

            <div style="margin:24px 0 12px;font-size:18px;color:#18345c;font-weight:700;">ทีมงานยินดีให้ข้อมูลเพิ่มเติม</div>

            <ul style="margin:0 0 22px;padding-left:22px;font-size:16px;line-height:1.9;">
              <li>เปรียบเทียบรุ่นและรูปแบบ License ที่เหมาะกับการใช้งาน</li>
              <li>ปรับรายละเอียดหรือจำนวน License ในใบเสนอราคา</li>
              <li>นัดหมายสาธิตการใช้งาน หรือทดลองใช้งานฟรี 30 วัน</li>
            </ul>

            <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">
              หากขณะนี้ทางบริษัทยังอยู่ระหว่างการพิจารณา
              สามารถแจ้งช่วงเวลาที่สะดวกให้ดิฉันติดตามอีกครั้งได้ค่ะ
              หรือหากต้องการให้ส่งใบเสนอราคาฉบับเดิมอีกครั้ง
              สามารถตอบกลับอีเมลนี้ได้โดยตรง
            </p>

            <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">ดิฉันยินดีให้ข้อมูลเพิ่มเติมและดูแลท่านค่ะ</p>
            <p style="margin:0 0 10px;font-size:17px;line-height:1.8;">ขอบคุณค่ะ</p>
            <p style="margin:0;font-size:17px;line-height:1.8;">ขอแสดงความนับถือ</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
  }
});
