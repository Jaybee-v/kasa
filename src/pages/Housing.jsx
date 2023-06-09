import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import KasaHeader from "../components/Shared/KasaHeader"
import { housingList } from "../data/housingList"
import ImageSlider from "../components/Housing/ImageSlider"
import HousingTitleSection from "../components/Housing/HousingTitleSection"
import HousingDescription from "../components/Housing/HousingDescription"
import HousingEquipments from "../components/Housing/HousingEquipments"
import styled from "styled-components"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import KasaFooter from "../components/Shared/KasaFooter"

const visible = {
    display: "block",
}

const hidden = {
    display: "none",
}
const ToggleContainer = styled.div`
    max-width: 1240px;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    @media only screen and (min-width: 1240px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
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
    margin-bottom: 20px;
    border-radius: 5px;
    max-height: 30px;
    cursor: pointer;
    @media only screen and (min-width: 1240px) {
        max-height: 40px;
        max-width: 580px;
        width: 100%;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
`

const ItemsContainer = styled.div`
    width: 90%;
    margin: auto;
`

export default function Housing() {
    const [seeDescription, setSeeDescription] = useState(false)
    const [seeEquipments, setSeeEquipments] = useState(false)
    const [house, setHouse] = useState([])
    const [pictures, setPictures] = useState([])
    const [tags, setTags] = useState([])
    const [host, setHost] = useState([])
    const [description, setDescription] = useState("")
    const [equipments, setEquipments] = useState([])
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")
    console.log(id)

    useEffect(() => {
        const getHouse = () => {
            for (let i = 0; i < housingList.length; i++) {
                if (housingList[i].id === id) {
                    setHouse(housingList[i])
                    setPictures(housingList[i].picture)
                    setTags(housingList[i].tags)
                    setHost(housingList[i].host)
                    setDescription(housingList[i].description)
                    setEquipments(housingList[i].equipments)
                }
            }
        }
        getHouse()
    }, [id])

    return (
        <>
            <KasaHeader />
            <ImageSlider slides={pictures} />
            <HousingTitleSection house={house} tags={tags} host={host} />
            <ToggleContainer>
                <Div>
                    <ToggleBar
                        onClick={() =>
                            seeDescription
                                ? setSeeDescription(false)
                                : setSeeDescription(true)
                        }
                    >
                        <p style={{ paddingLeft: "20px" }}>Description</p>
                        {seeDescription ? (
                            <span style={{ paddingRight: "10px" }}>
                                <FaChevronUp />
                            </span>
                        ) : (
                            <span style={{ paddingRight: "10px" }}>
                                <FaChevronDown />
                            </span>
                        )}
                    </ToggleBar>
                    <ItemsContainer style={seeDescription ? visible : hidden}>
                        <HousingDescription description={description} />
                    </ItemsContainer>
                </Div>
                <Div>
                    <ToggleBar
                        onClick={() =>
                            seeEquipments
                                ? setSeeEquipments(false)
                                : setSeeEquipments(true)
                        }
                    >
                        <p style={{ paddingLeft: "20px" }}>Equipements</p>
                        {seeEquipments ? (
                            <span style={{ paddingRight: "10px" }}>
                                <FaChevronUp />
                            </span>
                        ) : (
                            <span style={{ paddingRight: "10px" }}>
                                <FaChevronDown />
                            </span>
                        )}
                    </ToggleBar>
                    <ItemsContainer style={seeEquipments ? visible : hidden}>
                        <HousingEquipments equipments={equipments} />
                    </ItemsContainer>
                </Div>
            </ToggleContainer>
            <KasaFooter />
        </>
    )
}
