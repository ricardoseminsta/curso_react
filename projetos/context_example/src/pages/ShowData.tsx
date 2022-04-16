import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";
export const ShowData = () => {
    const{   name } = useContext(Context);

    return (
        <div>
            Pagina ShowData de {name}
            <br />
            <Link to="/">Voltar para SignUp</Link>
        </div>
    );
}