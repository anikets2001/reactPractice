/*---
useState hook:
 * useState hook is used to handle the local state of a functional component, when we update a state variable it triggers component re-render,
 * "useState lets functional components manage local state. Updating state triggers a re-render of the component."
 * 
 * 🧠 Use Case:
 * Track form inputs
 * Toggle modals, buttons
 * Count clicks, likes, etc.
---*/

/*---
Batching:
💡 What is Batching in React?
📘 Definition:
    Batching means grouping multiple state updates into a single re-render, improving performance by avoiding unnecessary renders.
---*/

// ✅ Example:
setCount(count + 1);
setName("John");

// ➡️ These are batched into one re-render, not two.

/*---
❓ What happens if you call setCount(count + 1) four times inside a function?
---*/
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
};

// 🧠 Result:
// You might expect 4, but the actual value will be 1.

/*---
❓ Why?
Because useState doesn't update the state immediately. It schedules the update, and all setCount(count + 1) are using the same stale value of count.
So:
count + 1 is 1 (based on count = 0)
You're effectively saying setCount(1) four times

Result: count = 1 after the render
---*/

// ✅ Correct Way: Use Functional Updates
// To correctly increment the value four times, use the functional form of setCount:

const handleClickPrev = () => {
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
};

//   ✅ Output:
// This correctly updates the count to 4.

/*---
“When multiple state updates depend on the previous state, always use the functional updater form. 
Otherwise, due to batching and stale closures, all calls might use the same previous value.”
---*/

/*---
What happens behind the scene when a state is updated

🧠 Interview-Ready Summary:
“When I call a state updater like setCount, React schedules a re-render. 
It stores the new state internally, marks the component as dirty, 
and during the reconciliation phase, React compares the old and new virtual DOM to apply minimal DOM updates. 
The commit phase then applies changes and runs effects. 
React also batches updates where possible to optimize rendering.”
---*/

/*---
🔧 How to Update an Object in useState
---*/

const [user, setUser] = useState({
  name: "John",
  age: 25,
});

//   ❌ Wrong Way (Mutates state directly)
user.age = 30;
setUser(user); // ❌ Will not trigger re-render properly

/*---
Why this is wrong?

React compares object references (===) to detect changes.
If you mutate and reuse the same object, React won’t re-render.
---*/

// ✅ Correct Way (Immutable update)
setUser((prev) => ({
  ...prev,
  age: 30,
}));

/*---
Why this works?

You create a new object reference with updated values.
React sees a new object → re-renders the component.
---*/

/*---
📝 Tip for Nested Objects:
If you're updating a nested property, you must deep clone or carefully copy layers:
---*/
const [data, setData] = useState({
  user: {
    name: "John",
    address: { city: "Delhi", zip: 123456 },
  },
});

// ✅ Update nested 'city'
setData((prev) => ({
  ...prev,
  user: {
    ...prev.user,
    address: {
      ...prev.user.address,
      city: "Mumbai",
    },
  },
}));
/*---
  “To update an object in state, I never mutate it directly.
  I use the spread operator or similar methods to create a new object with the updated values. 
  This ensures React detects a state change and re-renders the component properly.”
  ---*/

//   🔧 How to Update Arrays in useState

const [items, setItems] = useState([1, 2, 3]);

// ✅ 1. Add an element
setItems((prev) => [...prev, 4]);
// Result: [1, 2, 3, 4]

// ✅ 2. Remove an element
setItems((prev) => prev.filter((item) => item !== 2));
// Result: [1, 3]

// ✅ 3. Update an element
setItems((prev) => prev.map((item) => (item === 2 ? 20 : item)));
// Result: [1, 20, 3]

//   ❌ Avoid direct mutation like:
items.push(4);
setItems(items); // ❌ No re-render

// React won't detect a change because the array reference didn’t change (items === items).

/*---
“When updating arrays in React state, I always return a new array using methods like map, filter, or the spread operator. 
This ensures React recognizes the update by reference and re-renders the component. 
Direct mutation like push or splice is avoided because React compares array references, not their internal contents.”
---*/

/*---
Lifting the state up

🔺 What is Lifting State Up in React?
Definition:

“Lifting state up” means moving state to the closest common parent of components that need to share or coordinate that state.

🧠 Why do we lift state?
In React, data flows down from parent to child via props.
When two sibling components need to share state, you lift that state up to their common ancestor, then pass it down via props.
---*/
// 🧩 Real-World Example:

function Parent() {
  const [name, setName] = useState("");

  return (
    <>
      <InputComponent onChange={setName} />
      <DisplayComponent name={name} />
    </>
  );
}

function InputComponent({ onChange }) {
  return <input onChange={(e) => onChange(e.target.value)} />;
}

function DisplayComponent({ name }) {
  return <p>Hello, {name}</p>;
}

/*---
✅ What’s happening:
name state lives in the Parent.

InputComponent updates it using the prop onChange.

DisplayComponent reads it using the prop name.

This is lifting state — because the state that originally could have been in InputComponent was moved (lifted) to Parent, so DisplayComponent can also access it.
  ---*/

/*---
  🔍 Common Interview Use Cases:
Synchronizing form inputs across multiple components
Showing/hiding components based on shared state
Passing selected data between a list and a details view
---*/

/*---
✅ Interview Summary Answer:
“Lifting state up means moving state to a common parent component so it can be shared by multiple children. 
This ensures a single source of truth and enables coordinated updates between related components. 
In React, since data flows down via props, lifting state enables better communication between siblings.”
---*/
