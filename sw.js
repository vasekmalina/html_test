// sw.js — Service Worker pro offline podporu
// Verzi změn při každé aktualizaci aplikace!
const CACHE = 'slovicka-v1';

// Soubory, které chceme cachovat ihned po instalaci
const PRECACHE = [
  './',
  './index.html',
  'https://unpkg.com/dexie@3.2.4/dist/dexie.js',
  'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap'
];

// INSTALL: stáhne soubory do cache
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
  );
});

// ACTIVATE: smaže staré cache verze
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// FETCH: cache-first strategie
self.addEventListener('fetch', event => {
  // Ignoruj non-GET requesty (např. API volání)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // Cachuj jen platné odpovědi
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, clone));
        return response;
      });
    }).catch(() => {
      // Offline fallback — vrátí index.html pro navigace
      if (event.request.destination === 'document') {
        return caches.match('/index.html');
      }
    })
  );
});
