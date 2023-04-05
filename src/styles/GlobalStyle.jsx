import React from "react"
import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        margin: 0;
    }
`

export default function GlobalStyle() {
    return <StyledGlobalStyle />
}
