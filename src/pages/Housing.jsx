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
`

const ItemsContainer = styled.div`
    width: 90vw;
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
    const [searchParams, setSearchParams] = useSearchParams()
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
        <div>
            <KasaHeader />
            <ImageSlider slides={pictures} />
            <HousingTitleSection house={house} tags={tags} host={host} />
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
            <KasaFooter />
        </div>
    )
}
