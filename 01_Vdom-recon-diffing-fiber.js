/*---
📘 Virtual DOM:
Virtual DOM is a copy of the real DOM that improves the performance of a React app by only updating the changed nodes from the previous render.
It uses a diffing algorithm to compare the previous VDOM with the current VDOM and updates only those nodes that have changed.
---*/

/*---
📘 Diffing Algorithm:
The diffing algorithm is a process React uses to compare the new Virtual DOM with the previous one and figure out the minimum number of operations needed to update the real DOM.

🛠️ How it works:
- React compares two Virtual DOM trees.
- It traverses nodes recursively and identifies what has changed.

🔍 It follows a specific process:
1. If elements are of different types, it replaces the whole subtree.
2. If elements are of the same type, it compares props and updates them.
3. It uses the `key` prop to optimize reordering of lists.
---*/

/*---
📘 Reconciliation:
Reconciliation is the process React uses to update the DOM efficiently by comparing the new VDOM with the previous VDOM using the diffing algorithm.

🎯 Goal: Update only what's changed

🔄 Steps:
1. A component’s state or props change.
2. React calls the render function, generating a new Virtual DOM.
3. The new VDOM is compared with the old VDOM (diffing).
4. React calculates the minimal set of changes (patches).
5. Those changes are applied to the real DOM.
---*/

/*---
📘 React Fiber: prioritize the important tasks
React Fiber is the new reconciliation engine in React (introduced in React 16) that enables React to prioritize important tasks. It allows React to break rendering work into chunks and pause, resume, or abort them as needed.

🧠 Why Fiber?
- The old reconciliation algorithm was synchronous and blocking.
- Fiber enables asynchronous rendering, making React more responsive, especially in large apps.

⚙️ How it works:
- Each element in the VDOM is a Fiber node, which contains information about the component (type, props, state, effect, etc.).
- React builds a Fiber tree instead of a regular VDOM tree.
- The tree can be traversed in segments, allowing React to prioritize work like animations over data fetching.
---*/
