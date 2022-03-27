import { useState } from 'react';

const App = () => {
  
  const [n, setN] = useState(0);
  
  const handleMinus = () => {
    setN( n - 1 );
  }
  
  const handlePlus = () => {
    setN( n + 1 );
  }

  return (
    <div>
        <button onClick={handleMinus}>-</button>
        <div>{n}</div>
        <button onClick={handlePlus}>+</button>
    </div>
  );
}
export default App;