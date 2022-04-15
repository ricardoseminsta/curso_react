import { AlbumItem } from "../components/AlbumItem";

import { useState, useEffect } from 'react' 

import { Album } from '../types/Album';
import { api } from '../api';

export const Home = () => {

    const [album, setAlbum] = useState<Album[]>([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() =>{
        loadAlbum();
    }, [])

    const loadAlbum = async () => {
        setLoading(true);
        let album = await api.getAlbuns();
        setAlbum(album);
        setLoading(false);
    }
    return (
        <div>
            {loading && 'Caregando...'}
        {album.map((item, index) => (
            <AlbumItem title={item.title} id={item.id} key={index}/>
        ))}
        </div>
    );
}