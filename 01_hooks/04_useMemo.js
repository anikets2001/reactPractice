/*----
definition
    useMemo is a react hook that prevents the re-calculation of heavy operations by storing the result of previous calculation in cache
    if the dependencies has not changed, then the cached value will be returned, otherwise the computation will done again
---*/
// Example:
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// It runs the function () => computeExpensiveValue(a, b) only when a or b changes.
// Otherwise, it returns the previous memoized result.

/*---
✅ Use useMemo when:

You have expensive (slow) calculations.
The result does not need to change on every render.
You want to prevent re-rendering of child components by passing stable props.
---*/

// Example:
const square = useMemo(() => {

  console.time("Execution Time");
  for (let i = 0; i < 1000000000; i++) {} // Heavy task
  console.timeEnd("Execution Time");

  return input ** 2;
}, [input]);


