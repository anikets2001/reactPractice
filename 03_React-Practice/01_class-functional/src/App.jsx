import "./App.css";
import CounterClass from "./components/CounterClass";
import CounterFunction from "./components/CounterFunction";

function App() {
  return (
    <div className="parent-wrapper">
      <div className="functional-wrapper">
        <CounterFunction />
      </div>
      <div className="functional-wrapper">
        <CounterClass />
      </div>
    </div>
  );
}

export default App;
