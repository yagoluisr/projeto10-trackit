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
    //const [done, setDone] = useState([]);
    

    useEffect(() => {
        searchHabits(token)
        .then( res => {
            console.log(res.data);
            setHabit(res.data)
        })
    }, []);


        const done = habit.filter(obj => (
            obj.done
        ))
        console.log(done);
    

        let percentage = (done.length/habit.length)*100;
        let result = Math.ceil(percentage);

    function checkHabit(checkHabit, token) {
        console.log(checkHabit);
        postCheck(checkHabit, token)
        .then( () => {
            console.log('CHECK !!');
            setHabit(habit);
        })
    }

    function uncheck(checkHabit, token) {
        console.log(token);
        console.log(checkHabit);
        postUnCheck(checkHabit, token)
        .then( () => {
            console.log('UNCHECK !!');
            setHabit(habit);
        })
    }

    

    

    return (
        <Wrapper>
            <Header />

            <DayWeek>
                <span>Segunda, 17/05</span>
                {done.length === 0 ? <p>Nenhum hábito concluído ainda</p> : <h6>{result}% dos hábitos concluídos</h6> }
                    
                
            </DayWeek>

            {habit.map(dayHabit => (
                    <HabitDay habit={dayHabit.done} seq={dayHabit.currentSequence} record={dayHabit.highestSequence} key={dayHabit.id} >
                        <span>{dayHabit.name}</span>
                        <p>Sequência atual: <strong>{dayHabit.currentSequence} dias</strong></p>
                        <p>Seu recorde: <strong>{dayHabit.highestSequence} dias</strong></p>
                        <div onClick={ dayHabit.done ? (() => uncheck(dayHabit.id, token)) : () => checkHabit(dayHabit.id, token) }><Check /></div>
                    </HabitDay>
            ))}
            <Footer />
        </Wrapper>
    )
}

// const Color = styled.h6`
//     color: ${props => props.habit ? '#8FC549' : '#666666' };
// `

const Wrapper = styled.div`
    background-color: #F2F2F2;
    padding-bottom: 100px;
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

    h6 {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #8FC549;
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
    box-sizing: border-box;

    strong {
        color: ${props => props.habit || props.seq > props.record ? '#8FC549' : '#666666' };
    }

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
        //${props => props.habit ? '#8FC549' : '#666666' };
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

const Container = styled.div`
    
`