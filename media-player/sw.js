self.addEventListener("install", (event) => {
  event.waitUntil(prechache());
});

async function prechache() {
  const cache = await caches.open("v1");
  return cache.addAll([
    "./",
    "./index.js",
    "./index.html",
    "./MediaPlayer.js",
    "./assets/BigBuckBunny_512kb.mp4",
    "./assets/style.css",
    "./plugins/AutoPause.js",
    "./plugins/AutoPlay.js",
  ]);
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  //Vamos solo a capturar los métodos get
  if (request.method !== "GET") {
    return;
  }

  //Buscar en cache
  event.respondWith(cachedResponse(request));

  //Actualizar el cache
  event.waitUntil(updateCache(request));
});

async function cachedResponse(request) {
  const cache = await caches.open("v1");
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open("v1");
  const response = await fetch(request);
  return cache.put(request, response);
}
