
export default function Button(props) {
    const { button, status, gameStatus, guessedHandler } = props;
    let isDisable;
    isDisable = gameStatus !== "playing" ? true : false;
    return (
        <button
            className={`kbChar ${status}`}
            onClick={() => guessedHandler(button)}
            disabled={isDisable}
        >{button}</button>
    );
}