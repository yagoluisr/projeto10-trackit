import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default function Footer() {

    return (
        <FooterBar>
            <Link to='/habitos'> <div>Hábitos</div> </Link>
            <Link to='/hoje'> <div>Hoje</div> </Link>
            <div>Histórico</div>
        </FooterBar>
    )
}

const FooterBar = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    background: #FFFFFF;

    a {
        text-decoration: none;
    }

    div {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }
`