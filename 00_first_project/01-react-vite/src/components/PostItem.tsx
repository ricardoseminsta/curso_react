import { Post } from '../types/Post';

type Props = {
    data: Post
}

export const PostItem = ({ data }: Props) => {
    return (
        <div className="my-8">
            <h4 className="font-bold">{data.title}</h4>
            <small>#{data.id} -  Usuário: {data.userId}</small>
            <p>{data.body}</p>
        </div>
    );
}