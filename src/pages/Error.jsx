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
    height: 80vh;
`

const Center = styled.div`
    position: relative;
    margin-top: 50%;
    transform: translate(0, -50%);
`

const Text = styled.p`
    display: flex;
    max-width: 60vw;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
`

export default function Error() {
    let navigate = useNavigate()
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100vh",
            }}
        >
            <KasaHeader />
            <Container>
                <Center>
                    <svg
                        width="100vw"
                        height="71"
                        viewBox="0 0 194 71"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M62.5144 54.888H51.5704V69H36.4024V54.888H0.210375V44.424L31.8904 1.8H48.2104L18.8344 42.216H36.8824V29.64H51.5704V42.216H62.5144V54.888ZM95.9659 70.152C90.3979 70.152 85.4379 68.776 81.0859 66.024C76.7339 63.272 73.3099 59.304 70.8139 54.12C68.3819 48.872 67.1659 42.632 67.1659 35.4C67.1659 28.168 68.3819 21.96 70.8139 16.776C73.3099 11.528 76.7339 7.528 81.0859 4.776C85.4379 2.024 90.3979 0.647999 95.9659 0.647999C101.534 0.647999 106.494 2.024 110.846 4.776C115.198 7.528 118.59 11.528 121.022 16.776C123.518 21.96 124.766 28.168 124.766 35.4C124.766 42.632 123.518 48.872 121.022 54.12C118.59 59.304 115.198 63.272 110.846 66.024C106.494 68.776 101.534 70.152 95.9659 70.152ZM95.9659 57C100.062 57 103.262 55.24 105.566 51.72C107.934 48.2 109.118 42.76 109.118 35.4C109.118 28.04 107.934 22.6 105.566 19.08C103.262 15.56 100.062 13.8 95.9659 13.8C91.9339 13.8 88.7339 15.56 86.3659 19.08C84.0619 22.6 82.9099 28.04 82.9099 35.4C82.9099 42.76 84.0619 48.2 86.3659 51.72C88.7339 55.24 91.9339 57 95.9659 57ZM193.858 54.888H182.914V69H167.746V54.888H131.554V44.424L163.234 1.8H179.554L150.178 42.216H168.226V29.64H182.914V42.216H193.858V54.888Z"
                            fill="#FF6060"
                        />
                    </svg>
                    <Text>Oups! La page que vous demandez n'existe pas.</Text>
                </Center>
                <p onClick={() => navigate("/")}>
                    Retournez sur la page d'accueil
                </p>
            </Container>
            <KasaFooter />
        </div>
    )
}
