import React from "react";

export default function Main() {

    const [meme, setMeme] = React.useState({
        topText: "Shut up",
        bottomText: "And take my money",
        imgUrl: "./memeimg.png"
    });

    const [memeData, setMemeData] = React.useState(null);


    React.useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setMemeData(data.data.memes));
    }, []);

    function updateText(event) {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;
        setMeme(prevMeme => {
            const updatedMeme = { ...prevMeme };
            updatedMeme[name] = value;
            return updatedMeme;
        });
    }

    function getRandomImgUrl() {
        const randomImgUrl = memeData[Math.floor(Math.random() * memeData.length)].url;
        setMeme(prevMeme => ({ ...prevMeme, imgUrl: randomImgUrl }));
    }


    return (
        <div className="main">
            <form className="form">
                <div className="text-input">
                    <label>
                        <span>Top text</span>
                        <input type="text" name="topText" onChange={updateText} />
                    </label>
                    <label>
                        <span>Bottom text</span>
                        <input type="text" name="bottomText" onChange={updateText} />
                    </label>
                </div>
                <button type="button" onClick={getRandomImgUrl}>Get a new meme image</button>
            </form>
            <div className="meme">
                <div className="top-text">{meme.topText}</div>
                <div className="bottom-text">{meme.bottomText}</div>
                <img src={meme.imgUrl} alt="Meme image" />
            </div>

        </div>
    );
}