import { useState } from "react";
import { Button } from "./components/Button";

const App = () => {
  
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked( !clicked );
  }

  return (
    <div>
      <Button />
    </div>
  );
}

export default App;