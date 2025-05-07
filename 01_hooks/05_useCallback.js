/*---
    definition:

    useCallback is a React hook that returns a memoized version of a callback function, 
    so it doesn't get recreated on every render — unless its dependencies change.
---*/

/*---
🧠 Why useCallback? (Behind the scenes)
In React, functions are recreated every time a component renders. If we pass these recreated functions to child components, especially memoized child components, it causes unnecessary re-renders.

➡️ useCallback solves this by reusing the same function instance unless dependencies change — which helps:

Prevent unwanted re-renders of children.

Improve performance in large apps.

Stabilize function identity for dependency arrays (like in useEffect or React.memo).
---*/

// Syntax';
const memoizedCallback = useCallback(() => {
  // callback code
}, [dependencies]);

/*---
Real World use-case:
 ---*/

import React, { useCallback, useState } from "react";
import Child from "./Child"; // Assume this is memoized with React.memo

const Parent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // will remain same across renders

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </>
  );
};

export default Parent;

/*--
  ⚖️ useCallback vs useMemo
Aspect	useCallback	useMemo
Purpose	Memoizes a function	Memoizes a value (result of function)
Return	Returns the same function	Returns the computed result
Use case	Pass stable callback to child components	Avoid re-calculating heavy computations
---*/

/*---
🔄 When to Use useCallback
✅ Passing functions to memoized child components.

✅ Functions used inside useEffect or useMemo that are re-declared unnecessarily.

✅ Expensive or complex logic inside a callback that you don't want to recreate often.


---*/

/*---
🧪 Interview Tip: Explain with Example
“In a React app, all functions get recreated during render. 
If I pass an inline function to a memoized child (using React.memo), that child will still re-render. 
To prevent this, I wrap the function in useCallback so that it keeps the same reference unless dependencies change.”
---*/
