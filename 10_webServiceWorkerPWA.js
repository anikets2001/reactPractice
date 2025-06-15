/*---
✅ What are Web Workers?

📌 Web Workers are a way to run JavaScript in a **background thread** separate from the main UI thread.

This helps keep the UI responsive, especially when doing **CPU-intensive operations**.

They do not have access to the DOM but can communicate with the main thread via `postMessage`.
---*/

/*---
🧠 Why Use Web Workers?

1. Avoid UI blocking from heavy computations.
2. Improve performance and responsiveness.
3. Run parallel tasks (e.g., parsing large files, image processing).
4. Useful for offloading tasks from the main thread.

Real-World Use Cases:
- Complex math/calculations
- Image or video processing
- Sorting or filtering large data sets
- Data parsing (CSV/JSON)
- Machine learning in the browser
---*/

/*---
📦 Key Characteristics of Web Workers:

- No access to DOM (`document`, `window`)
- Communicate via `postMessage()` and `onmessage`
- Separate global scope (`self`)
- Can be reused for multiple messages
- Can import scripts using `importScripts()`
---*/

/*---
🧩 Basic Syntax:

✅ main.js (Main Thread)
```js
const worker = new Worker('worker.js');
worker.postMessage('Hello Worker');

worker.onmessage = function (e) {
  console.log('Message from worker:', e.data);
};
---*/

/*---
✅ Interview Tips & Traps:

Q: Can a Web Worker access the DOM?
A: ❌ No, Web Workers run in a separate thread and cannot access document or window.

Q: How do you share data between a worker and the main thread?
A: Using postMessage for both sending and receiving data.

Q: How do Web Workers help improve performance?
A: By offloading heavy or blocking tasks from the main thread to keep UI smooth.

Q: What’s the difference between Web Worker and Service Worker?
A: Web Worker is for heavy computation. Service Worker intercepts network requests and runs in the background even after tab closes.
---*/


/*---
✅ What Are Service Workers?

📌 A Service Worker is a **script that the browser runs in the background**, separate from the main thread.

It powers features like:
- Caching for offline support
- Background sync
- Push notifications
- Intercepting and handling network requests

🧠 Key Point:
Service Workers are essential for making your web app a **Progressive Web App (PWA)**.
---*/

/*---
🚦 Lifecycle of a Service Worker

1. **Register** – Main JS registers the SW file.
2. **Install** – Runs once when the SW is installed.
3. **Activate** – Cleans up old caches or data.
4. **Fetch** – Listens to all network requests and can serve cached content.

📝 Registration example:
```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('✅ SW Registered'));
}
---*/

/*---
🔧 Basic Structure of a Service Worker:

// service-worker.js
self.addEventListener('install', (event) => {
  // Pre-cache files
});

self.addEventListener('activate', (event) => {
  // Cleanup old caches
});

self.addEventListener('fetch', (event) => {
  // Intercept network requests
});
---*/

/*---
🧠 What Can a Service Worker Do?

✅ Intercept HTTP requests and respond from cache (offline support)
✅ Preload and cache static assets (JS, CSS, images)
✅ Enable background sync
✅ Receive push notifications
✅ Work even after browser tab is closed (if registered)

❌ Cannot:

Access the DOM directly

Use synchronous APIs like localStorage (must use IndexedDB or Cache API)
---*/

/*---
💡 Cache Strategy Example (Cache-First):

const CACHE_NAME = 'v1';
const urlsToCache = ['/', '/index.html', '/main.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
---*/

/*---
🧪 Interview Questions & Tips:

Q: How does a Service Worker differ from a Web Worker?
✅ A Web Worker handles CPU-heavy JS in background threads.
✅ A Service Worker intercepts network requests and helps with offline support.

Q: How does a Service Worker improve performance?
✅ By caching static assets, reducing network requests, and providing instant load times.

Q: How does it make a web app "installable"?
✅ Along with manifest.json, it enables install prompts and offline capabilities.

Q: What are limitations of Service Workers?
✅ No access to DOM, runs only on HTTPS, and doesn’t persist across major browser updates unless reactivated.

Q: When does a Service Worker take control?
✅ After it's installed and activated — not immediately. You must refresh the page to see the new service worker's effect.

---*/


/*---
✅ What is a PWA (Progressive Web App)?

📌 A Progressive Web App is a **web application** that behaves like a **native mobile app** while running in a browser.

It combines the best of both web and native apps:
- Works offline
- Installable
- Fast & responsive
- Secure
- Can receive push notifications

---*/

/*---
🚀 Why Use a PWA?

✅ Works on any browser
✅ Can be added to the device home screen
✅ Works offline via caching
✅ Loads fast even on slow networks
✅ Engages users with push notifications
✅ Does not need to go through app stores

---*/

/*---
🧱 Core Components of a PWA

1. **HTTPS** – Required for security
2. **Web App Manifest (`manifest.json`)** – Metadata about your app (name, icons, start URL, etc.)
3. **Service Worker** – Handles caching, offline support, background sync
4. **Responsive Design** – Works across all screen sizes
5. **App Shell Architecture** – Fast repeated loads using minimal layout shell

---*/

/*---
📦 What is Required to Make a PWA?

- ✅ `manifest.json` linked in the HTML `<head>`
- ✅ A registered and active Service Worker
- ✅ Served via HTTPS
- ✅ Responsive, reliable, and fast performance

---*/

/*---
🧪 Example Manifest File (`manifest.json`)
```json
{
  "name": "My Cool PWA",
  "short_name": "CoolPWA",
  "start_url": "/index.html",
  "display": "standalone",
  "theme_color": "#4a90e2",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}

---*/

/*---
📌 How to Make Your React App a PWA (CRA)

If using Create React App:

Use npm run build

index.html already links manifest.json

Register Service Worker in index.js using serviceWorkerRegistration.js

✅ Installable as a PWA on mobile/desktop
---*/


/*---
🧠 Interview Questions & Traps

Q: What makes a web app "progressive"?
✅ It enhances gradually — features like offline support and installation work if supported, but app still functions without them.

Q: What's the difference between SPA and PWA?
✅ SPA is a type of web app with client-side routing.
✅ PWA is about user experience (offline, installable, performant), and can be SPA or MPA.

Q: How does a PWA work offline?
✅ With a Service Worker that intercepts fetch requests and serves cached responses.

Q: What is the App Shell model?
✅ Minimal HTML/CSS/JS used to load fast and fill in content later from network or cache.

Q: Is PWA supported on iOS?
✅ Yes, with some limitations (no push notifications before iOS 16.4, limited background sync).

---*/