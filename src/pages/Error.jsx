import React from "react"
import KasaHeader from "../components/Shared/KasaHeader"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import KasaFooter from "../components/Shared/KasaFooter"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    color: #ff6060;
    height: 75vh;
`

const Center = styled.div`
    position: fixed;
    top: 50%;
    transform: translate(0, -50%);
    @media only screen and (min-width: 600px) {
        margin: auto;
        display: flex;
        flex-direction: column;
    }
`

const StatusError = styled.div`
    margin: auto;
    width: fit-content;
    font-size: 7rem;
    font-weight: bolder;
    /* margin-right: 60px; */
    @media only screen and (min-width: 800px) {
        font-size: 10rem;
    }
`
const Text = styled.p`
    display: flex;
    max-width: 60vw;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    margin-bottom: 150px;
    @media only screen and (min-width: 600px) {
        margin-top: 50px;
        font-size: 35px;
    }
`

export default function Error() {
    let navigate = useNavigate()
    return (
        <div>
            <KasaHeader />
            <Container>
                <Center>
                    <StatusError>404</StatusError>
                    <Text>Oups! La page que vous demandez n'existe pas.</Text>
                    <p
                        style={{ margin: "auto", cursor: "pointer" }}
                        onClick={() => navigate("/")}
                    >
                        Retournez sur la page d'accueil
                    </p>
                </Center>
            </Container>
            <KasaFooter />
        </div>
    )
}
