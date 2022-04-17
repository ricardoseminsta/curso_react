import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";


export const SignUp = () => {
    const{ state, dispatch } = useContext(Context);
    const [nameInput, setNameInput] = useState(state.user.name)
    const [ageInput, setAgeInput] = useState(state.user.age)

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //setNameInput(e.target.value);
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: e.target.value
            }
        });
    }

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //setAgeInput(parseInt(e.target.value));
        dispatch({
            type: 'CHANGE_AGE',
            payload: {
                age: parseInt(e.target.value)
            }
        });
    }

    const handleSave = () => {
        dispatch({
            type: 'CHANGE_NAME',
            payload: {
                name: nameInput
            }
        });
        dispatch({
            type: 'CHANGE_AGE',
            payload: {
                age: ageInput
            }
        });
    }

    return (
        <div>
            <h3>Tela SignUp Tema:({state.theme.status})</h3>
            <input
                type="text"
                placeholder="Digite um nome"
                value={state.user.name}
                onChange={handleNameChange}
            />
            <input
                type="text"
                placeholder="Digite uma idade"
                value={(state.user.age == 0) ? '' : state.user.age}
                onChange={handleAgeChange}
            />
            <button onClick={handleSave}>Salvar</button>
            <br />
            <Link to="/exibir">Ir para ShowData</Link>
        </div>
    );
}