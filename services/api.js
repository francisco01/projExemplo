import axios from 'axios';
import { create } from 'apisauce';


const api = axios.create({
    baseURL: '•	https://productsales-api.herokuapp.com'

});

export default api;