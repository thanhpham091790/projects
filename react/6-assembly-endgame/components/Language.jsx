export default function Language(props) {
    const { name, color, backgroundColor, isDead } = props;
    return (
        <span style={{ color, backgroundColor }} className={`lang ${isDead ? "dead" : ""}`}>{name}</span>
    );
}