import './styled';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404 - Not Found</h1>
            <Link to='/'>Voltar para Home</Link>
        </div>
    );
}

export default NotFound;