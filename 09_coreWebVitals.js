/*---
✅ What Are Core Web Vitals?
Core Web Vitals are a set of specific performance metrics defined by Google that measure real-world user experience on a web page. 
They focus on 3 key aspects:

Loading performance
Interactivity
Visual stability
----*/

/*---
🔍 The 3 Core Web Vitals

1.Largest contentFul paint
2.First Input delay
3.Cumulative Layout Shift

1. LCP – Largest Contentful Paint
📌 What is it?
Measures loading performance — specifically, the time it takes to render the largest visible content 
(like a hero image, heading, etc.) in the viewport.

📌 Ideal Value:
Less than 2.5 seconds.

📌 What Affects LCP?
Large images
Videos or background images
Heavy font loads
Slow server response time
Render-blocking JavaScript or CSS

📌 How to Improve LCP:

Use lazy loading
Optimize images (use WebP, compression)
Use a Content Delivery Network (CDN)
Minimize render-blocking resources
Use server-side rendering (SSR) or pre-rendering for critical content

📌 Interview Traps / Questions:
What’s the difference between FCP and LCP?

📊 FCP vs LCP – What’s the difference?
Metric	                 First Contentful Paint (FCP)	             Largest Contentful Paint (LCP)
📌 Meaning	            Time when any content first appears	        Time when largest content is fully rendered
🎯 Focus	            First visual feedback	                    Loading of main content
🧪 Examples	            Text, spinner, small image	                Hero image, main heading
🕒 Target	            < 1.8 sec	                                < 2.5 sec


How do you optimize LCP in a React app?

✅ Common Optimization Strategies:
Lazy-load non-critical content with React.lazy or dynamic import()

Preload key images (especially hero images)
<link rel="preload" as="image" href="hero.webp" />
Use WebP or compressed formats

Load images via CDN
Defer heavy third-party scripts
Avoid client-only rendering — use SSR or static generation where possible
Inline critical CSS, delay the rest



How would you debug a poor LCP score?

✅ Step-by-step Debugging Approach:

Run Lighthouse / PageSpeed Insights
See what element is considered LCP
Check when that element is rendered
Is it blocked by JS? Images loading late?
Inspect network tab
Large image? Not compressed? Slow download?
Look for layout shifts or hydration delay (in SPA apps)
Check server response time (TTFB)
---*/

/*---
✅ What is FID (First Input Delay)?
Measures the time between a user's first interaction (e.g., click/tap) and when the browser responds. 
It’s about how fast the site becomes interactive.

📌 Ideal Value:
Less than 100ms.

📌 What Causes High FID?

- Long JavaScript tasks blocking the main thread
- Heavy sync work during page load
- Poor code-splitting or large JS bundles
- Third-party scripts loading early
- DOM not yet ready to handle events

📌 How to Improve FID:

- Break long JavaScript tasks using setTimeout/requestIdleCallback
- Use code-splitting (React.lazy + Suspense)
- Minimize heavy computations during load
- Move non-critical scripts to async/defer
- Use Web Workers to offload CPU-heavy tasks

📌 Interview Traps / Questions:
What is a long task and how would you break it?
How would you optimize FID in React?
What tools help measure FID?
---*/

/*---
🛠 Example of a Long Task and Fix:
```js
// Bad - long task
for (let i = 0; i < 1e8; i++) compute();

// Good - break into chunks
function chunkedLoop(arr) {
  let i = 0;
  function process() {
    for (let j = 0; j < 1000 && i < arr.length; j++, i++) {
      compute(arr[i]);
    }
    if (i < arr.length) setTimeout(process, 0);
  }
  process();
}
---*/

/*---
✅ What is CLS (Cumulative Layout Shift)?
CLS measures visual stability — how much visible elements shift during page load.

📌 Ideal Value:
Less than 0.1.

📌 Real-World Examples:
Image loads and pushes content down
Fonts load late and shift layout
Ads injected above main content
Dynamic components change size after load

📌 How to Prevent CLS:
Always set width and height on <img> and <video>
Use CSS aspect-ratio or fixed container size
Avoid inserting DOM elements above existing content
Use skeleton loaders instead of spinners
Use min-height for containers in React while loading

📌 Interview Traps / Questions:
Give a real-world example of CLS.
How do you prevent layout shifts in a dynamic React UI?
---*/

