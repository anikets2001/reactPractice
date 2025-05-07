/*---
useRef is a hook that let's you store a value that doesn't trigger a re-render when updates

useRef is a React hook that lets you store a value that doesn’t cause a re-render when it changes.
It’s often used to access DOM elements or keep track of values between renders without affecting the UI.

Example in simple terms:
You can think of useRef like a small box that React doesn’t look inside when re-rendering. 
You can put anything in that box and it will stay there across renders, 
but React won’t re-render just because the box's content changed.

syntax: const myRef = useRef(initialValue)
<input ref={myRef}/>

return value: 
useRef returns a object with a single value (current)
---*/

/*---

myRef.current holds the mutable value.
Changing myRef.current does not cause a re-render.

🔍 useRef vs useState
Feature	                useRef	            useState

Triggers re-render	    ❌ No	          ✅ Yes
Holds mutable value	    ✅ Yes	          ✅ Yes
Persists across renders	✅ Yes	          ✅ Yes

Best used for	DOM refs, instance vars, flags	UI state, values that change UI

---*/

/*---
difference between useRef and createRef


🔍 Difference Between useRef and createRef
Feature	                            useRef() (used in function components)	                  createRef() (used in class components)
📍 Where it’s used	                In functional components (with hooks)	                  In class components
♻️ Persistence across renders	    ✅ Same ref object persists across re-renders	        ❌ New ref object is created on every render
🔄 Triggers re-render	            ❌ Updating .current does not re-render	                ❌ Same (modifying .current doesn’t re-render)
📦 Primary use	                    Hold DOM refs or any mutable value                     	  Hold DOM refs
🧠 React's recommendation	        Use in functional components	                          Use in class components

---*/


//useRef
import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null); // same object across renders

  const focusInput = () => {
    inputRef.current.focus();
  };

  return <input ref={inputRef} />;
}



// createRef
import { createRef } from 'react';

function MyComponent() {
  const inputRef = createRef(); // ❗ new object each render!

  const focusInput = () => {
    inputRef.current.focus();
  };

  return <input ref={inputRef} />;
}
