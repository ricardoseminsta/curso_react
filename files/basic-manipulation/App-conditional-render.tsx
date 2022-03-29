import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  
  const handleClick = () => {
   setShow( !show );
  }

  return (
    <div>
      <button onClick={handleClick}>{ show ? 'Hide' : 'Show' }</button>
      {show === true &&
      <div>
      blablabla
      </div>
      }
    </div>
  );
}

export default App;