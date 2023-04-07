import React from "react"
import KasaHeader from "../components/Shared/KasaHeader"
import AboutDetails from "../components/About/AboutDetails"
import ImageAbout from "../components/About/AboutImage"
import KasaFooter from "../components/Shared/KasaFooter"
import styled from "styled-components"

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    min-height: 67vh;
    max-height: fit-content;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    /* @media only screen and (min-width: 1200px) {
        max-width: 1240px;
    } */
`

export default function About() {
    return (
        <>
            <KasaHeader />
            <PageContainer>
                <Container>
                    <ImageAbout />
                    <AboutDetails />
                </Container>
                <KasaFooter />
            </PageContainer>
        </>
    )
}
