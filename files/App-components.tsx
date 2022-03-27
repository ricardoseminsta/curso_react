import { Header } from './components/Header'
import {Photo} from './components/Photo'

const App = () => {
 
  return (
    <div>
      <Header title="Este é um exemplo"/>
      <Header title="Mais um exemplo de Header"/>
      <Header />
      olá mundo!
      <Photo legend="Google">
        <img src="https://www.google.com/google.jpg" />
      </Photo>
    </div>
  );
}
export default App;