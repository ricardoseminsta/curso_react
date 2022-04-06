import { ChangeEvent, useEffect, useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState([]);

  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setMovies(json);
    });
  }

  return (
    <div>
      <button className="block bg-blue-400 p-2 rounded"
      onClick={loadMovies}>Carregar Filmes</button>

      Total de Filmes: {movies.length}
      <div>

      </div>
    </div>
  
    );
}

export default App;

// https://api.b7web.com.br/cinema/