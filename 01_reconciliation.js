/*---
Reconciliation is a process react uses to update the DOM efficiently by comparing new VDDOM with previous VDOM by using diffing algorithm.
Goal: Update only what's changed


Diffing algorithm: 
React check for element type if it changed, then only react update that,
it used keys to identify the change
It helps minimize the DOM operations


React fiber: 
It is introduced in react 16.
Old method was synchronous
React fiber prioritize the updates
Break updation into chunks
---*/