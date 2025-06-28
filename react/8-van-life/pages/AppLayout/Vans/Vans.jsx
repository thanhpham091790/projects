import React from "react";
import { getVans } from "../../../api";
import { useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";


export default function Vans() {
    const [vans, setVans] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true);
            try {
                const data = await getVans();
                setVans(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        loadVans();
    }, []);

    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type");

    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;

    function handleFilter(key, value) {
        setSearchParams(prevSearchParams => {
            if (value == null) {
                prevSearchParams.delete(key);
            } else {
                prevSearchParams.set(key, value);
            }
            return prevSearchParams;
        });

    }

    if (loading) {
        return (
            <div className="vans-page">
                <h2 aria-live="polite">Loading...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="vans-page">
                <h2 aria-live="assertive">{error.message}</h2>
            </div>
        );
    }

    return (
        <div className="vans-page">
            <h2>Explore our van options</h2>

            <div className="vans-filter">
                {[...new Set(vans.map(van => van.type))].map((type, index) => {
                    return <button
                        className={`van-type ${type} ${type === typeFilter ? "selected" : ""}`}
                        key={index}
                        onClick={() => handleFilter("type", type)}
                    >{type}</button>
                })}
                {typeFilter && <button onClick={() => handleFilter("type", null)} className="clear-filters">Clear filters</button>}

            </div>

            <div className="vans-list">
                {
                    displayedVans.map(van =>
                        <div key={van.id} className="van">
                            <NavLink to={van.id} state={{ search: searchParams.toString() }}>
                                <img src={van.imageUrl} className="van-image" />
                                <div className="name-price">
                                    <div className="van-name">{van.name}</div>
                                    <div className="van-price">{`$${van.price}`}<span>/day</span></div>
                                </div>
                                <button className={`van-type ${van.type}`}>{van.type}</button>
                            </NavLink>
                        </div>
                    )
                }
            </div>
        </div>
    );
}