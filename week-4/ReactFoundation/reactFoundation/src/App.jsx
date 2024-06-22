import { useState } from "react";

function App() {
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
} 
export default App;
