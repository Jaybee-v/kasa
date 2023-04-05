import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import styled from "styled-components"

export default function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const Container = styled.div`
        position: relative;
        height: 100%;
        display: flex;
        justify-content: center;
        border-radius: 10px;
    `
    const LeftArrow = styled.div`
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 25px;
        font-size: 25px;
        color: #fff;
        z-index: 1;
        cursor: pointer;
    `

    const RightArrow = styled.div`
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: 25px;
        font-size: 25px;
        color: #fff;
        z-index: 1;
        cursor: pointer;
    `

    const Image = styled.img`
        max-width: 90vw;
        border-radius: 10px;
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
            <LeftArrow onClick={goToPrevious}>
                <FaChevronLeft />
            </LeftArrow>
            <Image src={slides[currentIndex]} alt="/" />
            <RightArrow onClick={goToNext}>
                <FaChevronRight />
            </RightArrow>
        </Container>
    )
}
