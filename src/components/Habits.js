import styled from 'styled-components';
import Footer from '../Footer';
import Header from './Header';
import { useState, useContext, useEffect } from 'react';
import Habit from './Habit';
import { getHabits } from './Services/Service.js';

import UserContext from './contexts/UserContext';
import SmallHabit from './SmallHabit';

export default function Habits() {
    const { token } = useContext(UserContext);
    const { image } = useContext(UserContext);

    const [habits, setHabits] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [refresh, setRefresh] = useState(true);
    const [save, setSave] = useState('');

    useEffect( () => {
        getHabits(token).then(res => {
            setHabits(res.data);
        })        
    }, [refresh])
    
    return (
        <>
            <Header image={image}/>

            <MyHabits>
                <div>Meus hábitos</div>
                <Add onClick={ () => setToggle(!toggle) }>
                    <span>+</span>
                </Add>
            </MyHabits>

            <Container>
                {
                    toggle ? 
                    <Habit 
                        toggle={toggle} 
                        setToggle={setToggle} 
                        refresh={refresh} 
                        setRefresh={setRefresh}
                        save={save}
                        setSave={setSave}/> 
                    :
                    ''
                }
                
                {habits.map((habit) => (
                    <SmallHabit 
                        key={habit.id} 
                        name={habit.name} 
                        days={habit.days} 
                        habit={habit} 
                        habits={habits}
                        refresh={refresh}
                        setRefresh={setRefresh}/>
                ))}

                { habits.leng !== 0 ? 
                '' 
                : 
                <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>  }
                    
            </Container>

            <Footer />
        </>
    )
}

const MyHabits = styled.div`
    height: 75px;
    width: 100%;
    padding: 0 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 100px;
    box-sizing: border-box;
    background-color: #F2F2F2;


    div {
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    
`

const Add = styled.div`
    height: 35px;
    width: 40px;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        font-weight: 400;
        color: #ffffff;
        background: #52B6FF;
        border-radius: 5px;
}
`

const Container = styled.div`
    min-height: 54vh;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 75px;
    padding-top: 30px;
    padding-bottom: 100px;
    background-color: #f2f2f2;
    
    span:last-child {
        width: 100%;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        padding:0 18px ;
        box-sizing: border-box;
        
    }

`

