import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from './Assets/TrackIt.svg'


export default function Login() {

    function login (e) {
		e.preventDefault();

    }

    return (
        <Page>
            <Logo />
            
            <Form onSubmit={login}>
                <input 
                placeholder="E-mail"
                type="text"
                ></input>

                <input 
                placeholder="Senha"
                type="password"
                ></input>

                <button type="submit">Entrar</button>
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
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        
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
}
`




