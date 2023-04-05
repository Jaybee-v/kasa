import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyle"
import Housing from "./pages/Housing"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/housing" element={<Housing />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
