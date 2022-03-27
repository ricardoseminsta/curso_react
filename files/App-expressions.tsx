const App = () => {
  
  let n1: number =10;
  let n2: number = 3;
  let name: string = 'Ricardo';
  let lastName: string = 'Emanuel';
  let url: string = 'http://google.com'

  function somar(n1: number, n2: number): number {
    return n1 + n2;
  }

  return (
    <div>Olá {`${name.toUpperCase()} ${lastName.toUpperCase()}`} tudo bem? sua soma: {somar(n1, n2) + n1}<br/>
    <a href={url}>Clique aqui</a>
    </div>
    
  );
}
export default App;