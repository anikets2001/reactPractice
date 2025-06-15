/*---
✅ What is Server-Side Rendering (SSR)?

📌 Server-Side Rendering is the process of rendering the full HTML content of a page on the **server**, and sending that to the browser.

- The server pre-renders the HTML content based on the incoming request.
- The browser receives a fully populated HTML document — ready to display.

🧠 In contrast to Client-Side Rendering (CSR), where JS loads first and then the page is rendered in the browser.

---*/

/*---
🔄 SSR vs CSR – Key Difference

| Feature                  | SSR (Server-Side Rendering)         | CSR (Client-Side Rendering)            |
|--------------------------|-------------------------------------|----------------------------------------|
| Who renders the HTML?    | Server                              | Browser                                |
| Time to first render     | Faster (HTML visible quickly)       | Slower (blank page until JS loads)     |
| SEO                      | ✅ Good (bots see content)          | ❌ Poor (needs pre-rendering for SEO) |
| Initial load             | Faster                              | Slower                                 |
| Interactivity            | Delayed (after hydration)           | Immediate after JS loads               |
| Complexity               | More setup required                 | Simpler with SPA                       |

---*/

/*---
📦 What Kind of File Does the Server Respond With?

✅ Server sends a fully rendered **HTML** file as the response to the browser’s request.
It includes:
- HTML content of the page
- CSS styles
- A `<script>` to load JS for hydration (make it interactive)

🧠 After initial load, the JS bundle "hydrates" the HTML to make it interactive.

---*/

/*---
🚀 Benefits of SSR

✅ Faster First Paint (especially on slow networks)
✅ Improved SEO (good for search engine crawling)
✅ Better performance on low-power devices (rendered on server)
✅ Predictable content load (no blank screen flashes)
✅ Ideal for content-heavy sites (e.g. blogs, e-commerce, news)

---*/

/*---
⚠️ Drawbacks of SSR

❌ Higher server load (server does the rendering for every request)
❌ Slightly longer TTI (Time to Interactive) due to hydration delay
❌ More complex to manage server + client code together
❌ Harder to cache dynamic pages

---*/

/*---
🛠️ How to Achieve SSR in a React App?

✅ Use a framework like:
- **Next.js** (most popular)
- Remix
- Gatsby (Static generation mostly, but SSR possible)

🧱 Next.js Example:
```js
// pages/index.js
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
}

export default function Home({ data }) {
  return <div>{data.title}</div>;
}

---*/


/*---
🧠 What is Hydration?

📌 Hydration is the process where React attaches event listeners and state to server-rendered HTML to make it interactive in the browser.

SSR ➜ HTML rendered on server ➜ HTML loaded in browser ➜ React hydrates it ➜ becomes interactive

Without hydration, HTML is static.

---*/


/*---
📌 What is Static Site Generation (SSG)?

🧱 SSG is a form of SSR where HTML is generated at build time, not per request.

✅ Use when data doesn't change often (blogs, docs).
✅ Faster than SSR because there's no server computation on each request.

Frameworks: Next.js (getStaticProps()), Gatsby, etc.

---*/

/*---
🧪 When to Use SSR?

✅ Use SSR when:

SEO is critical (e.g. e-commerce, product pages)

First load performance matters

Content is dynamic and changes per user or per request

❌ Avoid SSR when:

App is fully dynamic with user-specific content

You can cache a page with SSG or CSR

SSR is too expensive (for every request)

---*/


/*---
🧠 Q1: What is Hydration? Why is it needed?

📌 Hydration is the process where a JavaScript framework like React **attaches event listeners and reactivates the state** on top of server-rendered HTML.

➡ SSR sends static HTML to the browser.
➡ React (or any framework) runs in the browser and "hydrates" that static HTML to make it **interactive**.

✅ Needed because:
- The HTML from SSR is non-interactive.
- Without hydration, buttons, forms, and navigation won’t work.

🧠 Interview Tip:
Hydration bridges the gap between static SSR HTML and a dynamic SPA.

---*/

/*---
🧠 Q2: What’s the Difference Between SSR and SSG?

| Aspect          | SSR (Server-Side Rendering)      | SSG (Static Site Generation)        |
|------------------|-----------------------------------|-------------------------------------|
| When rendered    | At **runtime**, per request      | At **build time**, before deploy    |
| Server load      | High (renders every time)        | Low (prebuilt)                      |
| Performance      | Slower than SSG                  | Fastest (pre-cached pages)          |
| Use cases        | Dynamic pages (e.g. user-based)  | Blogs, docs, rarely-changing pages  |

✅ Both are good for SEO but serve different use cases.

---*/

/*---
🧠 Q3: How does SSR affect SEO?

✅ SSR helps SEO **tremendously** because search engine bots (Google, Bing) can immediately see fully rendered content in the HTML source.

📌 In CSR, bots may see an empty `<div id="root"></div>` unless you use extra tools like `React Helmet` or pre-rendering.

✅ SSR ensures:
- Metadata and content are present in HTML
- Pages are indexable and crawlable
- Fast first paint improves user ranking signals

---*/

/*---
🧠 Q4: What’s the Lifecycle of a React Component in SSR?

📌 In SSR, the **client-side lifecycle** is different than in CSR.

1. On server:
   - Only `constructor`, `render()` and `static getDerivedStateFromProps()` run.
   - No `useEffect`, `componentDidMount`, etc. (no browser APIs).

2. On client (after hydration):
   - Lifecycle resumes with hydration.
   - `componentDidMount`, `useEffect`, etc., run on the browser.

🧠 Key Point:
Browser-only lifecycle methods don’t run during SSR — they run **after hydration**.

---*/

/*---
🧠 Q5: How do you handle authentication in SSR?

✅ Best Practices:

1. **Use cookies or headers** to send auth info with the request.
2. In `getServerSideProps` (Next.js), check for cookies/token:
```js
export async function getServerSideProps(context) {
  const token = context.req.cookies.token;

  if (!token) {
    return { redirect: { destination: '/login', permanent: false } };
  }

  return { props: { user: decodeToken(token) } };
}

----*/


// This function runs **on the server at request time** — before rendering the component.
export async function getServerSideProps(context) {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
  
    return {
      props: {
        data, // passed to the page component as props
      },
    };
  }
  
