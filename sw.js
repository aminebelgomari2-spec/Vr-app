const CACHE_NAME = 'vr-app-v2';

// Installation - pas de pré-cache
self.addEventListener('install', event => {
  self.skipWaiting();
  console.log('Service Worker installé');
});

// Activation
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
  console.log('Service Worker activé');
});

// Fetch - stratégie simple
self.addEventListener('fetch', event => {
  // Ignorer les CDN externes
  if (event.request.url.includes('cdnjs.cloudflare.com') || 
      event.request.url.includes('cdn.jsdelivr.net')) {
    return;
  }

  // Pour les fichiers locaux, essayer le cache puis le réseau
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cloner la réponse avant de la mettre en cache
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Si le réseau échoue, chercher dans le cache
        return caches.match(event.request)
          .then(response => response || new Response('Offline'));
      })
  );
});
