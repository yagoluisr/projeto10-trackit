import styled from 'styled-components';
import UserContext from './contexts/UserContext';
import { useContext } from 'react';
import Header from './Header';
import Footer from '../Footer';
import { DayWeek } from './Today';


export default function Historic() {
    const { image } = useContext(UserContext);

    return (
        <>
            <Header image={image}/>
            <Container>
                <DayWeek>
                    <span>Histórico</span>
                </DayWeek>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100%;
    padding-top: 80px;
    box-sizing: border-box;
    background-color: #F2F2F2;

    p:last-child {
        display: flex;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        padding:0 18px ;
        box-sizing: border-box;
    }
`