import React, { useEffect, useState } from "react"
import { housingList } from "../../data/housingList"
import HomeItem from "./HomeItem"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Container = styled.section`
    position: relative;
    width: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
`

export default function HomeItemList() {
    return (
        <Container>
            {housingList.map((item) => (
                <HomeItem item={item} key={item.id} />
            ))}
        </Container>
    )
}
