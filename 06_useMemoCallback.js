/*---

🧠 useMemo:
useMemo is a React Hook used to **memoize the result of a computation**.
It avoids re-computation of expensive functions unless the dependencies change.
This helps in **improving performance**, especially in cases of heavy or repeated calculations.

📌 When to use:
- When an expensive function is called on every render.
- To avoid unnecessary recalculations when the input hasn't changed.

🧠 useCallback:
useCallback is a React Hook used to **memoize the function definition**.
This prevents the function from being re-created on every render unless its dependencies change.

📌 What problem it solves:
- In React, function references change on every render, which can cause unnecessary re-renders of child components.
- useCallback helps **retain the same function reference** between renders unless dependencies change.

📌 When to use:
- When passing callback functions to child components (especially memoized ones like React.memo).
- When using dependency-sensitive hooks like useEffect.

---*/

// ✅ Example: useMemo
const result = useMemo(() => {
    console.time("execution");
    for (let i = 0; i < 100000000; i++) {
      // Simulate heavy computation
    }
    console.timeEnd("execution");
    return num * num;
  }, [num]);
  
  console.log("Result:", result);
  
  // ✅ Example: useCallback
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);
  


/*---

React.memo is a higher order component (HOC) that memoizes a functional component. 
It prevents unnecessary re-renders by shallowly comparing props — if the props haven't changed, 
React skips rendering the component.

What problem it solves: In a React app, even if a parent component re-renders, 
a child component wrapped in React.memo will not re-render unless its props change.

We should use React.memo when:
- The component is pure (output only depends on props)
- The component re-renders frequently with same props
- It receives large data or performs heavy work

---*/

// Example:

const ChildComponent = React.memo(({ onClick }) => {
    console.log('ChildComponent rendered');
    return <button onClick={onClick}>Click Me</button>;
  });
  
  const ParentComponent = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = useCallback(() => {
      console.log('Button clicked');
    }, []);
  
    return (
      <div>
        <ChildComponent onClick={handleClick} />
        <button onClick={() => setCount(c => c + 1)}>Increase Count</button>
      </div>
    );
  };
  