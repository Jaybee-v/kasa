import React from "react"
import styled from "styled-components"

export default function HousingTitleSection({ house, tags, host }) {
    const Container = styled.div`
        max-width: 90vw;
        margin: auto;
    `
    const TagsContainer = styled.div`
        display: flex;
    `
    const Tag = styled.div`
        background: red;
        padding: 5px 25px;
        font-size: 10px;
        letter-spacing: 1px;
        color: #fff;
        margin-right: 10px;
        border-radius: 8px;
    `
    const DetailsDiv = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `
    const HostDiv = styled.div`
        display: flex;
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

    return (
        <Container>
            <h1>{house.title}</h1>
            <h4>{house.location}</h4>
            <TagsContainer>
                {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </TagsContainer>
            <DetailsDiv>
                <div>rating</div>
                <HostDiv>
                    <HostName>{host.name}</HostName>
                    <Image src={host.picture} alt="Le propriétaire" />
                </HostDiv>
            </DetailsDiv>
        </Container>
    )
}
