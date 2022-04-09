import { ChangeEvent, useEffect, useState } from 'react';
import { Post } from './types/Post'
import { PostForm } from './components/PostForm';
import { PostItem } from './components/PostItem';
import { api } from './api'

const App = () => {
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    let json = await api.getAllPosts();
    setLoading(false);
    setPost(json);


  }

  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPosts(title, body, 1);

    if (json.id) {
      alert('Um novo post foi adicionado');
    } else {
      alert('Ocorreu algum erro!')
    }
  }

  return (
    <div className="p-5">
      {loading &&
        <div>Carregando...</div>
      }

      <PostForm onAdd={handleAddPost} />

      {!loading && post.length > 0 &&
        <>
          Total de Posts: {post.length}
          <div>
            {post.map((item, index) => (
              <PostItem key={index} data={item} />
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