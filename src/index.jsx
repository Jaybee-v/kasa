import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyle"
import Housing from "./pages/Housing"
import About from "./pages/About"
import Error from "./pages/Error"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/housing" element={<Housing />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
