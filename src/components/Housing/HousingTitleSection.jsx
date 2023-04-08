import React from "react"
import styled from "styled-components"
import HousingRating from "./HousingRating"

const Container = styled.div`
    max-width: 90vw;
    margin: auto;
    color: #ff6060;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    @media only screen and (min-width: 1240px) {
        max-width: 1240px;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 30px;
    }
`

const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const TagsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 1240px) {
        grid-template-columns: repeat(4, 1fr);
    }
`
const Tag = styled.div`
    display: flex;
    justify-content: center;
    background: #ff6060;
    padding: 5px 10px;
    font-size: 9px;
    /* letter-spacing: 1px; */
    color: #fff;
    min-width: fit-content;
    border-radius: 8px;
    @media only screen and (min-width: 1240px) {
        padding: 4px 5px;
    }
`
const DetailsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: 1200px) {
        flex-direction: column-reverse;
        justify-content: end;
        align-items: end;
    }
`
const HostDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const HostName = styled.p`
    font-size: 14px;
    display: flex;
    text-align: end;
    padding: 10px;
    line-height: 22px;
    max-width: 70px;
`
const Image = styled.img`
    border-radius: 50%;
    width: 35px;
    height: 35px;
`

export default function HousingTitleSection({ house, tags, host }) {
    return (
        <Container>
            <TitleDiv>
                <h2>{house.title}</h2>
                <h4>{house.location}</h4>

                <TagsContainer>
                    {tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </TagsContainer>
            </TitleDiv>
            <DetailsDiv>
                <HousingRating rating={house.rating} />
                <HostDiv>
                    <HostName>{host.name}</HostName>
                    <Image src={host.picture} alt="Le propriétaire" />
                </HostDiv>
            </DetailsDiv>
        </Container>
    )
}
