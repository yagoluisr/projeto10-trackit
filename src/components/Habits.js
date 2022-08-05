import styled from 'styled-components';
import Footer from '../Footer';
import Header from './Header';
import MyHabits from './MyHabits';
import { useState } from 'react';
import Habit from './Habit';


export default function Habits() {
    //const [habit, setHabit] = useState([]);

    return (
        <>
            <Header />

            <Container>
                <MyHabits />
                <Habit />

                    <span>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </span>
            </Container>

            <Footer />
        </>
    )
}

const Container = styled.div`
    min-height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

