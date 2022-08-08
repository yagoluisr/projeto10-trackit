import './Css/reset.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './contexts/UserContext.js';
import Login from './Login';
import Register from './Register';
import Habits from './Habits';
import { useState } from 'react';
import Today from './Today';
import Historic from './Historic';


export default function App() {
    const [token, setToken] = useState('');
    const [image, setImage] = useState('');
    const [progress, setProgress] = useState(0);
    const [week, setWeek] = useState([
        {id: "0", day: "D", dayWeek: "Domingo", selected: false},
        {id: "1", day: "S", dayWeek: "Segunda", selected: false},
        {id: "2", day: "T", dayWeek: "Terça", selected: false},
        {id: "3", day: "Q", dayWeek: "Quarta", selected: false},
        {id: "4", day: "Q", dayWeek: "Quinta", selected: false},
        {id: "5", day: "S", dayWeek: "Sexta", selected: false},
        {id: "6", day: "S", dayWeek: "Sábado", selected: false}
    ]);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{token, setToken, image, setImage, progress, setProgress, week, setWeek}}>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/cadastro' element={<Register />}/>
                <Route path='/habitos' element={<Habits />}/>
                <Route path='/hoje' element={<Today />}/>
                <Route path='/historico' element={<Historic />}/>
            </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
    
}