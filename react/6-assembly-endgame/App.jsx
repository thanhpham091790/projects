import React from "react";
import languageData from "./languages";
import Language from "./components/Language";
import keywordData from "./keywords";
import Char from "./components/Char";
import Button from "./components/Button";
import Confetti from "react-confetti";

export default function App() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const [languages, setLanguages] = React.useState(languageData); // isDead: true, false
    const [keyword, setKeyword] = React.useState(generateKeyword(keywordData)); // isVisible: true, false
    const [keyboard, setKeyboard] = React.useState(generateKeyboard(alphabet)); // status: "", "on", "off"
    const [guessed, setGuessed] = React.useState([]);
    const [gameStatus, setGameStatus] = React.useState("playing"); // playing, win, loss

    React.useEffect(() => {
        if (keyword.every(char => char.isVisible === true)) {
            setGameStatus("win");
        }
        if (languages.every(langObj => langObj.isDead === true)) {
            setGameStatus("loss");
        }
    }, [keyword, languages]);

    let notificationJsx = "";
    let newGameButtonJsx = "";

    if (gameStatus === "win") {
        notificationJsx = <div className="win">
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
        </div>;
        newGameButtonJsx = <button className="newGameBtn" onClick={newGameHandler}>New Game</button>;
    } else if (gameStatus === "loss") {
        notificationJsx = <div className="loss">
            <h2>Game over!</h2>
            <p>You lose! Better start learning Assembly 😭</p>
        </div>;
        newGameButtonJsx = <button className="newGameBtn" onClick={newGameHandler}>New Game</button>;
    } else if (getDeadLanguage(languages)) {
        notificationJsx = <div className="playing">
            <p>{`"Farewell ${getDeadLanguage(languages)}"🫡`}</p>
        </div>
    }

    const languageJsx = languages.map((langObj, index) => <Language key={index} {...langObj} />);
    const keywordJsx = keyword && keyword.map((charObj, index) => <Char key={index} {...charObj} gameStatus={gameStatus} />);
    const keyboardJsx = keyboard && keyboard.map((buttonObj, index) => <Button key={index} {...buttonObj} gameStatus={gameStatus} guessedHandler={guessedHandler} />);

    function newGameHandler() {
        console.log("New Game!");

        setLanguages(languageData);
        setKeyword(generateKeyword(keywordData));
        setKeyboard(generateKeyboard(alphabet));
        setGuessed([]);
        setGameStatus("playing");
    }

    function guessedHandler(button) {
        if (!guessed.includes(button)) {
            setGuessed(prevGuessed => [...prevGuessed, button]);

            if (guessedBelongKeyword(button, keyword)) {

                setKeyword(prevKeyword => {
                    return prevKeyword.map(charObj => {
                        if (charObj.char === button) {
                            return { ...charObj, isVisible: true }
                        } else {
                            return charObj;
                        }
                    });
                });

                setKeyboard(prevKeyboard => {
                    return prevKeyboard.map(buttonObj => {
                        if (buttonObj.button === button) {
                            return { ...buttonObj, status: "on" }
                        } else {
                            return buttonObj;
                        }
                    });
                });
            } else {
                setLanguages(prevLanguage => {
                    const firstIndex = prevLanguage.findIndex(langObj => langObj.isDead === false);
                    return prevLanguage.map((langObj, index) => {
                        if (index === firstIndex) {
                            return { ...langObj, isDead: true }
                        } else {
                            return langObj;
                        }
                    });
                });

                setKeyboard(prevKeyboard => {
                    return prevKeyboard.map(buttonObj => {
                        if (buttonObj.button === button) {
                            return { ...buttonObj, status: "off" }
                        } else {
                            return buttonObj;
                        }
                    });
                });
            }
        }
    }

    function guessedBelongKeyword(guessed, keyword) {
        return keyword.some(charObj => charObj.char === guessed);
    }

    function getDeadLanguage(languageList) {
        return languageList.filter(langObj => langObj.isDead === true).map(langObj => langObj.name).join(" & ");
    }

    function generateKeyboard(keybroadStr) {
        return keybroadStr.split("").map(button => ({ button, status: "" }));
    }

    function generateKeyword(keywordList) {
        const randomKeyword = keywordList[Math.floor(Math.random() * keywordList.length)];
        return randomKeyword.split("").map(char => ({ char, isVisible: false }));

    }


    return (
        <div className="assembly-endgame">
            {gameStatus === "win" && <Confetti />}
            <div className="introduction">
                <h1>Assembly: Endgame</h1>
                <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </div>
            <div className="notification">
                {notificationJsx}
            </div>
            <div className="languages">
                {languageJsx}
            </div>
            <div className="keyword">
                {keywordJsx}
            </div>
            <div className="keyboard">
                {keyboardJsx}
            </div>
            {newGameButtonJsx}
        </div>
    );
}