window.PTCAD_TEMPLATES=window.PTCAD_TEMPLATES||[];
window.PTCAD_TEMPLATES.push({
id:"E03",
stage:"PRE-SALES",
title:"ติดตามใบเสนอราคา",
shortTitle:"Follow-up Quotation",
active:true,
subject:"PTCAD | ติดตามการพิจารณาใบเสนอราคาสำหรับ {{CompanyName}}",
attachment:"ใบเสนอราคาเดิม (แนบซ้ำเมื่อจำเป็น)",
fields:[
{key:"CustomerName",label:"ชื่อลูกค้า",default:"คุณลูกค้า"},
{key:"CompanyName",label:"ชื่อบริษัทลูกค้า",default:"บริษัทของท่าน"},
{key:"QuotationNo",label:"เลขที่ใบเสนอราคา",default:"PAP-QXXXXX"},
{key:"QuotationDate",label:"วันที่ส่งใบเสนอราคา",default:"วันที่ เดือน ปี"},
{key:"SalesName",label:"ชื่อเซลล์",default:"เจ้าหน้าที่ฝ่ายขาย",full:true}
],
render(values){
const v={CustomerName:values.CustomerName||"คุณลูกค้า",CompanyName:values.CompanyName||"บริษัทของท่าน",QuotationNo:values.QuotationNo||"PAP-QXXXXX",QuotationDate:values.QuotationDate||"วันที่ เดือน ปี",SalesName:values.SalesName||"เจ้าหน้าที่ฝ่ายขาย"};
return `<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#f4f8fc;font-family:Arial,'Noto Sans Thai',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:28px 12px;background:#f4f8fc"><tr><td align="center">
<table width="680" cellpadding="0" cellspacing="0" style="max-width:680px;background:#fff;border-radius:20px">
<tr><td style="padding:28px;text-align:center;background:#eef6ff">
<img src="https://pt-cad.com/wp-content/uploads/2025/06/cropped-PTCAD-Logo-Trademark-1-300x300.png" width="82">
<div style="color:#4773b5;margin-top:10px">ใช้งานง่าย • คุ้มค่า • พร้อมช่วยเหลือ</div>
</td></tr>
<tr><td style="padding:34px;color:#22324a;font-size:17px;line-height:1.8">
<p><strong>เรียน ${v.CustomerName}</strong></p>
<p>สวัสดีค่ะ</p>
<p>ตามที่ดิฉัน <strong>${v.SalesName}</strong> จากบริษัท <strong>แรบบิท โปร อินดัสเทรียส์ จำกัด</strong> ได้ส่งใบเสนอราคาผลิตภัณฑ์ <strong>PTCAD</strong> สำหรับ <strong>${v.CompanyName}</strong> เมื่อวันที่ <strong>${v.QuotationDate}</strong> นั้น ดิฉันขออนุญาตติดตามความคืบหน้าในการพิจารณาค่ะ</p>
<p><strong>เลขที่ใบเสนอราคา:</strong> ${v.QuotationNo}</p>
<p>ไม่ทราบว่าทางบริษัทได้รับเอกสารเรียบร้อยแล้วหรือไม่ และมีข้อมูลส่วนใดที่ต้องการเพิ่มเติม หรือต้องการให้ทีมงานช่วยแนะนำเพิ่มเติมไหมคะ</p>
<ul>
<li>เปรียบเทียบรุ่นและ License</li>
<li>ปรับรายละเอียดใบเสนอราคา</li>
<li>นัดสาธิตหรือทดลองใช้ฟรี 30 วัน</li>
</ul>
<p>หากยังอยู่ระหว่างการพิจารณา สามารถแจ้งช่วงเวลาที่สะดวกให้ดิฉันติดตามอีกครั้งได้ หรือหากต้องการให้ส่งใบเสนอราคาฉบับเดิมอีกครั้ง สามารถตอบกลับอีเมลนี้ได้โดยตรงค่ะ</p>
<p>ทีมงานยินดีให้ข้อมูลเพิ่มเติมและดูแลท่านค่ะ</p>
<p>ขอบคุณค่ะ</p>
</td></tr></table></td></tr></table></body></html>`;
}
});