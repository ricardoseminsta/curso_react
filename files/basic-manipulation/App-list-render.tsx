import { People } from "./components/People";

const App = () => {
  let list = [
    {name: 'Ricardo', age: 90},
    {name: 'Joana', age: 20},
    {name: 'Vick', age: 3},
    {name: 'Cleyton', age: 2},
    {name: 'Geralda', age: 21}
  ];



  return (
    <div>
      <h2>Lista de Presença</h2>
      <ul>
        {
          list.map((item, index) =>(
            <People key={index} data={item}/>
          ))
        }
      </ul>
    </div>
  );
}

export default App;