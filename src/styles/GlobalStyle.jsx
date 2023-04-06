import React from "react"
import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`

    * {
      font-family: 'Montserrat';
    }

    body {
        margin: 0;
        display: flex;
        flex-direction: column;
        justif-content: space-between;
        height: 100%;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 300;
    }
    @media only screen and (min-width: 1240px) {
        body{
            max-width: 1240px;
            margin: auto;
        }
    }

`

export default function GlobalStyle() {
    return <StyledGlobalStyle />
}
