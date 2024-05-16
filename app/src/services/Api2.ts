import axios from "axios";

const token = 'asdfasdfasdfsdfsdf';
console.log(token);

export const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_baseURL,
    headers: {
        Authorization: 'Bearer ' + token
        
    }
})