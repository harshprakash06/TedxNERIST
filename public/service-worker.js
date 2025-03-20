self.addEventListener("install", (event) => {});

self.addEventListener("activate", (event) => {});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
  // Remove or comment out console logs
  // console.log('Fetching:', event.request.url);
});
