window.PTCAD_TEMPLATES = window.PTCAD_TEMPLATES || [];

window.PTCAD_TEMPLATES.push({
  id: "E02",
  stage: "PRE-SALES",
  title: "ส่งใบเสนอราคา",
  shortTitle: "Quotation",
  active: true,
  subject: "PTCAD | ใบเสนอราคาสำหรับ {{CompanyName}}",
  attachment: "ใบเสนอราคา และรายละเอียดบัญชีธนาคาร",

  fields: [
    { key: "CustomerName", label: "ชื่อลูกค้า", default: "คุณลูกค้า", full: false },
    { key: "CompanyName", label: "ชื่อบริษัทลูกค้า", default: "บริษัทของท่าน", full: false },
    { key: "QuotationNo", label: "เลขที่ใบเสนอราคา", default: "PAP-QXXXXX", full: false },
    { key: "QuotationDate", label: "วันที่ใบเสนอราคา", type: "date", default: "", full: false },
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
  <title>PTCAD Quotation</title>
</head>
<body style="margin:0;padding:0;background:#f4f8fc;font-family:Arial,'Noto Sans Thai',sans-serif;color:#22324a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f8fc;padding:28px 12px;">
    <tr>
      <td align="center">
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
                ตามที่ได้พูดคุยกัน ดิฉัน <strong>${v.SalesName}</strong>
                จากบริษัท <strong>แรบบิท โปร อินดัสเทรียส์ จำกัด</strong>
                ขออนุญาตส่งใบเสนอราคาผลิตภัณฑ์ <strong>PTCAD</strong>
                สำหรับ <strong>${v.CompanyName}</strong> เพื่อประกอบการพิจารณาค่ะ
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:22px 0;background:#f2f7ff;border:1px solid #dce9f7;border-radius:14px;">
                <tr>
                  <td style="padding:15px 18px;color:#6c7f98;font-size:15px;">เลขที่ใบเสนอราคา</td>
                  <td align="right" style="padding:15px 18px;font-size:16px;color:#17449f;"><strong>${v.QuotationNo}</strong></td>
                </tr>
                <tr>
                  <td style="padding:15px 18px;border-top:1px solid #dce9f7;color:#6c7f98;font-size:15px;">วันที่ใบเสนอราคา</td>
                  <td align="right" style="padding:15px 18px;border-top:1px solid #dce9f7;font-size:16px;"><strong>${v.QuotationDate}</strong></td>
                </tr>
              </table>

              <p style="margin:0 0 12px;font-size:17px;line-height:1.8;">
                ทางบริษัทได้แนบเอกสารประกอบการพิจารณามาพร้อมอีเมลฉบับนี้ ดังนี้
              </p>

              <ul style="margin:0 0 20px;padding-left:22px;font-size:16px;line-height:1.9;">
                <li>ใบเสนอราคาผลิตภัณฑ์ PTCAD</li>
                <li>รายละเอียดบัญชีธนาคารสำหรับการชำระเงิน</li>
              </ul>

              <p style="margin:0 0 20px;font-size:17px;line-height:1.85;">
                หากท่านประสงค์ยืนยันการสั่งซื้อ รบกวนลงนามในใบเสนอราคา
                พร้อมแนบหลักฐานการชำระเงิน และส่งกลับมาทางอีเมล
                เพื่อให้ทีมงานดำเนินการในขั้นตอนถัดไปค่ะ
              </p>

              <div style="margin:24px 0 12px;font-size:18px;color:#18345c;font-weight:700;">
                เอกสารสำหรับยืนยันการสั่งซื้อ
              </div>

              <ol style="margin:0 0 22px;padding-left:24px;font-size:16px;line-height:1.9;">
                <li>ใบเสนอราคาที่ลงนามยืนยันการสั่งซื้อ</li>
                <li>หลักฐานการชำระเงิน</li>
                <li>หนังสือรับรองการหักภาษี ณ ที่จ่าย สำหรับนิติบุคคลที่หัก ณ ที่จ่าย 3%</li>
              </ol>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:22px 0;background:#eef6ff;border-left:4px solid #2d66d5;border-radius:12px;">
                <tr>
                  <td style="padding:18px 20px;">
                    <div style="font-size:17px;font-weight:700;color:#17449f;margin-bottom:8px;">
                      ข้อมูลสำหรับออกหนังสือรับรองหักภาษี ณ ที่จ่าย
                    </div>
                    <div style="font-size:15px;line-height:1.75;color:#30445f;">
                      <strong>บริษัท แรบบิท โปร อินดัสเทรียส์ จำกัด</strong><br>
                      เลขที่ 103 หมู่ที่ 13 ตำบลบางพลีใหญ่<br>
                      อำเภอบางพลี จังหวัดสมุทรปราการ 10540<br>
                      เลขประจำตัวผู้เสียภาษี 0105554023729
                    </div>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#4f627b;">
                <strong>หมายเหตุ:</strong> หากต้องการให้ออกใบกำกับภาษีในนามบริษัท
                รบกวนแจ้งชื่อบริษัท ที่อยู่ และเลขประจำตัวผู้เสียภาษีให้ทีมงานทราบล่วงหน้าค่ะ
              </p>

              <p style="margin:0 0 18px;font-size:17px;line-height:1.85;">
                หากมีข้อสงสัยเกี่ยวกับใบเสนอราคา ขั้นตอนการชำระเงิน
                หรือต้องการปรับรายละเอียดเพิ่มเติม สามารถตอบกลับอีเมลนี้ได้โดยตรง
                ดิฉันยินดีให้ข้อมูลและดูแลท่านค่ะ
              </p>

              <p style="margin:0 0 10px;font-size:17px;line-height:1.8;">ขอบคุณค่ะ</p>
              <p style="margin:0;font-size:17px;line-height:1.8;">ขอแสดงความนับถือ</p>
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
