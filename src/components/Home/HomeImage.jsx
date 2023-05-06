import "../../styles/HomeImage.css"

export default function HomeImage() {
    // image de la page d'accueil avec texte
    return (
        <div className="container" style={{ position: "relative" }}>
            <div className="imageContainer"></div>
            <h1 className="imageTitle">
                Chez vous, <span> partout et ailleurs</span>
            </h1>
        </div>
    )
}
