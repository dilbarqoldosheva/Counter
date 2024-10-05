import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  // count bu boshlangich qiymat 
  //setCount qiymatini ozgartirish un funksiya
  return (
    <div className="App">
      <h1>Son: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;