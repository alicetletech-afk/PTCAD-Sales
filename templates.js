const TEMPLATE_CATALOG = [
  { id: 'intro', code: 'E01', title: 'แนะนำผลิตภัณฑ์', subtitle: 'Company Profile + Trial', ready: true },
  { id: 'quotation', code: 'E02', title: 'ส่งใบเสนอราคา', subtitle: 'Quotation', ready: false },
  { id: 'followup', code: 'E03', title: 'ติดตามใบเสนอราคา', subtitle: 'Follow-up', ready: false },
  { id: 'request-info', code: 'E04', title: 'ขอข้อมูลเพิ่มเติม', subtitle: 'Request Information', ready: false },
  { id: 'order', code: 'E05', title: 'ยืนยันคำสั่งซื้อ', subtitle: 'Order Confirmation', ready: false },
  { id: 'payment', code: 'E06', title: 'ยืนยันการชำระเงิน', subtitle: 'Payment Confirmation', ready: false },
  { id: 'license', code: 'E07', title: 'ส่ง License', subtitle: 'License Delivery', ready: false },
  { id: 'renew30', code: 'E08', title: 'แจ้งเตือน 30 วัน', subtitle: 'Renewal Reminder', ready: false },
  { id: 'renew7', code: 'E09', title: 'แจ้งเตือน 7 วัน', subtitle: 'Renewal Reminder', ready: false },
  { id: 'expired', code: 'E10', title: 'License หมดอายุ', subtitle: 'Expired Notice', ready: false },
  { id: 'renew-quote', code: 'E11', title: 'ใบเสนอราคาต่ออายุ', subtitle: 'Renewal Quotation', ready: false }
];

