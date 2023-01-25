import React, { useState } from "react";
import "./App.css";

export default function App() {
  let [count, setCount] = useState(0);

  function plusnumber() {
    count += 1;
    setCount(count);
  }

  function minusnumber() {
    count -= 1;
    setCount(count);
  }

  return (
    <div className="App">
      <h1 style={{ color: "blue", fontSize: "100px" }}>{count}</h1>
      <button className="button-plus" onClick={plusnumber}>
        +
      </button>
      <button className="button-minus" onClick={minusnumber}>
        -
      </button>
    </div>
  );
}
