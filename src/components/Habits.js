import styled from 'styled-components';
import Footer from '../Footer';
import Header from './Header';
import MyHabits from './MyHabits';


export default function Habits() {
    return (
        <>
            <Header />

            <Container>
                <MyHabits />
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

