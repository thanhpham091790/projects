export default function Char(props) {
    const { char, isVisible, gameStatus } = props;


    return (
        <span
            className={`kwChar ${isVisible === true ? "visible" : gameStatus !== "playing" ? "visible-loss" : ""}`}
        >{char}</span>
    );
}