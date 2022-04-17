import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShowData } from './pages/ShowData';
import { SignUp } from './pages/SignUp';
import { useContext } from 'react';
import { Context } from './contexts/Context';

const App = () => {
  const {state, dispatch} = useContext(Context);

  const handleSwitchTheme = () => {
    if(state.theme.status === 'light') {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'dark',
          bgColor: '#444',
          color: '#BBB'
        }
      })
    } else {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'light',
          bgColor: '#EEE',
          color: '#444'
        }
      })
    }
  }

  return(
    <div style={{
      backgroundColor: state.theme.bgColor,
      color: state.theme.color
      }}>
        <BrowserRouter>
          <h1>Título da Página</h1>
          Tema:({state.theme.status})<br />
          <button onClick={handleSwitchTheme}>Switch Theme</button>
          <hr />
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/exibir" element={<ShowData />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
