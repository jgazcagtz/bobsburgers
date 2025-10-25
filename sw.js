// Service Worker for Bob's Burgers PWA
const CACHE_NAME = 'bobs-burgers-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://i.imgur.com/s611vPH.png',
  'https://i.imgur.com/N095izT.png',
  'https://i.imgur.com/XnkEsrD.png',
  'https://i.imgur.com/Yk0EoBt.png',
  'https://i.imgur.com/RXBsCOJ.png',
  'https://i.imgur.com/eQTxSa7.png',
  'https://i.imgur.com/K0uY0kP.png',
  'https://i.imgur.com/VtqyDm4.png',
  'https://i.imgur.com/vZtOCPT.png',
  'https://i.imgur.com/n0enM1V.png',
  'https://i.imgur.com/yKHFurF.png',
  'https://i.imgur.com/e6U889D.png',
  'https://i.imgur.com/hX6zjaR.png',
  'https://i.imgur.com/S56Uzr7.png',
  'https://i.imgur.com/UbDjMTB.png',
  'https://i.imgur.com/cIEfsjX.png',
  'https://i.imgur.com/GutmmRC.png',
  'https://i.imgur.com/E5SAUIa.png',
  'https://i.imgur.com/tKjH4x3.png',
  'https://i.imgur.com/pbuZz1v.png',
  'https://i.imgur.com/K82zTrk.png',
  'https://i.imgur.com/V1wU8sX.png',
  'https://i.imgur.com/1ivK2h7.png',
  'https://i.imgur.com/tqSCval.png',
  'https://i.imgur.com/Kcg01sH.png',
  'https://i.imgur.com/QRv5x6w.png',
  'https://i.imgur.com/CNgDmeF.png'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Service Worker: Cache failed', err);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin) && 
      !event.request.url.includes('imgur.com') &&
      !event.request.url.includes('googleapis.com') &&
      !event.request.url.includes('gstatic.com') &&
      !event.request.url.includes('cloudflare.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          console.log('Service Worker: Serving from cache', event.request.url);
          return response;
        }
        
        console.log('Service Worker: Fetching from network', event.request.url);
        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            // Cache the response
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Background sync for offline orders
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

// Push notifications
self.addEventListener('push', event => {
  console.log('Service Worker: Push received');
  
  const options = {
    body: event.data ? event.data.text() : '¡Nuevas ofertas en Bob\'s Burgers!',
    icon: 'https://i.imgur.com/s611vPH.png',
    badge: 'https://i.imgur.com/s611vPH.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver Menú',
        icon: 'https://i.imgur.com/s611vPH.png'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: 'https://i.imgur.com/s611vPH.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Bob\'s Burgers', options)
  );
});

// Notification click
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification clicked');
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Background sync function
function doBackgroundSync() {
  return new Promise((resolve) => {
    // Check for pending orders in IndexedDB
    // Send them to server when online
    console.log('Service Worker: Syncing offline data');
    resolve();
  });
}

// Message handling
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Periodic background sync (if supported)
if ('periodicSync' in self.registration) {
  self.addEventListener('periodicsync', event => {
    if (event.tag === 'content-sync') {
      event.waitUntil(doBackgroundSync());
    }
  });
}
