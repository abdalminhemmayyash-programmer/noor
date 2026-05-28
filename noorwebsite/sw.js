const CACHE_NAME = 'noor-cache-v1';
const assets = ['/', '/index.html'];

// التثبيت
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
    );
});

// تفعيل الإشعارات المحلية
self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});

// استراتيجية جلب الملفات
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});// =================================================================
// امتداد السيرفس وركر: التقاط إشعارات الأذان والاستيقاظ فائق الأولوية
// =================================================================

self.addEventListener('push', function(event) {
  let payload = event.data ? event.data.json() : { title: 'حي على الصلاة', body: 'حان الآن موعد الأذان حسب توقيتك المحلي.' };

  const options = {
    body: payload.body,
    icon: 'icon.png',
    badge: 'badge.png',
    vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 500],
    data: { dateOfArrival: Date.now() },
    actions: [
      { action: 'open', title: 'فتح تطبيق نُور', icon: 'check.png' },
      { action: 'mute', title: 'كتم الأذان', icon: 'mute.png' }
    ],
    tag: 'adhan-notification',
    renotify: true,
    requireInteraction: true // إبقاء التنبيه شاخصاً على شاشة قفل المستخدم حتى يتفاعل معه لمنع تفويت الصلاة
  };

  event.waitUntil(
    self.registration.showNotification(payload.title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});