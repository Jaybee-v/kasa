import styled from "styled-components"
import HomeImage from "../components/Home/HomeImage"
import HomeItemList from "../components/Home/HomeItemList"
import KasaHeader from "../components/Shared/KasaHeader"

const Body = styled.main`
    margin: 0 !important;
`

function Home() {
    return (
        <Body>
            <KasaHeader />
            <HomeImage />
            <HomeItemList />
        </Body>
    )
}

export default Home
