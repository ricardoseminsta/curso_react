import { useParams, useNavigate } from "react-router-dom";

export const AboutItem = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }

    const handleHomeButton = () => {
        navigate('/');
    }

    return (
        <div>
            Página Sobre {params.slug?.toUpperCase()} ({params.slug?.length} Letras)
            <hr />
            <button onClick={handleBackButton}>Voltar</button>
            <button onClick={handleHomeButton}>Home</button>

        </div>
    );
}