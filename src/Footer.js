import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterBar>
            <div>Hábitos</div>
            <div>Hoje</div>
            <div>Histórico</div>
        </FooterBar>
    )
}

const FooterBar = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    background: #FFFFFF;

    div {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }
`