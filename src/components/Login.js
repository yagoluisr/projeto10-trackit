import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from './Assets/TrackIt.svg'
import { login } from './Services/Service.js';
import { useState, useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import UserContext from './contexts/UserContext';

export default function Login() {
    const { token, setToken } = useContext(UserContext);
    const { image, setImage } = useContext(UserContext);

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    function updatedata(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function handleLogin (e) {
		e.preventDefault();
        setLoading(!loading);
        login(data)
        .then(res => {
            setToken(res.data.token);
            setImage(res.data.image);
            navigate('/hoje')
        })
        .catch(() => {
            setLoading(false);
            alert('E-mail e/ou senha inválido');
        })

    }

    return (
        <Page>
            <Logo />
            
            <Form onSubmit={handleLogin} disabled={loading}>
                <input 
                name="email"
                placeholder="E-mail"
                type="text"
                value={data.email}
                onChange={updatedata}
                disabled={loading}
                required
                ></input>

                <input 
                name="password"
                placeholder="Senha"
                type="password"
                value={data.password}
                onChange={updatedata}
                disabled={loading}
                required
                ></input>

                <button type="submit" disabled={loading} >
                { loading === false ? 
                "Entrar"
                : 
                <ThreeDots
                    height = "80"
                    width = "80"
                    radius = "9"
                    color = '#ffffff'
                    ariaLabel = 'three-dots-loading'     
                    wrapperStyle
                    wrapperClass
                /> }
                </button> 
                
                
            </Form>
            
            <Link to="/cadastro">
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>

        </Page>
    )
}

const Page = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;

    span {
        margin-top: 25px;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #52B6FF;
        text-decoration-line: underline;

    }
`

const Form = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 33px;
    margin-bottom: 25px;

    
    input {
        width: auto;
        height: 45px;
        padding-left: 11px;
        margin-bottom: 8px;
        background: ${ props => props.disabled ? '#D4D4D4' : '#FFFFFF' };
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        &:disabled {
        opacity: 0.6;
        }
    }

    button[type=submit] {
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #52B6FF;
        border-radius: 5px;
        font-size: 21px;
        font-weight: 400;
        line-height: 26px;
        color: #FFFFFF;
        border: 0;
        border: 1px solid #D5D5D5;
        outline: unset;

        &:disabled {
        opacity: 0.6;
        }
}
`




