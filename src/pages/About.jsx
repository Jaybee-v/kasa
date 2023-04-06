import React from "react"
import KasaHeader from "../components/Shared/KasaHeader"
import AboutDetails from "../components/About/AboutDetails"
import ImageAbout from "../components/About/AboutImage"
import KasaFooter from "../components/Shared/KasaFooter"
import styled from "styled-components"

const Container = styled.div`
    min-height: 67vh;
    max-height: fit-content;
    margin-bottom: 30px;
`

export default function About() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
            }}
        >
            <KasaHeader />
            <Container>
                <ImageAbout />
                <AboutDetails />
            </Container>
            <KasaFooter />
        </div>
    )
}
