import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import KasaHeader from "../components/Shared/KasaHeader"
import { housingList } from "../data/housingList"
import ImageSlider from "../components/Housing/ImageSlider"
import HousingTitleSection from "../components/Housing/HousingTitleSection"

export default function Housing() {
    const [house, setHouse] = useState([])
    const [pictures, setPictures] = useState([])
    const [tags, setTags] = useState([])
    const [host, setHost] = useState([])
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
                }
            }
        }
        getHouse()
    }, [id])

    console.log(house)
    console.log(pictures)

    return (
        <div>
            <KasaHeader />
            <ImageSlider slides={pictures} />
            <HousingTitleSection house={house} tags={tags} host={host} />
            Housing
        </div>
    )
}
