
import { Outlet, NavLink, useParams } from "react-router-dom";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { getVan } from "../../../../api";

export default function HostVanDetailLayout() {
    const params = useParams();

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

    const linkStyle = {
        textDecoration: "underline",
        fontWeight: "bold",
        color: "#161616"
    };

    if (loading) {
        return (
            <div className="host-van-detail">
                <h2>Loading...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="host-van-detail">
                <h2>{error.message}</h2>
            </div>
        );
    }

    return (
        <div className="host-van-detail">
            <div className="back-to-all-vans">
                <BiArrowBack />
                <NavLink
                    to=".."
                    relative="path"
                >Back to all vans</NavLink>
            </div>

            <div className="container">
                <div className="top">
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="info">
                        <button className={`van-type ${van.type}`}>{van.type}</button>
                        <p className="name">{van.name}</p>
                        <p className="price">${van.price}/day</p>
                    </div>
                </div>
                <nav className="nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? linkStyle : null}
                    >Details</NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? linkStyle : null}
                    >Pricing</NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? linkStyle : null}
                    >Photos</NavLink>
                </nav>
                <Outlet context={van} />
            </div>
        </div>
    );
}