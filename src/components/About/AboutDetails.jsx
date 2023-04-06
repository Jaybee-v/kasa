import React, { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import styled from "styled-components"

const visible = {
    display: "block",
}

const hidden = {
    display: "none",
}
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
`

const TextContainer = styled.div`
    width: fit-content;
    color: #ff6060;
    padding: 0 35px 35px 35px;
    margin: auto;
`

export default function AboutDetails() {
    const [seeFiability, setSeeFiability] = useState(false)
    const [seeRespect, setSeeRespect] = useState(false)
    const [seeService, setSeeService] = useState(false)
    const [seeSecurity, setSeeSecurity] = useState(false)
    return (
        <div style={{ marginTop: "25px" }}>
            <ToggleBar
                onClick={() =>
                    seeFiability
                        ? setSeeFiability(false)
                        : setSeeFiability(true)
                }
            >
                <p style={{ paddingLeft: "20px" }}>Fiabilité</p>
                {seeFiability ? (
                    <span style={{ paddingRight: "10px" }}>
                        <FaChevronUp />
                    </span>
                ) : (
                    <span style={{ paddingRight: "10px" }}>
                        <FaChevronDown />
                    </span>
                )}
            </ToggleBar>
            <TextContainer style={seeFiability ? visible : hidden}>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
            </TextContainer>
            <ToggleBar
                onClick={() =>
                    seeRespect ? setSeeRespect(false) : setSeeRespect(true)
                }
            >
                <p style={{ paddingLeft: "20px" }}>Respect</p>
                {seeRespect ? (
                    <span style={{ paddingRight: "10px" }}>
                        <FaChevronUp />
                    </span>
                ) : (
                    <span style={{ paddingRight: "10px" }}>
                        <FaChevronDown />
                    </span>
                )}
            </ToggleBar>
            <TextContainer style={seeRespect ? visible : hidden}>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
            </TextContainer>
            <ToggleBar
                onClick={() =>
                    seeService ? setSeeService(false) : setSeeService(true)
                }
            >
                <p style={{ paddingLeft: "20px" }}>Service</p>
                {seeService ? (
                    <span style={{ paddingRight: "10px" }}>
                        <FaChevronUp />
                    </span>
                ) : (
                    <span style={{ paddingRight: "10px" }}>
                        <FaChevronDown />
                    </span>
                )}
            </ToggleBar>
            <TextContainer style={seeService ? visible : hidden}>
                Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience parfaite. N'hésitez pas à nous contacter si vous
                avez la moindre question.
            </TextContainer>
            <ToggleBar
                onClick={() =>
                    seeSecurity ? setSeeSecurity(false) : setSeeSecurity(true)
                }
            >
                <p style={{ paddingLeft: "20px" }}>Sécurité</p>
                {seeSecurity ? (
                    <span style={{ paddingRight: "10px" }}>
                        <FaChevronUp />
                    </span>
                ) : (
                    <span style={{ paddingRight: "10px" }}>
                        <FaChevronDown />
                    </span>
                )}
            </ToggleBar>
            <TextContainer style={seeSecurity ? visible : hidden}>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
            </TextContainer>
        </div>
    )
}
