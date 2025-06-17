/*---
🌐 How the Web Works – Behind the Scenes

When you type a URL in the browser (like `https://www.example.com`) and hit enter, a **series of behind-the-scenes steps** happen before you see a webpage.

This is a very commonly asked frontend question to test system understanding and debugging skills.

---*/

/*---
🔁 Step-by-Step Breakdown of a Web Request

1. ✅ **DNS Lookup**
   - The browser converts the domain name (`example.com`) into an IP address using DNS (Domain Name System).
   - It queries your **local cache**, then your **ISP's DNS server**, and finally root name servers if needed.
   - Example: `example.com` → `93.184.216.34`

2. 🚪 **Establish TCP Connection**
   - Browser creates a TCP connection with the server (using **3-way handshake**) on port 80 (HTTP) or 443 (HTTPS).

3. 🔐 **TLS Handshake (if HTTPS)**
   - For secure communication, browser and server perform a **TLS/SSL handshake** to exchange keys and verify identity.
   - Ensures all data transferred is **encrypted**.

4. 📤 **Browser Sends HTTP Request**
   - The browser sends an HTTP request to the server with:
     - Request line: `GET /index.html HTTP/1.1`
     - Headers: Host, User-Agent, Accept, etc.
     - (Optional) Body: for `POST`, `PUT`, etc.

5. 📥 **Server Processes the Request**
   - Server finds the requested resource (e.g., HTML file, API data).
   - May involve reading from database, processing logic, etc.

6. 📦 **Server Sends HTTP Response**
   - Response includes:
     - Status code: `200 OK`, `404 Not Found`, `500 Server Error`
     - Headers: `Content-Type`, `Set-Cookie`, `Cache-Control`, etc.
     - Body: HTML, JSON, image, etc.

7. 🧠 **Browser Parses and Renders**
   - Browser starts parsing the response:
     - Parses HTML → builds DOM
     - Parses CSS → builds CSSOM
     - Runs JS → builds render tree
   - It then paints pixels to the screen

8. 🗃️ **Subsequent Resource Requests**
   - While parsing, the browser finds linked assets (CSS, JS, images)
   - Makes **parallel HTTP requests** for those files

9. 🚀 **Page is Interactive**
   - Once critical scripts/styles load and render, the page becomes interactive.
   - JS runtime, event loop, and UI thread manage updates.

---*/

/*---
🔧 Client vs Server Roles

| Component | Role                                  |
|----------|----------------------------------------|
| **Client**  | Sends request, renders UI, handles input |
| **Server**  | Processes requests, fetches DB, returns data |

---*/

/*---
🧠 Key HTTP Methods

| Method | Purpose                    |
|--------|----------------------------|
| GET    | Read/fetch data (idempotent) |
| POST   | Create new resource         |
| PUT    | Update/replace resource     |
| PATCH  | Update part of resource     |
| DELETE | Remove resource             |

---*/

/*---
🔍 HTTP Status Codes

| Code | Meaning                  |
|------|--------------------------|
| 200  | OK                       |
| 301  | Permanent Redirect       |
| 304  | Not Modified (cache hit) |
| 400  | Bad Request              |
| 401  | Unauthorized             |
| 403  | Forbidden                |
| 404  | Not Found                |
| 500  | Internal Server Error    |

---*/

/*---
🔒 HTTPS vs HTTP

- HTTP is plaintext (not secure)
- HTTPS encrypts all data using TLS
- Always use HTTPS in production for security and SEO

---*/

/*---
⚙️ Caching & Optimization

- **Browsers cache** static resources (images, CSS, JS) using headers like `Cache-Control`, `ETag`, and `Last-Modified`
- Reduces network calls and improves performance

---*/

/*---
📦 Important Headers

| Header             | Purpose                                 |
|--------------------|------------------------------------------|
| `Content-Type`     | Type of response (e.g., text/html)       |
| `Cache-Control`    | Caching rules                            |
| `Set-Cookie`       | Stores session/token in browser          |
| `Authorization`    | Used for passing bearer tokens, etc.     |
| `Access-Control-*` | Handles CORS (Cross-Origin Resource Sharing) |

---*/

/*---
🧠 Interview Questions to Practice

1. What happens when you enter a URL in the browser?
2. What is DNS and how does DNS resolution work?
3. How does HTTPS ensure secure communication?
4. What's the role of the server in rendering a page?
5. What’s the difference between `GET` and `POST`?
6. What headers control caching behavior in browsers?
7. How does the browser render a page after receiving HTML?
8. What are cookies and how are they different from localStorage?
9. What is CORS and why does it exist?
10. What is the difference between a 301 and a 302 redirect?

---*/

/*---
🧠 Summary

- A browser request goes through DNS → TCP → TLS → HTTP
- The server returns a response which the browser renders
- HTTP methods and headers control how data is sent and cached
- Browser parses HTML, CSS, JS to build the page
- Performance and security depend heavily on network behavior

This flow is **critical for debugging performance, errors, and secure communication** — often asked in interviews and system design rounds.

---*/
