const cacheName = "podyplomowe";

const filesToCache = ["./", "./index.html", "./css/style.css", "./js/main.js"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener("fetch", function(event){
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response
            }
            return fetch(event.request)
        })
    )
})