import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://burgerbuilder-74e35-default-rtdb.europe-west1.firebasedatabase.app/',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
});

export default instance;