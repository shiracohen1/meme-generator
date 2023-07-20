import React from "react";
import MemesData from "./memesData"

export default function Meme() {
    let image;
    function randomMeme() {
        const memes = MemesData.data.memes;
        let random = Math.floor(Math.random () * memes.length);
        image = memes[random]["url"];
    }
    return (
        <div className="meme">
            <div className="inputs">
                <input type="text" className="first-input" placeholder="Top text"/>
                <input type="text" className="second-input" placeholder="Bottom text"/>
            </div>
            <button type="button" className="new-image" onClick={ randomMeme }>Get a new meme image  🖼</button>
        </div>
    )
}