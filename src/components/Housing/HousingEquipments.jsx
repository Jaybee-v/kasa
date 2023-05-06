import React from "react"
import styled from "styled-components"

const Item = styled.li`
    list-style: none;
    color: #ff6060;
`
export default function HousingEquipments({ equipments }) {
    // listing des equipements du logement
    return (
        <ul>
            {equipments.map((equipment) => (
                <Item key={equipment}>{equipment}</Item>
            ))}
        </ul>
    )
}
