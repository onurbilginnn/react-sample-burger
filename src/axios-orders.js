import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-696cc.firebaseio.com/'
});

export default instance;