import axios from 'axios';

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"

function register(data) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, data);
    return promise;
}

function login(data) {
    const promise = axios.post(`${BASE_URL}/auth/login`, data);
    return promise;
}

export { register, login }