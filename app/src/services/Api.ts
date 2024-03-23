import axios from "axios";
import dotenv from 'dotenv'


const api =  axios.create({
    baseURL: 'http://localhost:3000'
})

export default api