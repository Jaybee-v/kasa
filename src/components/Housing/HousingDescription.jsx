import React from "react"
import styled from "styled-components"

const Container = styled.div`
    color: #ff6060;
    padding: 0 35px 35px 35px;
    margin: auto;
`

export default function HousingDescription({ description }) {
    return <Container>{description}</Container>
}
