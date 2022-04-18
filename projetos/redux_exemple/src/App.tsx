import React from 'react';
import './App.css'
//import { useSelector } from 'react-redux';
//import { RootState } from './redux/store'
import { useDispatch } from 'react-redux';
import { useAppSelector } from './redux/hooks/useAppSelector'

import { setAge, setName } from './redux/reducers/userReducer'
import { setThemeStatus, setClass } from './redux/reducers/themeReducer'

function App() {
  //const user = useSelector((state: RootState) => state.user);
  const user = useAppSelector(state => state.user);
  const theme = useAppSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch( setName(e.target.value) );
  }

  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch( setAge(parseInt(e.target.value)) );
  }

  const handleSwitchTehem = () => {   
    theme.status === 'light' ? dispatch(setThemeStatus('dark')) : dispatch(setThemeStatus('light'));
    theme.class === 'container' ? dispatch(setClass('container-dark')) : dispatch(setClass('container'));
  }

  return (
    <div className={theme.class}>
      Meu nome é: {user.name} e tenho {user.age} anos.<br />
      Tema: {theme.status}
      <hr />
      <input type="text" value={user.name}  onChange={handleNameInput}/>
      <input type="text" value={user.age}  onChange={handleAgeInput}/>
      <hr />
      <button onClick={handleSwitchTehem}>Switch Theme</button>
    </div>
  );
}

export default App;
