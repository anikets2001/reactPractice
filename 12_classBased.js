/*---

There are three main phases in class based component lifecycle

1.Initialization
2.Mounting
3.Updating
4.Unmounting


Let's understand them one by one

1. Initialization
When a component is first created 

constructor(props) {
  super(props);
  this.state = { count: 0 };
  this.handleClick = this.handleClick.bind(this);
}

is called for initializing state and binding event handlers

2. Mounting
Component is added to the DOM.

lifecycle methods:
i.   constructor(props)
ii.  static getDerivedStateFromProps(props, state)
iii. render()
iv.  componentDidMount()


3.Updating Phase
When the component updates due to state change or props change

lifecycle methods:
i.   static getDerivedStateFromProps(props, state);
ii.  shouldComponentUpdate()
iii. render()
iv.  getSnapshotBeforeUpdate(prevProps, prevState)
v.   componentDidUpdate(prevProps, prevState, snapshot)

4. Unmounting Phase
When the component is removed from the DOM.

lifecycle methods;
1.componentWillUnmount
---*/

/*---
🧠 BONUS: Full Lifecycle Method Summary

Phase	                    Method
Initialization	            constructor, getDerivedStateFromProps
Mounting	                constructor, getDerivedStateFromProps, render, componentDidMount
Updating	                getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate
Unmounting	                componentWillUnmount

----*/

/*---

🔁 Class vs Functional: Lifecycle Comparison

Class-Based	                                Functional (Hooks)	                            Purpose

constructor()	                            useState	                                    Initialize state
render()	                                Return JSX directly	                            Output UI
componentDidMount()	                        useEffect(() => { ... }, [])	                Run once after mount
componentDidUpdate()	                    useEffect(() => { ... }, [dependencies])	    Run on update (if deps change)
componentWillUnmount()	                    useEffect(() => { return () => {} }, [])	    Cleanup before unmount
getDerivedStateFromProps()	                useEffect + derived state logic manually	    Sync state with props
shouldComponentUpdate()	                    React.memo()	                                Performance optimization
getSnapshotBeforeUpdate()	                useRef + useLayoutEffect (rare)	                Read before DOM paints

----*/



// class Based Example;
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    componentDidMount() {
      console.log("Mounted");
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        console.log("Updated");
      }
    }
  
    componentWillUnmount() {
      console.log("Unmounted");
    }
  
    render() {
      return (
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Increment
          </button>
        </div>
      );
    }
  }

//   functional based example:
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Mounting (runs once)
  useEffect(() => {
    console.log("Mounted");

    // Unmounting
    return () => {
      console.log("Unmounted");
    };
  }, []);

  // Updating
  useEffect(() => {
    if (count !== 0) {
      console.log("Updated");
    }
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


/*---

Q.Why we should use super(props) inside the constructor
ans: super(), refers to the parent class, here React.Component
    it calls the constructor of parent class to properly set up the this context
    passing props in super makes this.props available inside the constructor, without super(props) this.props would be undefined
---*/