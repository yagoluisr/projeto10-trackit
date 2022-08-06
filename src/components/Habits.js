import styled from 'styled-components';
import Footer from '../Footer';
import Header from './Header';
import MyHabits from './MyHabits';
import { useState, useContext, useEffect } from 'react';
import Habit from './Habit';
import { getHabits } from './Services/Service.js';


import UserContext from './contexts/UserContext';
import SmallHabit from './SmallHabit';

export default function Habits() {
    const { token } = useContext(UserContext);
    const [habits, setHabits] = useState([]);

    useEffect( () => {
        getHabits(token).then(res => {
            console.log(res.data);
            setHabits(res.data);
        })        
    }, [])
    

    return (
        <>
            <Header />

            <Container>
                <MyHabits />
                <Habit />
                
                {habits.map((habit) => (
                    <SmallHabit key={habit.id} name={habit.name} days={habit.days} habit={habit} habits={habits}/>
                ))}

                    <span>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </span>
            </Container>

            <Footer />
        </>
    )
}

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 100px;
    background-color: #f2f2f2;
    
    span {
        width: 100%;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        padding:0 18px ;
        box-sizing: border-box;
        
    }

`

