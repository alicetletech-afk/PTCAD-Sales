window.PTCAD_TEMPLATES = window.PTCAD_TEMPLATES || [];
window.PTCAD_TEMPLATES.push({
  id: "E01",
  stage: "PRE-SALES",
  title: "แนะนำผลิตภัณฑ์ PTCAD",
  shortTitle: "Product Introduction",
  active: true,
  subject: "PTCAD | ข้อมูลผลิตภัณฑ์และทดลองใช้ฟรี 30 วัน",
  attachment: "Company Profile (PDF)",
  fields: [
    { key: "customerName", label: "ชื่อลูกค้า", default: "คุณลูกค้า" },
    { key: "salesName", label: "ชื่อเซลล์", default: "ชื่อผู้ดูแล" },
    { key: "trialUrl", label: "ลิงก์ทดลองใช้ฟรี", default: "https://ptcadthailand.com/sales-ptcad-th/?ref=DirectSale", full: true },
    { key: "websiteUrl", label: "ลิงก์ข้อมูลเพิ่มเติม", default: "https://www.ptcadthailand.com/", full: true }
  ],
  render(values) {
    const customer = values.customerName || "คุณลูกค้า";
    const sales = values.salesName || "ชื่อผู้ดูแล";
    const trial = values.trialUrl || "https://ptcadthailand.com/sales-ptcad-th/?ref=DirectSale";
    const website = values.websiteUrl || "https://www.ptcadthailand.com/";
    return `<!doctype html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>PTCAD Email</title>
</head>
<body style="margin:0;padding:0;background:#eef5fb;font-family:'DB Heavent','Noto Sans Thai',Arial,sans-serif;color:#20324a;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">ข้อมูลผลิตภัณฑ์ PTCAD พร้อมสิทธิ์ทดลองใช้ฟรี 30 วัน</div>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#eef5fb;padding:26px 10px;">
<tr><td align="center">
<table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:640px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 18px 50px rgba(50,83,126,.12);">
<tr><td style="padding:34px 32px 26px;text-align:center;background:linear-gradient(135deg,#f7fbff,#e7f2ff);border-bottom:1px solid #dfebf7;">
<img src="https://pt-cad.com/wp-content/uploads/2025/06/cropped-PTCAD-Logo-Trademark-1-300x300.png" width="82" alt="PTCAD" style="display:block;margin:0 auto 12px;width:82px;height:auto;">
<div style="font-size:18px;font-weight:700;color:#295db7;letter-spacing:.2px;">ใช้งานง่าย · คุ้มค่า · พร้อมช่วยเหลือ</div>
</td></tr>
<tr><td style="padding:34px 36px 10px;font-size:18px;line-height:1.68;">
<p style="margin:0 0 10px;font-weight:700;color:#14243c;">เรียน ${customer}</p>
<p style="margin:0 0 16px;">สวัสดีค่ะ</p>
<p style="margin:0 0 16px;">ดิฉัน <strong>${sales}</strong> จากบริษัท <strong>แรบบิท โปร อินดัสเทรียส์ จำกัด</strong> ขออนุญาตนำเสนอผลิตภัณฑ์ <strong>PTCAD</strong> เพื่อประกอบการพิจารณา โดยหวังว่าจะเป็นอีกหนึ่งทางเลือกที่ช่วยให้งานเขียนแบบของท่านมีความคล่องตัวและคุ้มค่ามากยิ่งขึ้น</p>
<p style="margin:0 0 16px;"><strong>PTCAD</strong> เป็นซอฟต์แวร์เขียนแบบ CAD ที่รองรับไฟล์ <strong>.DWG</strong> และสามารถทำงานร่วมกับไฟล์จาก AutoCAD ได้อย่างมีประสิทธิภาพ เหมาะสำหรับงานด้านวิศวกรรม สถาปัตยกรรม งานก่อสร้าง และงานอุตสาหกรรม</p>
</td></tr>
<tr><td style="padding:6px 36px 4px;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f8fd;border:1px solid #e3edf8;border-radius:18px;">
<tr><td style="padding:22px 22px 8px;font-size:20px;font-weight:700;color:#17396f;">จุดเด่นของ PTCAD</td></tr>
<tr><td style="padding:0 22px 22px;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size:16px;line-height:1.55;color:#3f5169;">
<tr><td width="50%" valign="top" style="padding:7px 12px 7px 0;">✓ License ถูกต้องตามลิขสิทธิ์</td><td width="50%" valign="top" style="padding:7px 0;">✓ รองรับไฟล์ DWG และ DXF</td></tr>
<tr><td valign="top" style="padding:7px 12px 7px 0;">✓ รองรับ AutoLISP ตามรุ่นที่เลือก</td><td valign="top" style="padding:7px 0;">✓ มีทั้ง Standalone และ Network License</td></tr>
<tr><td colspan="2" valign="top" style="padding:7px 0;">✓ Technical Support ภาษาไทย โดยทีมผู้เชี่ยวชาญ</td></tr>
</table>
</td></tr></table>
</td></tr>
<tr><td style="padding:30px 24px 8px;">
<div style="font-size:24px;font-weight:700;text-align:center;color:#172941;margin-bottom:6px;">PTCAD Product Line</div>
<div style="font-size:14px;text-align:center;color:#8292a8;margin-bottom:18px;">ราคายังไม่รวมภาษีมูลค่าเพิ่ม (VAT)</div>
<table role="presentation" width="100%" cellspacing="8" cellpadding="0" border="0">
<tr>
<td width="33.33%" valign="top" style="padding:0 4px;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e1eaf5;border-radius:18px;"><tr><td style="padding:20px 14px;text-align:center;"><div style="font-family:Poppins,Arial,sans-serif;font-size:17px;font-weight:700;color:#172941;">PTCAD Lite</div><div style="font-family:Poppins,Arial,sans-serif;font-size:25px;font-weight:700;color:#3564c6;margin:10px 0 2px;">3,650</div><div style="font-size:13px;color:#7b8ba1;">บาท / ปี</div><div style="height:1px;background:#e9eef5;margin:14px 0;"></div><div style="font-size:14px;line-height:1.45;color:#52647c;">งานเขียนแบบ 2D<br>รวดเร็ว ใช้งานง่าย</div><div style="font-size:13px;color:#9aa8b9;margin-top:14px;">ซื้อขาด: —</div></td></tr></table></td>
<td width="33.33%" valign="top" style="padding:0 4px;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:2px solid #3d6bd0;border-radius:18px;background:#f8fbff;"><tr><td style="padding:18px 14px;text-align:center;"><div style="display:inline-block;font-family:Poppins,Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:.08em;color:#ffffff;background:#3d6bd0;border-radius:20px;padding:5px 10px;margin-bottom:8px;">POPULAR</div><div style="font-family:Poppins,Arial,sans-serif;font-size:17px;font-weight:700;color:#172941;">PTCAD Standard</div><div style="font-family:Poppins,Arial,sans-serif;font-size:25px;font-weight:700;color:#3564c6;margin:10px 0 2px;">6,990</div><div style="font-size:13px;color:#7b8ba1;">บาท / ปี</div><div style="height:1px;background:#e9eef5;margin:14px 0;"></div><div style="font-size:14px;line-height:1.45;color:#52647c;">เครื่องมือเขียนแบบครบ<br>รองรับ AutoLISP</div><div style="font-size:13px;color:#52647c;margin-top:14px;">ซื้อขาด <strong>14,500 บาท</strong></div></td></tr></table></td>
<td width="33.33%" valign="top" style="padding:0 4px;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e1eaf5;border-radius:18px;"><tr><td style="padding:20px 14px;text-align:center;"><div style="font-family:Poppins,Arial,sans-serif;font-size:17px;font-weight:700;color:#172941;">PTCAD Plus</div><div style="font-family:Poppins,Arial,sans-serif;font-size:25px;font-weight:700;color:#3564c6;margin:10px 0 2px;">11,000</div><div style="font-size:13px;color:#7b8ba1;">บาท / ปี</div><div style="height:1px;background:#e9eef5;margin:14px 0;"></div><div style="font-size:14px;line-height:1.45;color:#52647c;">โมดูลเฉพาะทาง<br>สำหรับงานระดับสูง</div><div style="font-size:13px;color:#52647c;margin-top:14px;">ซื้อขาด <strong>17,500 บาท</strong></div></td></tr></table></td>
</tr></table>
</td></tr>
<tr><td style="padding:28px 36px 8px;font-size:18px;line-height:1.65;">
<p style="margin:0 0 18px;">หากท่านต้องการทดลองใช้งานก่อนตัดสินใจ ทางบริษัทมีสิทธิ์ <strong>ทดลองใช้ฟรี 30 วัน</strong> โดยไม่มีค่าใช้จ่าย</p>
<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center"><tr>
<td style="padding:5px;"><a href="${trial}" style="display:inline-block;background:linear-gradient(135deg,#2454b7,#5895f6);color:#ffffff;text-decoration:none;font-weight:700;padding:13px 22px;border-radius:12px;">ทดลองใช้ฟรี 30 วัน</a></td>
<td style="padding:5px;"><a href="${website}" style="display:inline-block;background:#ffffff;color:#2855ad;text-decoration:none;font-weight:700;padding:12px 22px;border:1px solid #cbdaf0;border-radius:12px;">ข้อมูลเพิ่มเติม</a></td>
</tr></table>
</td></tr>
<tr><td style="padding:24px 36px 36px;font-size:18px;line-height:1.65;">
<p style="margin:0 0 16px;">ทางบริษัทได้แนบ <strong>Company Profile</strong> เพื่อประกอบการพิจารณา หากท่านต้องการข้อมูลเพิ่มเติม ขอรับใบเสนอราคา หรือต้องการคำแนะนำในการเลือกผลิตภัณฑ์ที่เหมาะสม ทีมงานยินดีให้คำปรึกษาและดูแลอย่างเต็มที่ค่ะ</p>
<p style="margin:0 0 16px;">ขอขอบคุณที่สละเวลาในการพิจารณาผลิตภัณฑ์ของเรา และหวังเป็นอย่างยิ่งว่าจะมีโอกาสได้ให้บริการท่านในโอกาสอันใกล้</p>
<p style="margin:0;">ขอแสดงความนับถือ</p>
</td></tr>
<tr><td style="padding:18px 30px;text-align:center;background:#f4f8fd;color:#8292a8;font-size:13px;">PTCAD — ใช้งานง่าย · คุ้มค่า · พร้อมช่วยเหลือ</td></tr>
</table>
</td></tr></table>
</body></html>`;
  }
});
