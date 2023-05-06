import React from "react"
import { housingList } from "../../data/housingList"
import HomeItem from "./HomeItem"
import styled from "styled-components"

const Container = styled.section`
    position: relative;
    width: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (min-width: 768px) {
        max-width: 90vw;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        margin-top: 30px;
    }
    @media only screen and (min-width: 1240px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 60px;
    }
`

export default function HomeItemList() {
    return (
        // liste des logements pour l'affichage
        <Container>
            {housingList.map((item) => (
                <HomeItem item={item} key={item.id} />
            ))}
        </Container>
    )
}
