import { useParams, NavLink, useLocation } from "react-router-dom";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { getVan } from "../../../api";

export default function VanDetail() {
    const params = useParams();
    const location = useLocation();
    const search = location.state?.search || "";

    const searchParams = new URLSearchParams(search);
    const type = searchParams.get("type") ? searchParams.get("type") : "all";

    const [van, setVan] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);

        getVan(params.id)
            .then(data => {
                setVan(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });

    }, [params.id]);

    if (loading) {
        return (
            <div className="van-detail-page">
                <h2 aria-live="polite">Loading...</h2>
            </div>
        );
    }


    if (error) {
        return (
            <div className="van-detail-page">
                <h2 aria-live="assertive">{error.message}</h2>
            </div>
        );
    }

    return (
        <div className="van-detail-page">
            <div className="back-to-all-vans">
                <BiArrowBack />
                <NavLink
                    to={`..?${search}`}
                    relative="path"
                >Back to {type} vans</NavLink>
            </div>

            <img src={van.imageUrl} className="van-image" />
            <button className={`van-type ${van.type}`}>{van.type}</button>
            <div className="van-name">{van.name}</div>
            <div className="van-price">{`$${van.price}`}<span>/day</span></div>
            <div className="van-description">{van.description}</div>
            <button className="van-rent">Rent this van</button>
        </div>
    );
}