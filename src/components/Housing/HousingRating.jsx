import React from "react"
import { FaStar } from "react-icons/fa"

const Star = ({ filled }) => (
    <FaStar
        style={{ color: filled ? "#FF6060" : "#E3E3E3", marginRight: "5px" }}
    />
)

export default function HousingRating({ rating }) {
    const filledStars = Math.floor(rating)
    const stars = Array(5)
        .fill()
        .map((_, i) => i < filledStars)
    return (
        <div>
            {stars.map((filled, i) => (
                <Star key={i} filled={filled} />
            ))}
        </div>
    )
}
