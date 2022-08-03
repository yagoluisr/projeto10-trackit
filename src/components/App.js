import './Css/reset.css';
import './Css/style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/cadastro' element={<Register />}/>
            </Routes>
        </BrowserRouter>
    )
    
}