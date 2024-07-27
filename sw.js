// /* ===========================================================
//  * docsify sw.js
//  * ===========================================================
//  * Copyright 2016 @huxpro
//  * Licensed under Apache 2.0
//  * Register service worker.
//  * ========================================================== */

// const RUNTIME = 'dmj.one'
// const HOSTNAME_WHITELIST = [
//   self.location.hostname,
//   'practice.dmj.one',
//   'fonts.gstatic.com',
//   'fonts.googleapis.com',
//   'cdn.jsdelivr.net',
//   'cdnjs.cloudflare.com',
//   'dmj.one',
//   'fonts.googleapis.com',
//   'picsum.photos'
// ]

// // The Util Function to hack URLs of intercepted requests
// const getFixedUrl = (req) => {
//   var now = Date.now()
//   var url = new URL(req.url)

//   // 1. fixed http URL
//   // Just keep syncing with location.protocol
//   // fetch(httpURL) belongs to active mixed content.
//   // And fetch(httpRequest) is not supported yet.
//   url.protocol = self.location.protocol

//   // 2. add query for caching-busting.
//   // Github Pages served with Cache-Control: max-age=600
//   // max-age on mutable content is error-prone, with SW life of bugs can even extend.
//   // Until cache mode of Fetch API landed, we have to workaround cache-busting with query string.
//   // Cache-Control-Bug: https://bugs.chromium.org/p/chromium/issues/detail?id=453190
//   if (url.hostname === self.location.hostname && !url.pathname.startsWith('/api/')) {
//     url.search += (url.search ? '&' : '?') + 'cache-bust=' + now
//   }
//   return url.href
// }

// /**
//  *  @Lifecycle Activate
//  *  New one activated when old isnt being used.
//  *
//  *  waitUntil(): activating ====> activated
//  */
// self.addEventListener('activate', event => {
//   event.waitUntil(self.clients.claim())
// })

// /**
//  *  @Functional Fetch
//  *  All network requests are being intercepted here.
//  *
//  *  void respondWith(Promise<Response> r)
//  */
// self.addEventListener('fetch', event => {
//   // Skip some of cross-origin requests, like those for Google Analytics.
//   if (HOSTNAME_WHITELIST.indexOf(new URL(event.request.url).hostname) > -1) {
//     // Stale-while-revalidate
//     // similar to HTTP's stale-while-revalidate: https://www.mnot.net/blog/2007/12/12/stale
//     // Upgrade from Jake's to Surma's: https://gist.github.com/surma/eb441223daaedf880801ad80006389f1
//     const cached = caches.match(event.request)
//     const fixedUrl = getFixedUrl(event.request)
//     const fetched = fetch(fixedUrl, { cache: 'no-store' })
//     const fetchedCopy = fetched.then(resp => resp.clone())

//     // Call respondWith() with whatever we get first.
//     // If the fetch fails (e.g disconnected), wait for the cache.
//     // If there’s nothing in cache, wait for the fetch.
//     // If neither yields a response, return offline pages.
//     event.respondWith(
//       Promise.race([fetched.catch(_ => cached), cached])
//         .then(resp => resp || fetched)
//         .catch(_ => { /* eat any errors */ })
//     )

//     // Update the cache with the version we fetched (only for ok status)
//     event.waitUntil(
//       Promise.all([fetchedCopy, caches.open(RUNTIME)])
//         .then(([response, cache]) => response.ok && cache.put(event.request, response))
//         .catch(_ => { /* eat any errors */ })
//     )
//   }
// })


const CACHE_NAME = 'dmj-one-dynamic-cache-v1';

// Install event: Cache only the service worker itself.
self.addEventListener('install', event => {
  self.skipWaiting();
});

// Activate event: Clean up old caches.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event: Cache dynamically and ensure fresh content.
self.addEventListener('fetch', event => {
  // Skip non-GET requests and requests to /api/
  if (event.request.method !== 'GET' || event.request.url.includes('/api/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });

      // Return cached response if available, otherwise wait for network.
      return cachedResponse || fetchPromise;
    })
  );
});
