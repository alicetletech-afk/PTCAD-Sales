// PTCAD E08 v2
// Premium Renewal Reminder Template
// Replace your existing templates/E08.js with the finalized version.
window.PTCAD_TEMPLATES = window.PTCAD_TEMPLATES || [];
window.PTCAD_TEMPLATES.push({
  id:"E08",
  stage:"RENEWAL",
  title:"แจ้งเตือนต่ออายุล่วงหน้า 30 วัน",
  shortTitle:"Renewal Reminder · 30 Days",
  active:true,
  subject:"PTCAD | แจ้งเตือนการต่ออายุ License สำหรับ {{CompanyName}}",
  attachment:"ใบเสนอราคาต่ออายุ (ถ้ามี)",
  fields:[],
  render(){return `<div style="padding:32px;font-family:Arial">
  <div style="background:#FFF8EA;border:1px solid #F2D58A;border-radius:18px;padding:28px;text-align:center">
  <div style="display:inline-block;background:#FFE8A3;color:#8A5A00;padding:6px 12px;border-radius:999px;font-weight:700;font-size:12px">RENEWAL REMINDER</div>
  <h2 style="margin:16px 0 8px;color:#6D4A00">แจ้งเตือนการต่ออายุ License</h2>
  <p style="font-size:20px;font-weight:700;margin:0">เหลืออีกประมาณ 30 วัน</p>
  <p style="color:#555;max-width:480px;margin:18px auto 0">เพื่อให้สามารถใช้งานได้อย่างต่อเนื่อง แนะนำให้ดำเนินการต่ออายุล่วงหน้า</p>
  </div></div>`;}
});
