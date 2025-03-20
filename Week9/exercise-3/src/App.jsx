import React from "react";
import { use } from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [in1, setIn1] = useState("");
  const [in2, setIn2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA(event){
    setIn1(event.target.value);

  }

  function onB(event){
    setIn2(event.target.value);
  }
  function compute(){
    if (isNaN(in1) || isNaN(in2) || in1 === "" || in2 === "") {
      setError(true);
      setResult("Error");
    } else {
      setError(false);
      setResult(Number(in1) + Number(in2)); // Convert input to numbers before adding
    }
  }


  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" value={in1} onChange={onA} />

      <label>B =</label>
      <input type="text" value={in2} onChange={onB} />

      <label>A + B = {compute}</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value ={result} disabled style={{ color: error ? "red" : "white" }} />
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;
