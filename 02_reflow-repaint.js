/*---
Reflow and repaint are the mechanism that runs behind the scenes when there is a DOM update

Reflow -> layout updates, 
It happens when changes affect the **document flow** or **structure**.

🧠 Triggers for Reflow:
- Adding/removing elements from the DOM
- Changing element dimensions (`width`, `height`, `padding`, `margin`, `border`)
- Changing font sizes or content (e.g., text change)
- Changing `display`, `position`, or `box-sizing`
- Window resize or media query changes
- Accessing layout properties (like `offsetHeight`, `scrollTop`) — they **force sync layout**

---*/

/*---
🎨 Repaint

📌 What is Repaint?
Repaint is when the browser **updates the pixels** on the screen — colors, shadows, visibility — without changing layout.

🧠 Triggers for Repaint:
- Changing `background-color`, `color`, `visibility`, `box-shadow`
- Changing `outline`, `border-color`, `opacity`, etc.

📌 Less expensive than reflow, but still impacts performance.

---*/

/*---
🧠 Reflow vs Repaint – Comparison Table

| Property/Action         | Causes Reflow? | Causes Repaint? |
|-------------------------|----------------|-----------------|
| `width`, `height`       | ✅ Yes         | ✅ Yes          |
| `color`, `background`   | ❌ No          | ✅ Yes          |
| `display: none`         | ✅ Yes         | ❌ No           |
| `visibility: hidden`    | ❌ No          | ✅ Yes          |
| `font-size`, text       | ✅ Yes         | ✅ Yes          |
| Changing class with layout | ✅ Yes      | ✅ Yes          |


---*/
