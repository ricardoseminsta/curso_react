import * as C from './AppStyles'
import { useState } from 'react';


const App = () => {

  const [value, setValue] = useState('#f00');

  const handleClick = () => {
    if(value === '#f00') {
      setValue('#000')
    } else {
      setValue('#f00')
    }
    
  }

  return (
    <div>
      <C.Container bgColor='#CCC'>
        <span>Texto do componente</span>

        <a href="#" className="link">Link xavoso</a>
        <C.Button bg={value} onClick={handleClick}>Botão Grande</C.Button>
        <C.Button bg='#0f0' small>Botão Pequeno</C.Button>

      </C.Container>
      </div>
  );
}

export default App;