import './styled';
import React from 'react';
import { useState, useEffect} from 'react';

import useApi from '../../helpers/OlxApi'
import { doLogin } from '../../helpers/AuthHandler';

import * as C from '../../components/MainComponents'
import { PageAreaSU } from './styled';


const SignUp = () => {
    const api = useApi();

    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [stateList, setStateList] = useState([]);
    
    const [disabled, setDisable] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=> {
        const getStates = async () => {
            const sList = await api.getStates();
            setStateList(sList)
        }
        getStates();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        
        const json = await api.login(email, password);

        if(json.error) {
            setError(json.error);
        } else {
            //doLogin(json.token, rememberPassword);
            //navigate('/');
            window.location.href = '/';
        }

        setDisable(false);

    }


    return (
        <C.Container>
            <C.Title>Cadastro</C.Title>
            <PageAreaSU>
            {error &&
                    <C.ErrorMessage>{error}</C.ErrorMessage>
                }

                <form  onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Nome Completo:</div>
                        <div className="area--input">
                            <input
                                type="email"
                                disabled={disabled}
                                value={name}
                                onChange={e=>setName(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Estado:</div>
                        <div className="area--input">
                            <select value={stateLoc} onChange={e=>setStateLoc(e.target.value)} required>
                                <option></option>
                                {stateList.map((i, k)=>
                                <option key={k} value={i._id} >{i.name}</option>
                                )}
                           </select>
                        </div>
                    </label>
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
                        <div className="area--title">Confirmar Senha:</div>
                        <div className="area--input">
                            <input
                                type="password"
                                disabled={disabled}
                                value={confirmPassword}
                                onChange={e=>setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled} >Fazer Cadastro</button>
                        </div>
                    </label>
                </form>
            </PageAreaSU>
        </C.Container>
    );
}

export default SignUp;