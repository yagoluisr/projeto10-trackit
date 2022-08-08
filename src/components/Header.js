import styled from 'styled-components';

export default function Header({image}) {
    return (
        <Head>
            <div>TrackIt</div>
            <img src={image} alt="imagemPerfil"/>
        </Head>
    )
}

const Head = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    padding: 0 18px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;

    div{
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
        color: #ffffff;
        font-family: 'Playball', cursive;
    }

    img {
        height: 51px;
        width: 51px;
        border-radius: 98px;
    }
`