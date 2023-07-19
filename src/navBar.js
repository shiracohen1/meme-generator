import React from "react"
import Troll from "./assets/images/face.svg"

export default function NavBar() {
    return (
        <div className="nav--style">
            <div className="logoo">
                <img src={Troll} className="face"/>
                <div className="page-title">Meme Generator</div>
            </div>
            <div className="subtitle">React Course - Project 3</div>
        </div>
    )
}