import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from './Assets/TrackIt.svg'
import { useState } from 'react';
import { register } from './Services/Service.js';
import { ThreeDots } from 'react-loader-spinner';

export default function Register() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    function updatedata(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function handleRegister (e) {
		e.preventDefault();
        console.log(data)
        setLoading(!loading);
        register(data)
        .then(res => {
            console.log(res.data)
            navigate('/');
        })
        .catch(() => {
            setLoading(false);
            alert('Erro ao cadastrar, por favor tente novamente')
        })
        
    }

    return (
        <UserRegister>
            <Logo />

            <Form onSubmit={handleRegister} disabled={loading}>
                <input 
                name="email"
                placeholder="E-mail"
                type="email"
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
                
                <input 
                name="name"
                placeholder="Nome"
                type="text"
                value={data.name}
                onChange={updatedata}
                disabled={loading}
                required
                ></input>

                <input 
                name="image"
                placeholder="Foto"
                type="text"
                value={data.image}
                onChange={updatedata}
                disabled={loading}
                required
                ></input>

                <button type="submit" disabled={loading} >
                    { !loading ? "Cadastrar" : <ThreeDots
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

            <Link to='/'>
            <span>Não tem uma conta? Cadastre-se!</span>
            </Link>

        </ UserRegister>
    )
}

const UserRegister = styled.div`
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
            opacity: 0.7;
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
            opacity: 0.7;
        }
}
`



