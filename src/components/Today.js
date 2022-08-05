import Footer from "../Footer"
import Header from "./Header"
import styled from 'styled-components';
import { ReactComponent as Check } from './Assets/Check.svg'; 


export default function Today() {
    return (
        <Wrapper>
            <Header />

            <DayWeek>
                <span>Segunda, 17/05</span>
                <p>Nenhum hábito concluído ainda</p>
            </DayWeek>

            <HabitDay>
                <span>Ler 1 capítulo de livro</span>
                <p>Sequência atual: 3 dias</p>
                <p>Seu recorde: 5 dias</p>

                <div><Check /></div>
            </HabitDay>
            
            <Footer />
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    background-color: #F2F2F2;
    height: 100vh;
`

const DayWeek = styled.div`
    height: 80px;
    width: 100%;
    padding: 18px;
    box-sizing: border-box;


    span {
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #BABABA;
    }
`

const HabitDay = styled.div`
    height: 94px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 14px;
    border-radius: 5px;
    margin: 0 auto ;
    background-color: #FFFFFF;
    position: relative;

    span {
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 8px;
        word-wrap: break-word;
        color: #666666;
    }

    p {
        font-weight: 400;
        font-size: 13px;
        line-height: 17px;
        color: #666666;
    }

    div {
        height: 69px;
        width: 69px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 15px;
        background: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
    }
`