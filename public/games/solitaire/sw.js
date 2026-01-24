const CACHE_NAME = 'solitaire-v2';
const ASSETS = [
    './index.html',
    './styles.css',
    './script.js',
    './manifest.json',
    './solitaire_app_icon.png'
];

// Install Event - Cache Assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Caching Assets');
                return cache.addAll(ASSETS);
            })
    );
    self.skipWaiting();
});

// Activate Event - Clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

// Fetch Event - Network-First Strategy
self.addEventListener('fetch', (event) => {
    // Only handle http/https schemes to avoid error with chrome-extension
    if (!(event.request.url.startsWith('http'))) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                // If successful, update the cache and return the response
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            })
            .catch(() => {
                // If network fails (offline), fall back to the cache
                return caches.match(event.request);
            })
    );
});
