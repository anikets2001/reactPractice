/*---
Error boundary is a class component that catch the errors occurred in the child component tree, we wrap its child inside a component
that will catch the errors in the child component and this will prevent the whole app from crash instead we show a fallback ui.
This component uses two important methods 1.getDerivedStateFromError and 2.componentDidCatch
---*/

// Example:
// ErrorBoundary.jsx
import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error info to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}



// App.jsx
import BuggyComponent from "./BuggyComponent";

export function App() {
  return (
    <div>
      <h1>My App</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}



// BuggyComponent.jsx
import React, { useState } from "react";

function BuggyComponent() {
  const [count, setCount] = useState(0);

  if (count === 3) {
    // Simulate a crash
    throw new Error("I crashed!");
  }

  return (
    <div>
      <p>Click count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default BuggyComponent;
