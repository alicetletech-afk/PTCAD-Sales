# PTCAD Email Hub v1.1 — Stable Improve

เวอร์ชันนี้สร้างจากไฟล์ล่าสุดที่ใช้งานจริง และคง Interface เดิมไว้

## สิ่งที่ปรับ
- ช่องวันที่ใน E02, E03, E06–E11 ใช้ Date Picker ของ Browser
- วันที่ใน Email Preview แสดงเป็น DD-MM-YYYY
- ลดขนาด Hero Banner ของ E08–E11 ให้กระชับขึ้น
- ไม่เปลี่ยน Sidebar, Layout, Glass UI, ปุ่ม หรือ Customer Journey
- รวม E01–E11 ครบ
- รวม Logo และโฟลเดอร์ Uploads ครบ

## วิธี Deploy ทดสอบ
1. สร้าง Repository ใหม่
2. อัปโหลดไฟล์และโฟลเดอร์ทั้งหมดจาก ZIP
3. เปิด Settings > Pages
4. เลือก Deploy from a branch และเลือก main / root
5. รอ Build สำเร็จ แล้ว Hard Refresh

## ไฟล์หลัก
- index.html
- app.js
- style.css
- templates/E01.js ถึง E11.js
- assets/images/ptcad-logo.png


## Package terminology update
- Subscription — เช่าใช้รายปี
- Perpetual — ซื้อขาด
- Removed Network License from package dropdowns


## Product × Package Matrix
- PTCAD Lite: Subscription — เช่าใช้รายปี เท่านั้น
- PTCAD Standard: Subscription — เช่าใช้รายปี / Perpetual — ซื้อขาด
- PTCAD Plus: Subscription — เช่าใช้รายปี / Perpetual — ซื้อขาด
- เมื่อเปลี่ยนจาก Standard/Plus เป็น Lite ระบบจะปรับ Package กลับเป็น Subscription อัตโนมัติ
