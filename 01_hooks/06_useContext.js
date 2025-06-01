
/*---
✅ Definition (Simple Words)
useContext is a React hook that allows a component to access shared data (context) without 
having to pass props manually through every level of the component tree.

In short:

It gives global-like state access across components.
Solves the problem of “prop drilling”.
---*/

/*---
🔍 Why useContext? (Behind the scenes)

Normally in React, data flows top-down via props.
But if deeply nested components need the same data (e.g. a user object), 
passing props manually through each level is repetitive and error-prone — this is called prop drilling.
useContext + React.createContext() lets you share such values directly, avoiding this mess.

---*/

// How to use useContext
// step1: Create the context
import {createContext, useState} from 'react'

export const ThemeContext = createContext()

// step2: Provide the context with value
const [theme, setTheme] = useState()

<ThemeContext.Provider value={{theme, setTheme}}>
    <App />
</ThemeContext.Provider>

// step3: Consume the context
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Component = () => {
  const theme = useContext(ThemeContext);
  return <div className={`theme-${theme}`}>Hello!</div>;
};


/*---
Flow Summary

1. createContext()
↓
2. <Provider value={data}>
↓
3. useContext(SomeContext) inside any component

---*/

/*--- interview questions

❓ Common Interview Questions
What problem does useContext solve?

It solves prop drilling by giving components direct access to shared data.

Does useContext cause re-renders?

Yes. If the context value changes, all components using that context will re-render.

How is useContext different from Redux or Zustand?

useContext is for static/shared state. Redux/Zustand are better for complex state logic, actions, and performance optimizations.

---*/

/*----
“useContext is a great way to access global state like auth or theme without drilling props through every level. 
But we must be careful — if the value changes, it re-renders all consumers, 
so it's not great for high-frequency updates like typing state. In such cases, 
using state management tools like Redux or Zustand is more appropriate.”




---*/


Gurugram
Front end React.js
HCL
Noida 
40%
5 days working

new delhi 
9 to 12 am


/*---
  Bountous x accolite

  monday()
  js main
  (closure, promise, execution context)
  closure what return, scope chaining, example, how to use it in currying
  setTimeout problems
  race, any, all, allSettled (usecase, polyfill)

  machine coding:
  akshay saini machine coding(youtube)

  React.js
  reconciliation, react-fiber, state management, useState, recent react-19,

  React, client

  Interview kitne de diye:
  Mouro, two problem, 

  wobot

  linkedin, instahyre, naukri
  ioT83
---*/

/*---
Bounteous Questions

1. What is the difference between useRef and createRef?
2. What are closures in JavaScript?
3. Given a string, find the number of occurrences of each character.
4. Write code to split an array of integers into two subarrays where both arrays have an equal sum.
5. Given a string, find all possible permutations of the string.
6. Given an array containing only 0s and 1s, how would you segregate the 0s and 1s with the minimum number of swaps?
7. Given an array of integers, find the maximum value in each contiguous subarray of size k. 
8. Majority Element Problem Statement
9. What is the difference between Functional Components and Class Components in React?
10. What is Redux?
11. How does Redux work?
12. What are props in React?
13. Sort 0 1 2 Problem Statement
    Given an integer array arr of size 'N' containing only 0s, 1s, and 2s, write an algorithm to sort the array.
14. Coding to find the common characters comparing 3 strings
---*/