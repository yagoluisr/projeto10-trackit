import './Css/reset.css';
import './Css/style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './contexts/UserContext.js';
import Login from './Login';
//import Navbar from './Navbar';
import Register from './Register';
import Habits from './Habits';
import { useState } from 'react';





export default function App() {
    const [token, setToken] = useState('');
    console.log(token);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{token, setToken}}>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/cadastro' element={<Register />}/>
                <Route path='/habitos' element={<Habits />}/>
            </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
    
}