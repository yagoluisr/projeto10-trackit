import Footer from "../Footer"
import Header from "./Header"
import styled from 'styled-components';
import { ReactComponent as Check } from './Assets/Check.svg'; 
import { useContext, useEffect, useState } from "react";
import UserContext from "./contexts/UserContext";
import { postCheck, postUnCheck, searchHabits } from "./Services/Service";


export default function Today() {
    const { token } = useContext(UserContext);

    const [habit, setHabit] = useState([])

    useEffect(() => {
        searchHabits(token)
        .then( res => {
            console.log(res.data);
            setHabit(res.data)
        })
    }, []);

    function checkHabit(checkHabit, token) {
        console.log(token);
        console.log(checkHabit);
        postCheck(checkHabit, token)
        .then( () => {
            console.log(' !!');
        })
    }

    function uncheck(checkHabit, token) {
        console.log(token);
        console.log(checkHabit);
        postUnCheck(checkHabit, token)
        .then( () => {
            console.log('FUNCIONA !!');
        })
    }


    return (
        <Wrapper>
            <Header />

            <DayWeek>
                <span>Segunda, 17/05</span>
                <p>Nenhum hábito concluído ainda</p>
            </DayWeek>

            {habit.map(dayHabit => (
                    <HabitDay habit={dayHabit.done} key={dayHabit.id}>
                        <span>{dayHabit.name}</span>
                        <p>Sequência atual: {dayHabit.currentSequence} dias</p>
                        <p>Seu recorde: {dayHabit.highestSequence} dias</p>
                        <div><Check onClick={ dayHabit.done ? (() => uncheck(dayHabit.id, token)) : () => checkHabit(dayHabit.id, token) }/></div>
                    </HabitDay>
            ))}

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
    margin: 0 auto 10px auto;
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
        background-color: ${props => props.habit ? '#8FC549' : '#BABABA'};
        border: 1px solid #E7E7E7;
        border-radius: 5px;
    }
`