const DEFAULT_DATA = {
  subject: 'PTCAD | ข้อมูลผลิตภัณฑ์และทดลองใช้ฟรี 30 วัน',
  customerName: 'คุณลูกค้า',
  salesName: 'ชื่อเซลล์',
  companyName: '',
  trialLink: 'https://ptcadthailand.com/sales-ptcad-th/?ref=DirectSale',
  infoLink: 'https://www.ptcadthailand.com/'
};

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function buildEmailHtml(data, logoSource = 'assets/images/ptcad-logo.png') {
  const customer = escapeHtml(data.customerName || 'คุณลูกค้า');
  const sales = escapeHtml(data.salesName || 'ชื่อเซลล์');
  const companyLine = data.companyName
    ? `<span style="color:#62728a;">สำหรับ ${escapeHtml(data.companyName)}</span>`
    : '';
  const trialLink = escapeHtml(data.trialLink || '#');
  const infoLink = escapeHtml(data.infoLink || '#');

  return `<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(data.subject)}</title>
</head>
<body style="margin:0;padding:0;background:#f2f7fd;font-family:Arial,'Noto Sans Thai',sans-serif;color:#26364f;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f2f7fd;padding:24px 10px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:680px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 12px 40px rgba(38,83,143,.12);">
        <tr>
          <td style="height:7px;background:linear-gradient(90deg,#0f5fe8,#58a8ff);"></td>
        </tr>
        <tr>
          <td align="center" style="padding:26px 34px 18px;">
            <img src="${logoSource}" width="84" alt="PTCAD" style="display:block;width:84px;height:auto;border:0;">
            <div style="margin-top:9px;font-size:11px;letter-spacing:1.8px;color:#6f86a6;font-weight:700;">PROFESSIONAL CAD SOLUTION</div>
          </td>
        </tr>
        <tr><td style="padding:0 34px;"><div style="height:1px;background:#e6eef8;"></div></td></tr>
        <tr>
          <td style="padding:28px 34px 10px;font-size:15px;line-height:1.85;">
            <p style="margin:0 0 16px;">เรียน <strong>${customer}</strong></p>
            <p style="margin:0 0 16px;">ดิฉัน <strong>${sales}</strong> จากบริษัท <strong>แรบบิท โปร อินดัสเทรียส์ จำกัด</strong> ขออนุญาตแนะนำผลิตภัณฑ์ <strong style="color:#135fd6;">PTCAD</strong> เพื่อประกอบการพิจารณา ${companyLine}</p>
            <p style="margin:0 0 16px;">PTCAD เป็นซอฟต์แวร์เขียนแบบ CAD 2D ที่รองรับไฟล์ <strong>.DWG</strong> และสามารถทำงานร่วมกับไฟล์จาก AutoCAD ได้อย่างมีประสิทธิภาพ เหมาะสำหรับงานเขียนแบบด้านวิศวกรรม สถาปัตยกรรม และงานอุตสาหกรรม</p>
          </td>
        </tr>

        <tr>
          <td style="padding:8px 34px 20px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f7faff;border:1px solid #e5eef9;border-radius:16px;">
              <tr><td style="padding:19px 20px 8px;font-size:16px;font-weight:700;color:#123d7c;">จุดเด่นของ PTCAD</td></tr>
              <tr><td style="padding:2px 20px 20px;font-size:14px;line-height:2;color:#40516a;">
                <div>✓ License ถูกต้องตามลิขสิทธิ์</div>
                <div>✓ รองรับไฟล์ DWG ทุกเวอร์ชัน</div>
                <div>✓ รองรับ AutoLISP</div>
                <div>✓ มีทั้ง Standalone License และ Network License</div>
                <div>✓ Technical Support ภาษาไทย โดยทีมผู้เชี่ยวชาญ</div>
              </td></tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:4px 34px 16px;font-size:15px;line-height:1.85;">
            <p style="margin:0;">ปัจจุบัน PTCAD ได้รับความไว้วางใจจากลูกค้าในหลากหลายอุตสาหกรรม ทั้งโรงงานอุตสาหกรรม บริษัทรับเหมาก่อสร้าง และสำนักงานออกแบบ</p>
          </td>
        </tr>

        <tr>
          <td style="padding:14px 34px 10px;">
            <div style="font-size:19px;font-weight:700;color:#123d7c;text-align:center;margin-bottom:15px;">PTCAD Product Line</div>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td width="32%" valign="top" style="padding:0 5px 0 0;">
                  <div style="border:1px solid #dbe8f8;border-radius:14px;padding:16px 13px;min-height:128px;background:#fbfdff;">
                    <div style="font-size:15px;font-weight:700;color:#1769ff;margin-bottom:8px;">PTCAD LT</div>
                    <div style="font-size:12px;line-height:1.65;color:#60718a;">สำหรับงานเขียนแบบ CAD 2D ทั่วไป ใช้งานง่ายและคุ้มค่า</div>
                  </div>
                </td>
                <td width="36%" valign="top" style="padding:0 5px;">
                  <div style="border:1px solid #c8ddfb;border-radius:14px;padding:16px 13px;min-height:128px;background:#eef6ff;">
                    <div style="font-size:15px;font-weight:700;color:#0f57c8;margin-bottom:8px;">PTCAD Pro</div>
                    <div style="font-size:12px;line-height:1.65;color:#506581;">สำหรับผู้ใช้งานที่ต้องการฟังก์ชันขั้นสูง รวมถึง AutoLISP</div>
                  </div>
                </td>
                <td width="32%" valign="top" style="padding:0 0 0 5px;">
                  <div style="border:1px solid #dbe8f8;border-radius:14px;padding:16px 13px;min-height:128px;background:#fbfdff;">
                    <div style="font-size:15px;font-weight:700;color:#1769ff;margin-bottom:8px;">Network</div>
                    <div style="font-size:12px;line-height:1.65;color:#60718a;">สำหรับองค์กรที่ต้องการบริหาร License ร่วมกันภายในเครือข่าย</div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td align="center" style="padding:24px 34px 12px;">
            <div style="font-size:15px;line-height:1.7;color:#40516a;margin-bottom:17px;">เริ่มทดลองใช้งาน PTCAD ฟรี 30 วัน หรือดูข้อมูลผลิตภัณฑ์เพิ่มเติมได้จากปุ่มด้านล่าง</div>
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
              <tr>
                <td style="padding:5px;">
                  <a href="${trialLink}" target="_blank" style="display:inline-block;padding:13px 20px;border-radius:11px;background:#1769ff;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;">ทดลองใช้ฟรี 30 วัน</a>
                </td>
                <td style="padding:5px;">
                  <a href="${infoLink}" target="_blank" style="display:inline-block;padding:12px 19px;border-radius:11px;background:#ffffff;color:#1769ff;text-decoration:none;font-size:13px;font-weight:700;border:1px solid #b9d3f6;">ข้อมูลเพิ่มเติม</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:20px 34px 30px;font-size:15px;line-height:1.85;">
            <p style="margin:0 0 16px;">ทั้งนี้ ทางบริษัทขอแนบ <strong>Company Profile</strong> เพื่อประกอบการพิจารณา หากท่านต้องการข้อมูลเพิ่มเติม ขอรับใบเสนอราคา หรือต้องการทดลองใช้งานโปรแกรม ทีมงานยินดีให้คำแนะนำและดูแลอย่างเต็มที่</p>
            <p style="margin:0 0 16px;">ขอขอบคุณที่สละเวลาในการพิจารณาผลิตภัณฑ์ของเรา และหวังเป็นอย่างยิ่งว่าจะมีโอกาสได้ให้บริการท่านในโอกาสอันใกล้</p>
            <p style="margin:0;">ขอแสดงความนับถือ</p>
          </td>
        </tr>
        <tr>
          <td style="padding:15px 34px;background:#f5f9fe;border-top:1px solid #e5eef8;text-align:center;font-size:11px;line-height:1.6;color:#8695aa;">
            PTCAD · Professional CAD Solution<br>ข้อมูลลายเซ็นของผู้ส่งจะถูกเพิ่มโดย Outlook หรือ Gmail
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
