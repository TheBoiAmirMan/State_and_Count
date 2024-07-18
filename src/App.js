import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(0);
  function handleCountPre() {
    if (count > 1) {
      setCount((c) => c - 1);
    }
  }
  function handleCountNext() {
    setCount((c) => c + 1);
  }
  function handleStepPre() {
    if (step > 0) {
      setStep((s) => s - 5);
    }
  }
  function handleStepNext() {
    setStep((s) => s + 5);
  }
  function Counter() {
    return (
      <div className="fix">
        <button className="btn" onClick={handleCountPre}>
          -
        </button>
        <h2>count:{count}</h2>
        <button className="btn" onClick={handleCountNext}>
          +
        </button>
      </div>
    );
  }
  function Step() {
    return (
      <div className="fix">
        <button className="btn" onClick={handleStepPre}>
          -
        </button>
        <h2>step:{step}</h2>
        <button className="btn" onClick={handleStepNext}>
          +
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Counter />
      <Step />
    </div>
  );
}
