import { ChangeEvent, useEffect, useState } from 'react';
import { Movie } from './types/Movie'


const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMovies();
  }, []);

  
  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/a')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setMovies(json);
    })
    .catch((e) => {
      setLoading(false);
      setMovies([]);
      console.log(e);
      
    });
  }
  

  /*
  const loadMovies = async() => {
    try { 
      setLoading(true);
      let response = await fetch('https://api.b7web.com.br/cinema');
      let json = await response.json();
      setLoading(false);
      setMovies(json);
    } catch (e) {
      setLoading(false);
      setMovies([]);
      console.log(e);
      
    }
  }
  */

  return (
    <div >
       {loading && 
        <div>Carregando...</div>
      }
      {!loading && movies.length > 0 &&
      
      <>
        <button className="block bg-blue-400 p-2 rounded"
      onClick={loadMovies}>Carregar Filmes</button>

      Total de Filmes: {movies.length}

     
      <div className="grid grid-cols-6 gap-3">
        {movies.map((item, index) => (
          <div key={index}>
            <img src={item.avatar} className="w-32 block" />
              {item.titulo}
          </div>
        ))}
      </div>
      </>
      }

      {!loading && movies.length === 0 && 
        <div>Tente novamente mais tarde.</div>
      }
      
    </div>
  
    );
}

export default App;

// https://api.b7web.com.br/cinema/