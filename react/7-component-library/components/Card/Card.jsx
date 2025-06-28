export default function Card({ imgUrl, heading, text }) {
    return (
        <div className="card">
            <img src={imgUrl} alt="Icon" />
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    );
}