
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Die from "./components/Die";

export default function App() {

    const [allDie, setAllDie] = useState(generateAllNewDice(10, 1, 6));
    const gameWon = allDie.every(obj => obj.isHeld === true && obj.value === allDie[0].value);
    const btnRef = useRef(null);

    useEffect(() => {
        if (gameWon) {
            btnRef.current.focus();
        }
    }, [gameWon]);


    const { width, height } = useWindowSize();

    // Generate collection of <Die /> component
    const dieJsx = allDie.map(obj => <Die key={obj.id} value={obj.value} isHeld={obj.isHeld} hold={holdDie} id={obj.id} />);


    // Generate a random integer between min and max (inclusive)

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Generate an array of "len" random integer number between "min" and "max" (inclusive)

    function generateAllNewDice(len, min, max) {
        let objArr = [];
        for (let i = 0; i < len; i++) {
            objArr.push({
                value: getRandomInt(min, max),
                isHeld: false,
                id: nanoid()
            });
        }
        return objArr;
    }

    // Generate a new array of numbers and set the allDie state to the new array
    function rollDie() {
        gameWon ?
            setAllDie(generateAllNewDice(10, 1, 6)) :
            setAllDie(prevAllDie => prevAllDie.map(obj => obj.isHeld === true ? obj : { ...obj, value: getRandomInt(1, 6) }));
    }

    // Hold die when player click on number

    function holdDie(id) {
        setAllDie(prevAllDie => prevAllDie.map(obj => obj.id === id ? { ...obj, isHeld: !obj.isHeld } : obj));
    }


    return (
        <>
            {gameWon && <Confetti width={width} height={height} />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulation! You won! Press "New Game" to start again. </p>}
            </div>
            <div className="tenzies">
                <main className="main">
                    <div className="intro">
                        <h1>Tenzies</h1>
                        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                    </div>
                    <div className="dies">
                        {dieJsx}
                    </div>
                    <button ref={btnRef} className="rollBtn" onClick={rollDie}>{gameWon ? "New Game" : "Roll"}</button>
                </main>
            </div>
        </>
    );
}