import styled from 'styled-components';

export default function Header() {
    return (
        <Head>
            <div>TrackIt</div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh18zC6hawV9kIyB1Lqfaow7H-oQJFopBmCw&usqp=CAU" alt="imagemPerfil"/>
        </Head>
    )
}

const Head = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;

    div{
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
        color: #ffffff;
    }

    img {
        height: 51px;
        width: 51px;
        border-radius: 98px;
    }
`