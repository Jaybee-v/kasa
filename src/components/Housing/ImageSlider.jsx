import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import styled from "styled-components"

export default function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const Container = styled.div`
        width: 100%;
        min-width: 90vw;
        max-width: 90vw;
        height: 255px;
        position: relative;
        margin-right: auto;
        margin-left: auto;
        margin-top: 25px;
        display: flex;
        justify-content: center;
        border-radius: 10px;
        /* @media only screen and (min-width: 1200px) {
            max-width: 900px;
            width: 100%;
        } */
    `
    const LeftArrow = styled.div`
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 15px;
        font-size: 25px;
        color: #fff;
        z-index: 1;
        cursor: pointer;
    `

    const RightArrow = styled.div`
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: 15px;
        font-size: 25px;
        color: #fff;
        z-index: 1;
        cursor: pointer;
    `

    const Image = styled.img`
        width: 335px;
        height: 255px;
        object-fit: cover;
        border-radius: 10px;
        @media only screen and (min-width: 1240px) {
            width: 1240px;
            height: 415px;
        }
    `

    const goToPrevious = () => {
        const isFirstIndex = currentIndex === 0
        const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1

        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastIndex = currentIndex === slides.length - 1
        const newIndex = isLastIndex ? 0 : currentIndex + 1

        setCurrentIndex(newIndex)
    }

    return (
        <Container>
            {slides.length > 1 ? (
                <>
                    <LeftArrow onClick={goToPrevious}>
                        <FaChevronLeft />
                    </LeftArrow>
                    <RightArrow onClick={goToNext}>
                        <FaChevronRight />
                    </RightArrow>
                </>
            ) : null}
            <Image src={slides[currentIndex]} alt="/" />
        </Container>
    )
}
