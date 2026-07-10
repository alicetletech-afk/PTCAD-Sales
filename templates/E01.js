window.PTCAD_TEMPLATES = window.PTCAD_TEMPLATES || {};

window.PTCAD_TEMPLATES.E01 = {
  id: "E01",
  journey: "Pre-Sales",
  title: "แนะนำผลิตภัณฑ์ PTCAD",
  shortTitle: "Product Introduction",
  subject: "PTCAD | ข้อมูลผลิตภัณฑ์และทดลองใช้ฟรี 30 วัน",
  previewText: "ข้อมูลผลิตภัณฑ์ PTCAD พร้อมรายละเอียดแพ็กเกจ ราคา และสิทธิ์ทดลองใช้ฟรี 30 วัน",
  status: "ready",
  attachments: ["Company Profile (PDF)"],
  fields: [
    { key: "customerName", label: "ชื่อลูกค้า", defaultValue: "คุณลูกค้า" },
    { key: "salesName", label: "ชื่อเซลล์", defaultValue: "ชื่อผู้ดูแล" },
    { key: "companyName", label: "บริษัทลูกค้า", defaultValue: "บริษัทของท่าน" },
    { key: "trialUrl", label: "ลิงก์ทดลองใช้ฟรี", defaultValue: "https://ptcadthailand.com/sales-ptcad-th/?ref=DirectSale" },
    { key: "websiteUrl", label: "ลิงก์ข้อมูลเพิ่มเติม", defaultValue: "https://www.ptcadthailand.com/" }
  ],
  buildEmail(values) {
    const customerName = values.customerName || "คุณลูกค้า";
    const salesName = values.salesName || "ชื่อผู้ดูแล";
    const companyName = values.companyName || "บริษัทของท่าน";
    const trialUrl = values.trialUrl || "https://ptcadthailand.com/sales-ptcad-th/?ref=DirectSale";
    const websiteUrl = values.websiteUrl || "https://www.ptcadthailand.com/";

    return `<!doctype html>
<html lang="th">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${this.subject}</title>
</head>
<body style="margin:0;padding:0;background:#eef4fb;font-family:Arial,'Segoe UI',Tahoma,sans-serif;color:#1d2a43;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${this.previewText}</div>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#eef4fb;padding:26px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:680px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 18px 50px rgba(28,70,138,.12);">
<tr>
<td style="padding:22px 28px;border-bottom:1px solid #e8eef8;background:linear-gradient(135deg,#f7fbff,#eef5ff);">
<img src="assets/images/ptcad-logo.png" width="72" alt="PTCAD" style="display:block;width:72px;height:auto;border:0;">
</td>
</tr>
<tr><td style="padding:30px 30px 8px;">
<p style="margin:0 0 12px;font-size:16px;line-height:1.7;"><strong>เรียน ${customerName}</strong></p>
<p style="margin:0 0 16px;font-size:15px;line-height:1.8;">สวัสดีค่ะ</p>
<p style="margin:0 0 16px;font-size:15px;line-height:1.8;">ดิฉัน <strong>${salesName}</strong> จากบริษัท <strong>แรบบิท โปร อินดัสเทรียส์ จำกัด</strong> ขออนุญาตนำเสนอผลิตภัณฑ์ <strong>PTCAD</strong> เพื่อประกอบการพิจารณาของ ${companyName} โดยหวังว่าจะเป็นอีกหนึ่งทางเลือกที่ตอบโจทย์งานเขียนแบบของท่านได้อย่างเหมาะสม</p>
<p style="margin:0 0 18px;font-size:15px;line-height:1.8;">PTCAD เป็นซอฟต์แวร์เขียนแบบ CAD 2D ที่รองรับไฟล์ <strong>.DWG</strong> และสามารถทำงานร่วมกับไฟล์จาก AutoCAD ได้อย่างมีประสิทธิภาพ เหมาะสำหรับงานด้านวิศวกรรม สถาปัตยกรรม งานก่อสร้าง และงานอุตสาหกรรม</p>
</td></tr>

<tr><td style="padding:10px 30px 22px;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f5f8fe;border:1px solid #e5ecf8;border-radius:16px;">
<tr><td style="padding:20px 22px;">
<p style="margin:0 0 14px;font-size:17px;font-weight:700;color:#17315f;">จุดเด่นของ PTCAD</p>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
<tr>
<td width="50%" valign="top" style="padding:6px 8px 6px 0;font-size:14px;line-height:1.65;"><span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:7px;background:#e4eeff;color:#1957d2;font-weight:700;">✓</span>&nbsp; License ถูกต้องตามลิขสิทธิ์</td>
<td width="50%" valign="top" style="padding:6px 0 6px 8px;font-size:14px;line-height:1.65;"><span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:7px;background:#e4eeff;color:#1957d2;font-weight:700;">✓</span>&nbsp; รองรับไฟล์ DWG ทุกเวอร์ชัน</td>
</tr>
<tr>
<td width="50%" valign="top" style="padding:6px 8px 6px 0;font-size:14px;line-height:1.65;"><span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:7px;background:#e4eeff;color:#1957d2;font-weight:700;">✓</span>&nbsp; รองรับ AutoLISP</td>
<td width="50%" valign="top" style="padding:6px 0 6px 8px;font-size:14px;line-height:1.65;"><span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:7px;background:#e4eeff;color:#1957d2;font-weight:700;">✓</span>&nbsp; Standalone และ Network License</td>
</tr>
<tr>
<td colspan="2" style="padding:6px 0;font-size:14px;line-height:1.65;"><span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:7px;background:#e4eeff;color:#1957d2;font-weight:700;">✓</span>&nbsp; Technical Support ภาษาไทยโดยทีมผู้เชี่ยวชาญ</td>
</tr>
</table>
</td></tr></table>
</td></tr>

<tr><td style="padding:0 30px 12px;">
<p style="margin:0 0 10px;font-size:19px;font-weight:750;color:#152b53;">PTCAD Product Line</p>
<p style="margin:0 0 18px;font-size:13px;line-height:1.65;color:#6c7c98;">เลือกได้ทั้งแบบรายปีและซื้อขาดตามลักษณะการใช้งาน โดยราคาด้านล่างยังไม่รวมภาษีมูลค่าเพิ่ม (VAT)</p>
</td></tr>

<tr><td style="padding:0 22px 8px;">
<table role="presentation" width="100%" cellspacing="8" cellpadding="0" border="0">
<tr>
<td width="33.33%" valign="top" style="padding:18px 14px;border:1px solid #e3eaf6;border-radius:16px;text-align:center;">
<p style="margin:0 0 8px;font-size:17px;font-weight:750;">PTCAD Lite</p>
<p style="margin:0 0 4px;font-size:22px;font-weight:800;color:#3865c5;">3,650 บาท</p>
<p style="margin:0 0 13px;font-size:12px;color:#70809c;">ต่อปี</p>
<p style="margin:0;font-size:13px;line-height:1.65;color:#4a5b78;">เหมาะสำหรับงานเขียนแบบ CAD 2D พื้นฐาน เน้นความคล่องตัวและคุ้มค่า</p>
</td>
<td width="33.33%" valign="top" style="padding:18px 14px;border:2px solid #3865c5;border-radius:16px;text-align:center;background:#f7faff;">
<p style="display:inline-block;margin:0 0 9px;padding:4px 9px;border-radius:999px;background:#3865c5;color:#fff;font-size:10px;font-weight:750;letter-spacing:.08em;">POPULAR</p>
<p style="margin:0 0 8px;font-size:17px;font-weight:750;">PTCAD Standard</p>
<p style="margin:0 0 2px;font-size:22px;font-weight:800;color:#3865c5;">6,990 บาท</p>
<p style="margin:0 0 6px;font-size:12px;color:#70809c;">ต่อปี</p>
<p style="margin:0 0 2px;font-size:18px;font-weight:750;color:#223b69;">14,500 บาท</p>
<p style="margin:0 0 12px;font-size:12px;color:#70809c;">ซื้อขาด</p>
<p style="margin:0;font-size:13px;line-height:1.65;color:#4a5b78;">เครื่องมือครบ รองรับ AutoLISP และเหมาะกับงานเขียนแบบทั่วไปถึงระดับมืออาชีพ</p>
</td>
<td width="33.33%" valign="top" style="padding:18px 14px;border:1px solid #e3eaf6;border-radius:16px;text-align:center;">
<p style="margin:0 0 8px;font-size:17px;font-weight:750;">PTCAD Plus</p>
<p style="margin:0 0 2px;font-size:22px;font-weight:800;color:#3865c5;">11,000 บาท</p>
<p style="margin:0 0 6px;font-size:12px;color:#70809c;">ต่อปี</p>
<p style="margin:0 0 2px;font-size:18px;font-weight:750;color:#223b69;">17,500 บาท</p>
<p style="margin:0 0 12px;font-size:12px;color:#70809c;">ซื้อขาด</p>
<p style="margin:0;font-size:13px;line-height:1.65;color:#4a5b78;">สำหรับงานเฉพาะทาง พร้อมโมดูลและฟังก์ชันเพิ่มเติมสำหรับงานที่ซับซ้อน</p>
</td>
</tr>
</table>
</td></tr>

<tr><td style="padding:20px 30px 6px;">
<p style="margin:0 0 16px;font-size:15px;line-height:1.8;">หากท่านต้องการทดลองใช้งานก่อนตัดสินใจ ทางบริษัทมีสิทธิ์ทดลองใช้ฟรีเป็นระยะเวลา <strong>30 วัน</strong> โดยไม่มีค่าใช้จ่าย</p>
<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
<tr>
<td style="padding:5px;"><a href="${trialUrl}" style="display:inline-block;padding:13px 22px;border-radius:11px;background:#1957d2;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;">ทดลองใช้ฟรี 30 วัน</a></td>
<td style="padding:5px;"><a href="${websiteUrl}" style="display:inline-block;padding:12px 22px;border:1px solid #cdd9ed;border-radius:11px;background:#ffffff;color:#1957d2;text-decoration:none;font-size:14px;font-weight:700;">ข้อมูลเพิ่มเติม</a></td>
</tr>
</table>
</td></tr>

<tr><td style="padding:22px 30px 30px;">
<p style="margin:0 0 15px;font-size:15px;line-height:1.8;">ทั้งนี้ ทางบริษัทได้แนบ <strong>Company Profile</strong> เพื่อประกอบการพิจารณา หากท่านต้องการข้อมูลเพิ่มเติม ขอรับใบเสนอราคา หรือต้องการคำแนะนำในการเลือกผลิตภัณฑ์ที่เหมาะสม ทีมงานของเรายินดีให้คำปรึกษาและดูแลอย่างเต็มที่</p>
<p style="margin:0 0 15px;font-size:15px;line-height:1.8;">ขอขอบคุณที่สละเวลาในการพิจารณาผลิตภัณฑ์ของเรา และหวังเป็นอย่างยิ่งว่าจะมีโอกาสได้ให้บริการท่านในโอกาสอันใกล้</p>
<p style="margin:0;font-size:15px;line-height:1.8;">ขอแสดงความนับถือ</p>
</td></tr>

<tr><td style="padding:16px 30px;background:#f6f9fe;border-top:1px solid #e8eef8;color:#7a8aa5;font-size:11px;line-height:1.65;">
PTCAD by Rabbit Pro Industries Co., Ltd.<br>อีเมลฉบับนี้ออกแบบให้ต่อท้ายด้วยลายเซ็นอัตโนมัติของผู้ส่งในระบบอีเมล
</td></tr>
</table>
</td></tr></table>
</body></html>`;
  }
};
