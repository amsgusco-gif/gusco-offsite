# ปฏิบัติงานนอกสถานที่ GUSCO — ตัวเปิดแอป (PWA)

หน้าเว็บเล็ก ๆ สำหรับติดตั้งลงหน้าจอหลักของมือถือ / iPad เป็นไอคอนรูปรถ
กดแล้วเข้าแบบฟอร์ม Google Apps Script ได้ทันที

## ไฟล์ในโฟลเดอร์
| ไฟล์ | หน้าที่ |
|---|---|
| index.html | หน้าเปิดแอป (แก้ URL ของ Apps Script ได้ที่บรรทัด `APP_URL`) |
| manifest.webmanifest | ชื่อแอป สี และไอคอน |
| sw.js | service worker ขนาดเล็ก ทำให้ Android ขึ้นปุ่ม "ติดตั้งแอป" |
| icon-192.png / icon-512.png / icon-512-maskable.png / apple-touch-icon.png / favicon.png | ไอคอนรูปรถ |

## วิธีขึ้น GitHub Pages
1. สร้าง repository ใหม่ ตั้งชื่อเช่น `gusco-offsite` เลือก **Public**
2. กด **Add file → Upload files** แล้วลากไฟล์ทั้งหมดในโฟลเดอร์นี้เข้าไป (ไม่ต้องสร้างโฟลเดอร์ย่อย) กด Commit
3. ไปที่ **Settings → Pages** ตั้ง Source = `Deploy from a branch`, Branch = `main` / `root` กด Save
4. รอประมาณ 1 นาที จะได้ลิงก์ `https://<ชื่อผู้ใช้>.github.io/gusco-offsite/`

## วิธีติดตั้งลงหน้าจอหลัก
- **iPhone / iPad (Safari)** : เปิดลิงก์ → ปุ่มแชร์ (สี่เหลี่ยมมีลูกศรขึ้น) → เพิ่มไปยังหน้าจอโฮม
- **Android (Chrome)** : เปิดลิงก์ → เมนู ⋮ → ติดตั้งแอป / เพิ่มลงในหน้าจอหลัก

## ถ้า Deploy Apps Script ใหม่แล้วลิงก์เปลี่ยน
แก้บรรทัด `var APP_URL = "...";` ในไฟล์ index.html บน GitHub แล้ว Commit ไอคอนบนเครื่องทุกคนจะชี้ไปลิงก์ใหม่เอง

## หมายเหตุ
- แบบฟอร์มต้อง Deploy แบบ **Anyone within GUSCO** หรือ **Anyone** จึงจะเปิดบนมือถือได้ (ถ้าตั้งเป็น Only myself คนอื่นจะเปิดไม่ได้)
- ตอนสั่งพิมพ์ PDF แนะนำให้ใช้ปุ่ม "เปิดในแท็บใหม่" เพื่อให้เมนูพิมพ์ของเบราว์เซอร์ทำงานเต็มที่
