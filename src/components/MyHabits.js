import styled from 'styled-components';


export default function MyHabits() {
    return (
        <Abc>
            <div>Meus hábitos</div>
            <Add><span>+</span></Add>
        </Abc>
    )
}

const Abc = styled.div`
    height: 75px;
    width: 100%;
    padding: 0 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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