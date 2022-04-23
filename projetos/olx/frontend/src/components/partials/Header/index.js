import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
//import { useNavigate } from 'react-router-dom';

import { isLogged, doLogout } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();
    //const navigate = useNavigate();

    const handleLogout = () => {
        doLogout();
        //navigate('/');
        window.location.href = '/';

    }

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-1">O</span>
                        <span className="logo-2">L</span>
                        <span className="logo-3">X</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li><Link to="/my-account">Minha Conta</Link></li>
                                <li><button onClick={handleLogout}>Sair</button></li>
                                <li><Link to="/post-an-ad" className="button">Poste um Anuncio</Link></li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li><Link to="/signin">Login</Link></li>
                                <li><Link to="/signup">Cadastrar</Link></li>
                                <li><Link to="/signin" className="button">Poste um Anuncio</Link></li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;