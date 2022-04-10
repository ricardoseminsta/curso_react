import axios from 'axios';


const http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
    getAllPosts: async () => {
        let response = await http.get('/posts');
        // let response = await axios.get(`${BASE}/posts`);
        return response.data;

    },
    addNewPosts: async (title: string, body: string, userId: number) => {
        let response = await http.post('/posts', {
            title, body, userId
        });

        return response.data;
    }
}