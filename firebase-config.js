/* ===================== ตั้งค่า Firebase =====================
   1) สร้างโปรเจกต์ที่ https://console.firebase.google.com  → เพิ่ม Web app (</>)
   2) คัดลอกค่า firebaseConfig มาวางแทนที่ null ด้านล่าง
   3) เปิด Authentication → Google  และสร้าง Firestore Database
   4) นำเนื้อหาไฟล์ firestore.rules ไปวางที่ Firestore → Rules → Publish
   (ดูขั้นตอนละเอียดใน README.md)

   ตราบใดที่ firebaseConfig ยังเป็น null ระบบจะทำงานใน "โหมดทดลอง" (เก็บข้อมูลในเครื่องเท่านั้น)
   หมายเหตุ: ค่า apiKey ของ Firebase ไม่ใช่ความลับ ความปลอดภัยอยู่ที่ Security Rules */
export const firebaseConfig = {
  apiKey: "AIzaSyCMkgAwLL-FeA3vEIu_8o6bRElhVlrEj8Q",
  authDomain: "virach-timesheet-e1eeb.firebaseapp.com",
  projectId: "virach-timesheet-e1eeb",
  storageBucket: "virach-timesheet-e1eeb.firebasestorage.app",
  messagingSenderId: "322800576181",
  appId: "1:322800576181:web:2a8bc5310965a0895ac0fc"
};

/* อีเมลเจ้าของระบบ (แอดมินคนแรก) — ต้องตรงกับที่ระบุใน firestore.rules ด้วย */
export const ADMIN_EMAILS = ['virach.va05@gmail.com'];

/* จำกัดให้ล็อกอินได้เฉพาะโดเมนอีเมลบริษัท เช่น 'virach.co.th'  (เว้นว่าง '' = อนุญาตทุกบัญชี Google)
   ⚠ เป็นการตรวจฝั่งหน้าเว็บ ถ้าต้องการบังคับจริงให้เปิดบรรทัด domain ใน firestore.rules ด้วย */
export const ALLOWED_EMAIL_DOMAIN = '';
