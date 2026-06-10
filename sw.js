const CACHE_NAME = 'bday-hunt-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './images/icon-192.png',
  './images/icon-512.png',
  './images/us.jpg',
  './images/dani-photo.jpg',
  './audio/rain-track-1.mp3',
  './audio/rain-track-2.mp3',
  './audio/zelda-chest.mp3',
  './audio/cute-pop.mp3',
  './audio/taco-bong.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});