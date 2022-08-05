import { useState, useContext } from 'react';
import styled from 'styled-components';
import { postHabit } from './Services/Service';
import UserContext from './contexts/UserContext';


export default function Habit() {
    const { token } = useContext(UserContext);

    const [habitName, setHabitName] = useState('') 

    const [week, setWeek] = useState ([
        {id: "0", day: "D", selected: false},
        {id: "1", day: "S", selected: false},
        {id: "2", day: "T", selected: false},
        {id: "3", day: "Q", selected: false},
        {id: "4", day: "Q", selected: false},
        {id: "5", day: "S", selected: false},
        {id: "6", day: "S", selected: false}
    ])

    function select (id) {
        const newWeek = week.map(d => {
            if(id === d.id){
                return {
                    ...d,
                    selected: !d.selected
                }
            }
            return d
        })
        setWeek(newWeek);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const days = week.filter(d => (
            d.selected
        )).map(d => d.id)
           

        const body = {
            name: habitName,
            days
        }

        postHabit(body, token).then( res => 
            console.log(res.data)
        )

    }
    
    
    return (
        <Container onSubmit={handleSubmit}>

            <input placeholder="nome do hábito" value={habitName} onChange={(e) => setHabitName(e.target.value)} required></input>

            <ul>
                {week.map((d, key) => (
                    <DaysWeek selected={d.selected} key={d.id} onClick={() => select(d.id)}>{d.day}</DaysWeek>
                ))}
                
            </ul>
            <Buttons>
                <div>Cancelar</div>
                <button>Salvar</button>
            </Buttons>
        </Container>
    )
}

const Container = styled.form`
    height: 180px;
    width: 90%;
    margin-bottom: 25px;
    padding: 16px 18px;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 5px;

    ul {
        display: flex;
    }

    input {
        height: 45px;
        width: 95%;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
        padding-left: 12px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }
`

export const DaysWeek = styled.li`
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.selected ? '#ffffff' : '#DBDBDB'};
        background-color: ${props => props.selected ? '#CFCFCF' : '#ffffff'};
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        margin-top: 10px;
        margin-right: 5px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    
`

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;

    div {
        height: 35px;  
        width: 84px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #52B6FF;
    }

    button {
        height: 35px;  
        width: 84px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
    }
`