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

    return (
        <BrowserRouter>
            <UserContext.Provider value={{token, setToken, image, setImage}}>
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