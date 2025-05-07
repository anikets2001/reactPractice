/*---
✅ What is useEffect?
useEffect is a React Hook that allows you to perform side effects in function components

syntax:
useEffect(effectFunction, dependency array?)

📦 Side Effects Examples:

Data fetching (API calls)
Subscribing to events (e.g., WebSocket, resize)
DOM manipulation
Timers (setTimeout, setInterval)
Logging
Cleanup (unsubscribing, clearing timers)
---*/

/*---

🧠 Behind the Scenes: How useEffect Works
1. After Every Render:
React runs the effect function after painting the DOM to the screen.

2. Dependency Array:
Controls when the effect should run.
React uses it to compare previous and current values.
It optimizes performance by skipping unnecessary re-runs.
---*/

/*---
Syntax Breakdown:

1. Run on Every Render

useEffect(()=>{
    console.log('Runs after every render')   
})

2.Run Once - Initial Render (On Mount)

useEffect(()=> {
    console.log('Runs only on Mount')
},[])

3.Run on Initial Render and on dependency change

useEffect(()=> {
    console.log('run on initial render and on dependency changes')
},[count])

4.Cleanup function

useEffect(()=> {
    const id = setInterval(()=>{
        console.log('tick')
    },1000)  

    return ()=> {
        clearInterval(id);
        console.log('cleanup before next run or unmount')
    }
},[])

---*/

/*---
🔄 Lifecycle Mapping (Class vs Hook)

useEffect Equivalent	                             class lifecycle method

useEffect(() => {}, [])                      ➝      componentDidMount
useEffect(() => {}, [dep])                   ➝      componentDidUpdate
useEffect(() => return () => {}, [])         ➝      componentWillUnmount
useEffect(() => return () => {}, [dep])      ➝      combination of update + cleanup logic

---*/

/*----
 When does cleanup happen?

 Before the component unmounts.
 Before running the same effect again due to dependency changes.

 useEffect(() => {
  // 1. Run the effect after render
  // 2. Run again if dependency changes

  return () => {
    // 3. Cleanup before next effect run(dependency changes) or unmount
  };
}, [dependencies]);

---*/

// Real World example of cleanup function in useEffect

useEffect(() => {
  const timerId = setInterval(() => {
    console.log("tick");
  }, 1000);

  //   cleanup function
  return () => {
    clearInterval(timerId);
    console.log("run before unmount or dependency change");
  };
}, []);