/*---
📌 Interview Trap:
What's a good FCP doesn't guarantee good LCP.
---*/

/*---
✅ How to Optimize LCP in a React App

📌 1. Prioritize Visible Content:
Move important content (e.g., hero image) high in DOM

📌 2. Optimize Images:
Use WebP format or AVIF
Use responsive <img srcSet>
Lazy-load below-the-fold images

📌 3. Use SSR or pre-rendering (e.g., Next.js)
📌 4. Use a CDN to serve content faster
📌 5. Defer non-critical JS and CSS
📌 6. Split code and load only what's needed

📌 Interview Questions:
How do you improve LCP score?
Which React techniques help reduce LCP?
---*/

/*---
✅ How to Debug Poor LCP

📌 1. Use Chrome DevTools → Performance tab
Find "LCP" marker
Look at when it appears and what delays it
📌 2. Use Lighthouse
Shows what element is counted as LCP
Highlights render-blocking resources
📌 3. Real User Monitoring (RUM) via Web Vitals JS or GA4
📌 4. Check:

Large image sizes?
Fonts blocking render?
JS/CSS delaying LCP element?

📌 Interview Tip:
Always explain which element was LCP, not just the score.
---*/

/*---
✅ What is WebP?
📌 WebP is a modern image format by Google.
Provides superior compression than JPEG/PNG
Supports transparency (like PNG) and animation (like GIF)

📌 Benefits:
Smaller file size = faster load = better LCP
Supported by all major browsers

📌 Usage:
<img src="image.webp" width={400} height={300} />
📌 Interview Tip:
Say you use WebP for faster rendering and layout stability.
---*/

/*---
✅ What is a CDN and Why Use It?

📌 CDN = Content Delivery Network
A network of globally distributed servers that serve assets from the server closest to the user.

📌 Benefits:
Faster load times
Reduced load on origin server
Improved Core Web Vitals (LCP, FCP)
Built-in caching & DDoS protection

📌 Use Cases:

Serve images, fonts, videos
Deploy full React apps (Vercel, Netlify)
Load 3rd-party scripts

📌 Interview Trap:
CDN != hosting. It’s a delivery optimization layer.

---*/

/*---
✅ How to Use CDN in a React App

📌 1. Serve images/assets via CDN URL:
<img src="https://cdn.example.com/image.webp" />
📌 2. Use CDN-hosted fonts:
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" />
📌 3. Deploy app on CDN-backed platforms (Netlify, Vercel)
📌 4. Use tools like Cloudinary, Imgix, AWS CloudFront for custom asset delivery

📌 Interview Tip:
Using CDN boosts LCP and makes large assets cheaper to serve.
---*/

/*---
✅ What Are Render-Blocking Resources?
📌 Resources that delay the browser from rendering visible content.
Examples:

Synchronous JS
CSS files
Web fonts (before fallback)

📌 Why Bad?
Browser must download/parse them before showing content = slower FCP/LCP.

📌 How to Minimize:

Use async or defer for scripts:
<script src="main.js" defer></script>
Inline critical CSS or use media="print" + swap

Use font-display: swap for fonts

Minimize unused CSS & JS (via tree shaking)

📌 Interview Tip:
Mention DevTools → Coverage tab for analyzing unused bytes.
---*/

/*---
✅ async vs defer – When to Use?

Script Type	Loads in Parallel?	Blocks Render?	Executes When?	Preserves Order?
async	✅ Yes	✅ Yes	When ready (random)	❌ No
defer	✅ Yes	❌ No	After HTML parsed	✅ Yes

📌 Best Practices:

Use defer for app scripts (React bundles)
Use async for 3rd-party tools (analytics, chat, etc.)

📌 Interview Trap:
Never use plain <script> without async/defer — it blocks DOM parsing.
---*/
