import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { PhotoItem } from "../components/PhotoItem";
import { Album as AlbumType } from "../types/Album";
import { Photo } from "../types/Photo";

export const Album = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState<Photo[]>([]);
    const [albumInfo, setAlbumInfo] = useState<AlbumType>({ id: 0, title: '', userId: 0 });


    useEffect(() => {
        if (params.id) {
            loadPhotos(params.id);
            loadAlbum(params.id);
        }
    }, [])

    const loadPhotos = async (id: string) => {
        setLoading(true);
        let photos = await api.getPhotosFromAlbum(id);
        setPhoto(photos);
        setLoading(false);
    }

    const loadAlbum = async (id: string) => {
        const albumInfo = await api.getAlbum(id);
        setAlbumInfo(albumInfo);
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            <button onClick={handleBackButton}>Voltar</button>
            {loading && 'Caregando...'}
            <h3>Titulo: {albumInfo.title}</h3>
            <hr />
            {photo.map((item, index)=>(
                <PhotoItem key={index} data={item} />
            ))}
        </div>
    );
}   