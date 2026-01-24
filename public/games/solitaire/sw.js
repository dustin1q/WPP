const CACHE_NAME = 'solitaire-v2';
const ASSETS = [
    './',
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
                return Promise.all(
                    ASSETS.map(url => {
                        return cache.add(url).catch(err => {
                            console.error(`Service Worker: Failed to cache ${url}:`, err);
                            // We throw if it's a critical asset, or just log if not.
                            // For now, let's keep throwing so addAll-like behavior is preserved but with logs.
                            throw err;
                        });
                    })
                );
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

// Fetch Event - Stale-While-Revalidate Strategy
self.addEventListener('fetch', (event) => {
    // Only handle http/https schemes to avoid error with chrome-extension
    if (!(event.request.url.startsWith('http'))) {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.match(event.request).then((cachedResponse) => {
                const fetchedResponse = fetch(event.request).then((networkResponse) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                }).catch(() => {
                    // Fail silently if network fails; we still have the cache
                });

                return cachedResponse || fetchedResponse;
            });
        })
    );
});
