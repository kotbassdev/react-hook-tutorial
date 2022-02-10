import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div>
        <p>You Clicked {count} times</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Click Me.</button>
      </div>
    </React.Fragment>
  );
}
