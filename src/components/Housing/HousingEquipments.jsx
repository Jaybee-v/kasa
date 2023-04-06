import React from "react"

export default function HousingEquipments({ equipments }) {
    return (
        <ul>
            {equipments.map((equipment) => (
                <li>{equipment}</li>
            ))}
        </ul>
    )
}
