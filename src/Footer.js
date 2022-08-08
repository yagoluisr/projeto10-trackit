import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from 'react';
import UserContext from './components/contexts/UserContext';


export default function Footer() {
    const { progress, setProgress } = useContext(UserContext);

    return (
        <FooterBar>
            <Link to='/habitos'> <div>Hábitos</div> </Link>

            <Link to='/hoje'>
                <div>
                    <CircularProgressbar
                            value={progress}
                            text={`Hoje`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#52B6FF",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                    })}/>
                </div>
            </Link>

            <Link to='/historico'><div>Histórico</div></Link>
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

    div :nth-child(1) { 
        height: 91px;
        margin-bottom: 35px;
    }

`