import { Button } from './components/Button'

const App = () => {
  let buttonText = 'Texto do botão na variável'
  
  const buttonEvent = (txt: string) => {
    console.log('clicou no botaão '+txt);
    
  }
  return (
    <div>
      <Button text={buttonText} clickFn={buttonEvent}/>
    </div>
  );
}
export default App;