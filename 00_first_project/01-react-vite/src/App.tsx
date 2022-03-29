import * as C from './AppStyles'
import { useState } from 'react';


const App = () => {

  const [value, setValue] = useState('#f00');

  const handleClick = () => {
    setValue('#000')
  }

  return (
    <div>
      <C.Container bgColor='#CCC'>
        Texto do componente
        <C.Button bg={value} onClick={handleClick}>Botão Grande</C.Button>
        <C.Button bg='#0f0' small>Botão Pequeno</C.Button>

      </C.Container>
      </div>
  );
}

export default App;