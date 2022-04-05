import { useEffect, useState } from 'react';

const App = () => {

  const [name, setName] = useState('Ricardo');

  const handleClick = () => {
    setName('José');
  }

  useEffect(() => {
    alert('Executou');
  }, [name]);

  return (
    <div>
      Nome: {name}
      <button onClick={handleClick}>Clique aqui</button>

    </div>
  
    );
}

export default App;