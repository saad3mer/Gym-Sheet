const CACHE_NAME="gym-sheet-v1";
const FILES=["./","./index.html","./day.html","./manifest.json","./icon.png"];

self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)));
});

self.addEventListener("fetch", e=>{
  e.respondWith(caches.match(e.request).then(r=>r || fetch(e.request)));
});
