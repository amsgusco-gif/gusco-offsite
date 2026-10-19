// Service worker แบบเบาที่สุด : มีไว้ให้ Android ขึ้นปุ่ม "ติดตั้งแอป" เท่านั้น
// ไม่แคชหน้าแบบฟอร์ม เพื่อให้ได้ข้อมูลล่าสุดจาก Google ทุกครั้ง
const CACHE = 'gusco-ofs-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;              // ปล่อยให้ Google จัดการเอง
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
