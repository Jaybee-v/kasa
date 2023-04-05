import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
`
const Image = styled.img`
    margin-top: 15px;
    max-width: 90vw;
    width: 100%;
    height: 230px;
    background: red;
    background-repeat: no-repeat;
    object-fit: cover;
    border-radius: 8px;
`
const Title = styled.p`
    color: #ffffff;
    letter-spacing: 1px;
    position: absolute;
    bottom: 0;
    z-index: 999;
    left: 5%;
    max-width: 70%;
`
const BlurDiv = styled.div`
    z-index: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    opacity: 0.7;
    background: #333232;
    max-width: 90vw;
    border-radius: 0 0 8px 8px;
    filter: brightness(80%);
`
export default function HomeItem({ item }) {
    let navigate = useNavigate()

    return (
        <Container onClick={() => navigate(`/housing?id=${item.id}`)}>
            <Image src={item.cover} alt={item.title} />
            <Title>{item.title}</Title>
            <BlurDiv></BlurDiv>
        </Container>
    )
}
