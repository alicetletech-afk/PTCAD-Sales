window.PTCAD_TEMPLATES = window.PTCAD_TEMPLATES || [];

window.PTCAD_TEMPLATES.push({
  id: "E04",
  stage: "PRE-SALES",
  title: "ขอข้อมูลเพิ่มเติม",
  shortTitle: "Request Information",
  active: true,
  subject: "PTCAD | ขอข้อมูลเพิ่มเติมเพื่อดำเนินการสำหรับ {{CompanyName}}",
  attachment: "ไม่มี",

  fields: [
    { key: "CustomerName", label: "ชื่อลูกค้า", default: "คุณลูกค้า", full: false },
    { key: "CompanyName", label: "ชื่อบริษัทลูกค้า", default: "บริษัทของท่าน", full: false },
    { key: "SalesName", label: "ชื่อเซลล์", default: "เจ้าหน้าที่ฝ่ายขาย", full: true }
  ],

  render(values) {
    const v = {
      CustomerName: values.CustomerName || "คุณลูกค้า",
      CompanyName: values.CompanyName || "บริษัทของท่าน",
      SalesName: values.SalesName || "เจ้าหน้าที่ฝ่ายขาย"
    };

    return `<!DOCTYPE html>
<html lang="th">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f8fc;font-family:Arial,'Noto Sans Thai',sans-serif;color:#22324a;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f8fc;padding:28px 12px;">
<tr><td align="center">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#fff;border-radius:20px;overflow:hidden;">
<tr><td align="center" style="padding:28px;background:#eef6ff;">
<img src="https://pt-cad.com/wp-content/uploads/2025/06/cropped-PTCAD-Logo-Trademark-1-300x300.png" width="82">
<div style="color:#4773b5;margin-top:10px;">ใช้งานง่าย • คุ้มค่า • พร้อมช่วยเหลือ</div>
</td></tr>
<tr><td style="padding:34px;">
<p><strong>เรียน ${v.CustomerName}</strong></p>
<p>สวัสดีค่ะ</p>

<p>เพื่อให้ทีมงานสามารถดำเนินการจัดเตรียมเอกสารและดูแลการสั่งซื้อสำหรับ <strong>${v.CompanyName}</strong> ได้อย่างถูกต้อง รบกวนขอข้อมูลเพิ่มเติม ดังต่อไปนี้</p>

<div style="background:#f2f7ff;border:1px solid #dce9f7;border-radius:12px;padding:18px;">
<ul style="margin:0;padding-left:20px;line-height:2;">
<li>ชื่อบริษัท / หน่วยงาน</li>
<li>เลขประจำตัวผู้เสียภาษี</li>
<li>ที่อยู่สำหรับออกใบกำกับภาษี</li>
<li>ชื่อผู้ประสานงาน</li>
<li>เบอร์โทรศัพท์</li>
<li>อีเมลสำหรับจัดส่ง License</li>
<li>จำนวน License ที่ต้องการ</li>
</ul>
</div>

<p style="margin-top:20px;">หากมีข้อมูลครบถ้วนแล้ว สามารถตอบกลับอีเมลนี้ได้เลย ทีมงานจะดำเนินการในขั้นตอนถัดไปโดยเร็วที่สุดค่ะ</p>

<p>หากมีข้อสงสัยเพิ่มเติม สามารถติดต่อกลับได้ทุกเมื่อ ดิฉัน <strong>${v.SalesName}</strong> ยินดีให้บริการค่ะ</p>

<p>ขอบคุณค่ะ</p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
  }
});
