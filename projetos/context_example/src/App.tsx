import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShowData } from './pages/ShowData';
import { SignUp } from './pages/SignUp';

import { ContextProvider } from './contexts/Context';

const App = () => {
  return(
    <div>
      <ContextProvider>
        <BrowserRouter>
          <h1>Título da Página</h1>
          <hr />
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/exibir" element={<ShowData />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
