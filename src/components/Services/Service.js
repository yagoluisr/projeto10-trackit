import axios from 'axios';


const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"

function creatConfig(token) {
    const config = 
    {
        headers: {Authorization: `Bearer ${token}`}
    }
    return config;
}

function register(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body );
    return promise;
}

function login(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body );
    return promise;
}

function postHabit(body, token) {
    const config = creatConfig(token);
    const promise = axios.post(`${BASE_URL}/habits`, body, config );
    return promise;
}

function getHabits(token) {
    const config = creatConfig(token);
    const promise = axios.get(`${BASE_URL}/habits`, config );
    return promise;
}

function delHabit(idHabit, token) {
    const config = creatConfig(token);
    const promise = axios.delete(`${BASE_URL}/habits/${idHabit}`, config );
    return promise;
}



export { register, login, postHabit, getHabits, delHabit }