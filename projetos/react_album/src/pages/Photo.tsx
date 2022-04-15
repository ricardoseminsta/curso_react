import { api } from "../api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Photo as PhotoType } from "../types/Photo";

export const Photo = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState<PhotoType>()

    useEffect(() => {
        if (params.id) {
            loadPhoto(params.id)
        }
    }, []);

    const loadPhoto = async (id: string) => {
        setLoading(true);
        let photo = await api.getPhoto(id);
        setPhoto(photo);
        setLoading(false);
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            {loading && 'Caregando...'}

            {photo &&
                <>
                    <button onClick={handleBackButton}>Voltar</button>
                    <p>{photo.title}</p>
                    <img src={photo.url} alt={photo.title} />
                </>

            }
        </div>
    );
}