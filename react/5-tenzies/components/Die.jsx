
export default function Die(props) {
    return (
        <div
            className={`die ${props.isHeld === true ? "held" : ""}`}
            onClick={() => { props.hold(props.id) }}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
        >
            {props.value}
        </div>
    );
}