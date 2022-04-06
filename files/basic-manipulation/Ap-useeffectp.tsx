import { ChangeEvent, useEffect, useState } from 'react';

const App = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  
  useEffect(() => {
    setFullName(`${name} ${lastName}`);
  }, [name, lastName]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  return (
    <div className="flex flex-col">
      <input type="text" placeholder="Digite seu Nome." value={name} onChange={handleNameChange} autoComplete="new-password"/>
      <input type="text" placeholder="Digite seu Sobrenome" value={lastName} onChange={handleLastNameChange} autoComplete="new-password"/>
      <p>Nome Completo: {fullName}</p>
    </div>
  
    );
}

export default App;