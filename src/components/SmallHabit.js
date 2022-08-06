import { useState, useContext } from 'react';
import styled from 'styled-components';
import { DaysWeek } from './Habit';
import { ReactComponent as Bin } from './Assets/Bin.svg';
import { delHabit } from './Services/Service';
import UserContext from './contexts/UserContext';


export default function SmallHabit({name, habit}) {
    const { token } = useContext(UserContext);

    const week = [
        {id: 0, day: "D", selected: false},
        {id: 1, day: "S", selected: false},
        {id: 2, day: "T", selected: false},
        {id: 3, day: "Q", selected: false},
        {id: 4, day: "Q", selected: false},
        {id: 5, day: "S", selected: false},
        {id: 6, day: "S", selected: false}
    ]

    
    const idHabit = habit.id;
    //console.log(idHabit);

        const newWeek = week.map(d => {
            if(habit.days.includes(d.id)){
                return {
                    ...d,
                    selected: true
                }
            }
            return d;
        })

        function deleteHabit() {
            delHabit(idHabit, token)
            .then( res => {
                console.log(res.data);
            })
        }
        
    return (
        <Wrapper>
                <span>{name}</span>
            <Bin onClick={ deleteHabit } />
            <ul>
                {newWeek.map(d => (
                    <DaysWeek selected={d.selected} key={d.id} >{d.day}</DaysWeek>
                ))}
            </ul>
        
        </Wrapper>
    )
}


const Wrapper = styled.div`
    height: 91px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    position: relative;

    span {
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }

    ul {
        display: flex;
    }


    svg {
        position: absolute;
        right: 10px;
        top: 10px;
    }

`

