import { ChangeEvent, useEffect, useState } from 'react';
import { Post } from './components/types/Post'

const App = () => {
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const [addTitleText, setAddTitleText] = useState('');
  const [addBodyText, setAddBodyText] = useState('');


  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setLoading(false);
    setPost(json);
  }

  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value);
  }

  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value);
  }

  const handleAddClick = async () => {
    if(addTitleText && addBodyText) {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: addTitleText,
          body: addBodyText,
          userId: 1
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      let json = await response.json();
      
      if(json.id) {
        alert('Um novo post foi adicionado');
      } else {
        alert('Ocorreu algum erro!')
      }
      
    } else {
      alert("Preencha os dados");
    }
  }

  return (
    <div className="p-5">
      {loading &&
        <div>Carregando...</div>
      }

      <fieldset className="border-2 mb-3 p-3">
        <legend>Adicionar novo post</legend>
        <input 
          onChange={handleAddTitleChange}
          value={addTitleText}
          className="block border"
          type="text" 
          placeholder="Digite um título"
         />
        <textarea
          className="block border"
          value={addBodyText}
          onChange={handleAddBodyChange}
          ></textarea>
        <button className="block border" onClick={handleAddClick}>Adicionar</button>
      </fieldset>

      {!loading && post.length > 0 &&
        <>
          Total de Posts: {post.length}
          <div>
            {post.map((item, index) => (
              <div key={index} className="my-8">
                <h4 className="font-bold">{item.title}</h4>
                <small>#{item.id} -  Usuário: {item.userId}</small>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </>
      }

      {!loading && post.length === 0 &&
        <div>Tente novamente mais tarde. não há posts para exibir</div>
      }

    </div>

  );
}

export default App;

// https://api.b7web.com.br/cinema/