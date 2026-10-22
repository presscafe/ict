const CACHE = "presscafe-command-studio-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/styles.css",
  "./assets/app.js",
  "./assets/emb-mockup-studio.js",
  "./bdb-store/index.html",
  "./bdb-store/config.js",
  "./bdb-store/assets/styles.css",
  "./bdb-store/assets/app.js",
  "./bdb-store/data/catalogue.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(
      (cached) =>
        cached ||
        fetch(event.request)
          .then((response) => {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
            return response;
          })
          .catch(() => caches.match("./index.html"))
    )
  );
});
