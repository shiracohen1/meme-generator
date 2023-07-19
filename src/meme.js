import React from "react";

export default function Meme() {
    return (
        <div className="meme">
            <div className="inputs">
                <input type="text" className="first-input" placeholder="Top text"/>
                <input type="text" className="second-input" placeholder="Bottom text"/>
            </div>
            <button type="button" className="new-image">Get a new meme image  🖼</button>
        </div>
    )
}