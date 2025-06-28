export default function Entry(props) {
    const { img, title, country, googleMapsLink, dates, text } = props;
    return (
        <div className="entry">
            <img className="img" src={img.src} alt={img.alt} />
            <div className="info">
                <p className="location">
                    <img className="img" src="./marker.png" alt="Marker" />
                    <span className="country">{country}</span>
                    <a className="maps" href={googleMapsLink}>
                        View on Google Maps
                    </a>
                </p>
                <p className="name">
                    {title}
                </p>
                <p className="date">
                    {dates}
                </p>
                <p className="intro">
                    {text}
                </p>
            </div>
        </div>
    );
}