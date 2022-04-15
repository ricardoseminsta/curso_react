import axios from 'axios';


const http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
    getAlbuns: async () => {
        let response = await http.get('/albums');
        // let response = await axios.get(`${BASE}/posts`);
        return response.data;
    },
    getAlbum: async (id: string) => {
        let response = await http.get(`/albums/${id}`);
        // let response = await axios.get(`${BASE}/posts`);
        return response.data;
    },
    getPhotosFromAlbum: async (id: string) => {
        let response = await http.get(`/albums/${id}/photos`);
        // let response = await axios.get(`${BASE}/posts`);
        return response.data;
    },
    getPhoto: async (id: string) => {
        let response = await http.get(`/photos/${id}`);
        // let response = await axios.get(`${BASE}/posts`);
        return response.data;
    }
}