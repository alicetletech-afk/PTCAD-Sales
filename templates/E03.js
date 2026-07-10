window.PTCAD_TEMPLATES = window.PTCAD_TEMPLATES || [];

window.PTCAD_TEMPLATES.push({
  id:"E03",
  stage:"PRE-SALES",
  title:"ติดตามใบเสนอราคา",
  shortTitle:"Follow-up Quotation",
  active:true,
  subject:"PTCAD | ติดตามการพิจารณาใบเสนอราคาสำหรับ {{CompanyName}}",
  attachment:"ใบเสนอราคาเดิม (แนบซ้ำเมื่อจำเป็น)",
  fields:[
    {key:"CustomerName",label:"ชื่อลูกค้า",default:"คุณลูกค้า",full:false},
    {key:"CompanyName",label:"ชื่อบริษัทลูกค้า",default:"บริษัทของท่าน",full:false},
    {key:"QuotationNo",label:"เลขที่ใบเสนอราคา",default:"PAP-QXXXXX",full:false},
    {key:"QuotationDate",label:"วันที่ส่งใบเสนอราคา",default:"วันที่ เดือน ปี",full:false},
    {key:"SalesName",label:"ชื่อเซลล์",default:"เจ้าหน้าที่ฝ่ายขาย",full:true}
  ],
  render(values){
    const v={
      CustomerName:values.CustomerName||"คุณลูกค้า",
      CompanyName:values.CompanyName||"บริษัทของท่าน",
      QuotationNo:values.QuotationNo||"PAP-QXXXXX",
      QuotationDate:values.QuotationDate||"วันที่ เดือน ปี",
      SalesName:values.SalesName||"เจ้าหน้าที่ฝ่ายขาย"
    };
    return `<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f8fc;font-family:Arial,'Noto Sans Thai',sans-serif;color:#22324a;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f8fc;padding:28px 12px;"><tr><td align="center">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#fff;border-radius:20px;">
<tr><td style="padding:34px">
<p><strong>เรียน \${v.CustomerName}</strong></p>
<p>สวัสดีค่ะ</p>
<p>ตามที่ดิฉัน <strong>\${v.SalesName}</strong> จากบริษัท <strong>แรบบิท โปร อินดัสเทรียส์ จำกัด</strong> ได้ส่งใบเสนอราคาผลิตภัณฑ์ <strong>PTCAD</strong> สำหรับ <strong>\${v.CompanyName}</strong> เมื่อวันที่ <strong>\${v.QuotationDate}</strong> นั้น ดิฉันขออนุญาตติดตามความคืบหน้าในการพิจารณาค่ะ</p>
<p>ไม่ทราบว่าทางบริษัทได้รับเอกสารเรียบร้อยแล้วหรือไม่ และมีประเด็นใดที่ต้องการข้อมูลเพิ่มเติม หรือต้องการให้ทีมงานช่วยแนะนำเพิ่มเติมไหมคะ</p>
<ul>
<li>เปรียบเทียบรุ่นและรูปแบบ License ที่เหมาะกับการใช้งาน</li>
<li>ปรับรายละเอียดหรือจำนวน License ในใบเสนอราคา</li>
<li>นัดหมายสาธิตการใช้งาน หรือทดลองใช้งานฟรี 30 วัน</li>
</ul>
<p>หากขณะนี้ทางบริษัทยังอยู่ระหว่างการพิจารณา สามารถแจ้งช่วงเวลาที่สะดวกให้ดิฉันติดตามอีกครั้งได้ค่ะ หรือหากต้องการให้ส่งใบเสนอราคาฉบับเดิมอีกครั้ง สามารถตอบกลับอีเมลนี้ได้โดยตรง</p>
<p>ดิฉันยินดีให้ข้อมูลเพิ่มเติมและดูแลท่านค่ะ</p>
<p>ขอบคุณค่ะ</p>
</td></tr></table></td></tr></table></body></html>`;
  }
});
