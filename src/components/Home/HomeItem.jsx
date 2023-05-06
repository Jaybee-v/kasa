import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    &:hover {
        box-shadow: 1px 1px 2px 5px #ff6060;
    }
`
const Image = styled.img`
    max-width: 90vw;
    min-width: 90vw;
    object-fit: cover;
    width: 100%;
    height: 230px;
    border-radius: 10px;
    @media only screen and (min-width: 768px) {
        min-width: 200px;
        min-height: 200px;
        max-width: 340px;
        max-height: 340px;
    }
    @media only screen and (min-width: 768px) {
        width: 340px;
    }
`

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    position: absolute;
    width: 100%;
    bottom: 0;
`
const Title = styled.p`
    color: #ffffff;
    font-size: 18px;
    z-index: 999;
    margin-left: 5%;
    width: 80%;
`
const BlurDiv = styled.div`
    z-index: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(255, 96, 96, 0.7) 100%
    );
    max-width: 90vw;
    border-radius: 0 0 10px 10px;
`
export default function HomeItem({ item }) {
    let navigate = useNavigate()

    return (
        // container de l'image d'un logement
        <Container onClick={() => navigate(`/housing?id=${item.id}`)}>
            <Image src={item.cover} alt={item.title} />
            <TextContainer>
                <Title>{item.title}</Title>
                <BlurDiv></BlurDiv>
            </TextContainer>
        </Container>
    )
}
