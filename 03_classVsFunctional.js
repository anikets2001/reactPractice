/* ----
Difference between Class Component and Functional Component

Class components uses javascript classes that extends React.Component, it uses this.state and this.setState for state updation, whereas 
functional component are javascript arrow or regular functions that manage their local state by useState hook.
Class components have lifecycle methods like componentDidMount(), componentDidUpdate(), and componentWillUnmount(),
whereas the functional component use useEffect hook for sideEffects. 

---*/

/*---
1. How are lifecycle methods handled in functional components?
Answer:
Functional components use the useEffect hook to handle lifecycle events. 
For example, 
useEffect(() => {}, []) is equivalent to componentDidMount, 
while useEffect(() => {...}, [dependencies]) acts like componentDidUpdate. 
Cleanup logic inside useEffect acts like componentWillUnmount.

---*/

/*---
componentDidMount()      -  Called once after the component is mounted, Best place for api calls                          - useEffect(()=> {}, [])
componentDidUpdate()     -  Invoked after the component is updated in the DOM.                                            - useEffect(()=> {}, [dependencies])
componentWillUnmount()   -  Cleanup tasks like removing event listeners, clear timers etc.                                - useEffect(()=> { return ()=> {} }, [])
----*/


