import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState();
  const [result, setResult] = useState();

  const Calculate = (value) => {
    console.log("Initial Value:", value);

    const ConverttoNum = Array.from(String(value), Number); // Convert number to array of digits
    console.log("Array of Digits:", ConverttoNum);

    const Total = ConverttoNum.reduce((sum, ele) => sum + ele, 0); // Sum of digits
    console.log("Total Sum:", Total);

    if (Total > 10) {
      return Calculate(Total); // Recursively call Calculate until Total <= 10
    }

    //setResult(Total); // Update state with the final result
    return Total;
  };

  return (
    <div className="App">
      <h1>Recursive Sum Calculator</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <button onClick={() => setResult(Calculate(input))}>Submit</button>
      <input type="number" value={result || ""} readOnly />
    </div>
  );
}
