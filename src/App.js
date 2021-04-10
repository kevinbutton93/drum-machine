import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(0)



  return (
    <div>
      <h1>Counter Test</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1) }>Increment</button>
    </div>
  );
}

export default App;
 