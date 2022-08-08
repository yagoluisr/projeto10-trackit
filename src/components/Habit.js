import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { postHabit } from './Services/Service';
import UserContext from './contexts/UserContext';
import { ThreeDots } from 'react-loader-spinner';


export default function Habit({toggle, setToggle, refresh, setRefresh, save, setSave}) {
    const { token } = useContext(UserContext);
    const { week, setWeek } =  useContext(UserContext);

    const [habitName, setHabitName] = useState(save); 
    const [loading, setLoading] = useState(false);
    console.log("Oi ANA !! ")

    function select(id) {
        if(!loading){
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
    }

    function resetWeek() {
        const resetWeek = week.map(d => {
            if(d.selected === true){
                return {
                    ...d,
                    selected: false
                }
            }
            return d
        })
        setWeek(resetWeek);
    }
    console.log(habitName);

    function handleSubmit(e) {
        e.preventDefault();

        const days = week.filter(d => (
            d.selected
        )).map(d => d.id)
           
        if(days.length !== 0){
            const body = {
                name: habitName,
                days
            }
            
            postHabit(body, token).then( () => {
                //console.log("res.data")
                resetWeek();
                setRefresh(!refresh)
                setToggle(!toggle);
                setSave('');
            })
            setLoading(!loading)
        } else {
            alert('Escolha ao menos um dia da semana.');
        }
        
        
    }   
    
    
    return (
        <Container onSubmit={handleSubmit}>

            <input 
                type="text"
                placeholder="nome do hábito"
                defaultValue={habitName}
                onChange={(e) => setHabitName(e.target.value)} 
                disabled={loading}
                required
            ></input>

            <ul>
                {week.map(d => (
                    <DaysWeek   
                        selected={d.selected} 
                        key={d.id} 
                        disabled={loading}
                        onClick={() => select(d.id)}
                        >
                        {d.day}
                    </DaysWeek>
                ))}
            </ul>

            <Buttons>
                <div onClick={ () => {setToggle(!toggle); setSave(habitName) }}>Cancelar</div>

                <button disabled={loading}>
                    { !loading ? 
                    'Salvar' 
                    :
                    <ThreeDots
                        height = "50"
                        width = "50"
                        radius = "9"
                        color = '#ffffff'
                        ariaLabel = 'three-dots-loading'     
                        wrapperStyle
                        wrapperClass
                    />}
                </button>
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
        &:disabled {
            background-color: #D4D4D4;
            opacity: 0.7;
        }
    }

    input {
        height: 45px;
        width: 95%;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        padding-left: 12px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        
    }

    input::placeholder {
        color: #DBDBDB;
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

        &:disabled {
            opacity: 0.5;
        }
    
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

        &:disabled {
            opacity: 0.7;
        }
    }
`