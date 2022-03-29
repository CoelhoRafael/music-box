import axios from 'axios';

const api = axios.create({
    baseURL: "https://62423a5dd126926d0c4f2ce6.mockapi.io/music"
});

export default api;