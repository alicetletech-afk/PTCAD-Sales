window.PTCAD_TEMPLATES=window.PTCAD_TEMPLATES||[];
window.PTCAD_TEMPLATES.push({
id:"E09",
stage:"RENEWAL",
title:"แจ้งเตือนก่อนหมดอายุ 7 วัน",
shortTitle:"Renewal Reminder · 7 Days",
active:true,
subject:"PTCAD | License จะหมดอายุภายใน 7 วัน สำหรับ {{CompanyName}}",
attachment:"ใบเสนอราคาต่ออายุ (ถ้ามี)",
fields:[
{key:"CustomerName",label:"ชื่อลูกค้า",default:"คุณลูกค้า"},
{key:"CompanyName",label:"ชื่อบริษัท",default:"บริษัทของท่าน"},
{key:"ProductName",label:"ผลิตภัณฑ์",type:"select",default:"PTCAD Standard",options:[
{value:"PTCAD Lite",label:"PTCAD Lite"},
{value:"PTCAD Standard",label:"PTCAD Standard"},
{value:"PTCAD Plus",label:"PTCAD Plus"}]},
{key:"LicenseType",label:"ประเภท License",type:"select",default:"Subscription License",options:[
{value:"Subscription License",label:"Subscription License"},
{value:"Network License",label:"Network License"}]},
{key:"LicenseNo",label:"เลขที่ License",default:"XXXX-XXXX"},
{key:"ExpireDate",label:"วันหมดอายุ",default:"DD-MM-YYYY"},
{key:"RenewalUrl",label:"ลิงก์ขอใบเสนอราคา",default:""},
{key:"LineUrl",label:"LINE OA",default:""},
{key:"AttachQuotation",label:"แนบใบเสนอราคา",type:"checkbox",default:true},
{key:"SalesName",label:"ชื่อเซลล์",default:"เจ้าหน้าที่ฝ่ายขาย"}
],
render(v){
const btn=(u,t,c)=>u?`<a href="${u}" style="display:inline-block;margin:6px;padding:12px 20px;border-radius:10px;background:${c};color:#fff;text-decoration:none;font-weight:700">${t}</a>`:"";
return `<!doctype html><html><body style="font-family:Arial;background:#f4f8fc;padding:28px">
<div style="max-width:680px;margin:auto;background:#fff;border-radius:18px;padding:32px">
<div style="background:#FFF3F1;border:1px solid #F5B5A8;border-radius:16px;padding:24px;text-align:center">
<div style="display:inline-block;background:#F06A4A;color:#fff;padding:6px 12px;border-radius:999px;font-size:12px;font-weight:700">URGENT REMINDER</div>
<h2 style="margin:16px 0 8px;color:#A63A22">License จะหมดอายุภายใน 7 วัน</h2>
<p style="margin:0;color:#5d5d5d">แนะนำให้ดำเนินการต่ออายุโดยเร็วเพื่อหลีกเลี่ยงการใช้งานสะดุด</p>
</div>
<p><b>เรียน ${v.CustomerName||"คุณลูกค้า"}</b></p>
<p>License ของ <b>${v.CompanyName||""}</b> กำลังจะหมดอายุในวันที่ <b>${v.ExpireDate||"DD-MM-YYYY"}</b></p>
<table style="width:100%;border-collapse:collapse;background:#f8fbff">
<tr><td>ผลิตภัณฑ์</td><td align=right>${v.ProductName}</td></tr>
<tr><td>ประเภท License</td><td align=right>${v.LicenseType}</td></tr>
<tr><td>License No.</td><td align=right>${v.LicenseNo}</td></tr>
</table>
${v.AttachQuotation?'<p>📎 แนบใบเสนอราคาต่ออายุมาพร้อมอีเมลฉบับนี้</p>':''}
<div style="text-align:center">
${btn(v.RenewalUrl,"ขอใบเสนอราคาต่ออายุ","#2d66d5")}
${btn(v.LineUrl,"LINE Official Account","#19b55b")}
</div>
<p>หากต้องการความช่วยเหลือ กรุณาตอบกลับอีเมลนี้ได้โดยตรง<br>${v.SalesName||""}</p>
<p>ขอบคุณค่ะ</p>
</div></body></html>`;}
});