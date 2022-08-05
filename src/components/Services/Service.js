import axios from 'axios';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const { token } = useContext(UserContext);

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"

function creatConfig() {
    const config = 
    {
        headers: {Authorization: `Bearer ${token}`}
    }
    return config;
}

function register(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

function login(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function postHabit(body) {
    const config = creatConfig();
    const promise = axios.post(`${BASE_URL}/habits`, body, config );
    return promise;
}

export { register, login, postHabit }