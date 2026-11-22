const CACHE_NAME = "body-battery-shell-v2";
const APP_SHELL = [
  "./",
  "./index.html",
  "./index.js",
  "./style.css",
  "./manifest.webmanifest",
  "./favicon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName.startsWith("body-battery-shell-") &&
                cacheName !== CACHE_NAME,
            )
            .map((cacheName) => caches.delete(cacheName)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request);
        if (response.ok || response.type === "opaque") {
          cache.put(request, response.clone()).catch(() => {});
        }
        return response;
      } catch {
        const cached = await cache.match(request);
        if (cached) return cached;

        if (request.mode === "navigate") {
          return (
            (await cache.match(new URL("./", self.registration.scope))) ||
            (await cache.match(new URL("./index.html", self.registration.scope)))
          );
        }

        return Response.error();
      }
    })(),
  );
});
