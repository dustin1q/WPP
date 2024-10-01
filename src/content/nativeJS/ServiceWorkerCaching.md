---

title: Service Worker Caching
cat: nativeJS
image: image
desc: Use Service Workers to proactively control the caching of common assets. This will reduce latency as the user navigates through subsequent pages within the web experience.
---

<js-code>
  const cacheName = 'SWCache V1';
//suggested files to chach
const cacheAssets ['/main.js',
'/main.css'
];
 
// Call Install 
Eventself.addEventListener('install', e => {  
    e.waitUntil(
       caches.open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );});
// Call Activate Event
self.addEventListener('activate', e => {
  // Remove unwanted caches  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }        
        })
      );
    })
  );});
// Call Fetch Event
self.addEventListener('fetch', e => {
console.log('Service Worker: Fetching');
e.respondWith(fetch(e.request).catch(() =>
    caches.match(e.request)));
});


// Checks sw are supported, place in the <head> tag
/*
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/intel_sw_cached_files.js')
      .then(reg => console.log('Service Worker: Registered (files)'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });}
  */
</js-code>