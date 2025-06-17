/*---

Web security is essential for protecting user data, integrity, and prevent malicious access of our web page

Two important security threats:
1.XSS  - (Cross site Scripting)
2.CSRF - (Cross site request Frogery)

---*/

/*---
XSS- 
📌 What is it?
XSS is a vulnerability where an attacker injects **malicious scripts (usually JavaScript)** into a trusted website, which then runs in the browser of other users.

➡ This script can:
- Steal cookies
- Hijack sessions
- Redirect users
- Modify the DOM

🧠 Example:
```html
<input value="<script>alert('XSS')</script>">


If this is rendered without sanitization, the script will execute in the user's browser.

✅ Types of XSS:

Stored XSS – Injected code is saved in DB (e.g., in comments)

Reflected XSS – Injected via URL or form and reflected back

DOM-based XSS – Malicious input is executed by unsafe client-side JS

✅ How to Prevent XSS:

Sanitize/escape input and output (DOMPurify, xss-filters)

Use frameworks that auto-escape values (React escapes by default)

Set Content Security Policy (CSP) headers

Avoid using dangerouslySetInnerHTML in React

Use HttpOnly cookies for tokens to prevent JS access

🧠 Interview Tip:
React is mostly safe by default, but be cautious with 3rd-party libraries and direct DOM manipulation.

---*/

/*---
🔐 CSRF – Cross-Site Request Forgery

📌 What is it?
CSRF tricks a user into performing unwanted actions (like submitting a form or clicking a link) on a site where they are authenticated.

➡ Example:
If a user is logged into bank.com, and visits a malicious site with this:

html
Copy
Edit
<img src="https://bank.com/transfer?amount=1000&to=hacker">
If the browser sends cookies automatically, the request will succeed.

✅ CSRF relies on:

The user being authenticated

Cookies being sent automatically with the request

✅ How to Prevent CSRF:

Use CSRF tokens in forms (server-generated, verified on submit)

Use SameSite cookie attribute:

SameSite=Strict or Lax prevents sending cookies to other origins

Use Double Submit Cookies

Avoid using GET for state-changing actions (like delete, transfer)

Use CORS + custom headers to protect API endpoints

🧠 Interview Tip:
CSRF is only an issue if your app relies on cookies for authentication. If you use Authorization headers with JWT (and no cookies), CSRF is not a concern.

---*/

/*---
🧪 XSS vs CSRF – Comparison Table

Feature	XSS	CSRF
Attack Type	Injects malicious JavaScript	Tricks user into sending a request
Affects	Any user viewing the page	Authenticated user sessions
Requires Login	❌ No	✅ Yes
Goal	Run code in victim’s browser	Perform unauthorized actions
Defense	Sanitize input, CSP, HttpOnly	CSRF tokens, SameSite cookies

---*/

/*---
🧠 Bonus: Secure Headers to Know

✅ Always use these headers:

Content-Security-Policy: Prevents XSS

X-Content-Type-Options: nosniff: Prevents MIME-type sniffing

X-Frame-Options: DENY: Prevents clickjacking

Strict-Transport-Security: Enforces HTTPS

Referrer-Policy: Controls Referer header exposure

These headers enhance browser-side protections.

---*/

/*---
📌 Summary

✅ XSS allows attackers to run JavaScript in a victim’s browser by injecting it into the page.

✅ CSRF tricks authenticated users into submitting requests they didn’t intend to, using their existing session cookies.

➡ Use secure coding practices, modern frameworks, and browser protections to defend against both.

These are frequent front-end interview questions, especially if you're working with user data or authentication.

---*/