import './styled';
import React from 'react';
import { useState } from 'react';

import useApi from '../../helpers/OlxApi'
import { doLogin } from '../../helpers/AuthHandler';

import { Link, useNavigate} from 'react-router-dom';
import * as C from '../../components/MainComponents'
import { PageArea } from './styled';


const SignIn = () => {
    const api = useApi();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisable] = useState(false);
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        
        const json = await api.login(email, password);

        if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, rememberPassword);
            navigate('/');
        }

    }


    return (
        <C.Container>
            <C.Title>Login</C.Title>
            <PageArea>
                {error &&
                    <C.ErrorMessage>{error}</C.ErrorMessage>
                }

                <form  onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Email:</div>
                        <div className="area--input">
                            <input
                                type="email"
                                disabled={disabled}
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha:</div>
                        <div className="area--input">
                            <input
                                type="password"
                                disabled={disabled}
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Lembrar Senha:</div>
                        <div className="area--input">
                            <input
                                type="checkbox"
                                disabled={disabled}
                                checked={rememberPassword}
                                onChange={()=> setRememberPassword(!rememberPassword)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled} >Fazer Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </C.Container>
    );
}

export default SignIn;