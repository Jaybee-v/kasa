import React, { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import styled from "styled-components"

// Mise en place du style avec styled-components
const visible = {
    display: "block",
}

const hidden = {
    display: "none",
}

const Container = styled.div`
    margin-top: 85px;
`
const ToggleBar = styled.div`
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    background: #ff6060;
    width: 90vw;
    margin-bottom: 25px;
    border-radius: 5px;
    max-height: 30px;
    cursor: pointer;
    @media only screen and (min-width: 1240px) {
        max-width: 1040px;
    }
`

const TextContainer = styled.div`
    width: fit-content;
    color: #ff6060;
    padding: 0 35px 55px 35px;
    margin: auto;
    @media only screen and (min-width: 768px) {
        padding: 0 35px 85px 35px;
        max-width: 75%;
    }
    @media only screen and (min-width: 1240px) {
        max-width: 900px;
        height: 0px;
    }
`
// Titre et contenu des collapses
const aboutContent = [
    {
        title: "Fiabilité",
        content:
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
        title: "Respect",
        content:
            "  La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        title: "Service",
        content:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
        title: "Sécurité",
        content:
            "  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
]

export default function AboutDetails() {
    const [activeIndex, setActiveIndex] = useState(null)
    return (
        // container des collaps en page a propos.
        <Container>
            {aboutContent.map((item, index) => (
                <>
                    <ToggleBar
                        onClick={() =>
                            setActiveIndex(activeIndex === index ? null : index)
                        }
                    >
                        <p style={{ paddingLeft: "20px" }}>{item.title}</p>
                        {activeIndex === index ? (
                            <span style={{ paddingRight: "10px" }}>
                                <FaChevronUp />
                            </span>
                        ) : (
                            <span style={{ paddingRight: "10px" }}>
                                <FaChevronDown />
                            </span>
                        )}
                    </ToggleBar>
                    <TextContainer
                        style={activeIndex === index ? visible : hidden}
                    >
                        {item.content}
                    </TextContainer>
                </>
            ))}
        </Container>
    )
}
