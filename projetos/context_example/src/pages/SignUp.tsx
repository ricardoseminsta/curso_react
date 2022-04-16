import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";


export const SignUp = () => {
    const{ age, name } = useContext(Context);

    return (
        <div>
            Pagina SignUp de {name} que tem {age} anos
            <br />
            <Link to="/exibir">Ir para ShowData</Link>
        </div>
    );
}