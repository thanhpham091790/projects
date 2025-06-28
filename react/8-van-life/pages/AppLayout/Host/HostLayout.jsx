import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { getHostVans } from "../../../api";

export default function HostLayout() {

    const [vans, setVans] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true);
            try {
                const data = await getHostVans();
                setVans(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        loadVans();
    }, []);

    const activeLink = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    };

    return (
        <div className="hosts-page">
            <nav className="host-nav">
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeLink : null}
                >Dashboard</NavLink>
                <NavLink
                    to="income"
                    style={({ isActive }) => isActive ? activeLink : null}
                >Income</NavLink>
                <NavLink
                    to="vans"
                    style={({ isActive }) => isActive ? activeLink : null}
                >Vans</NavLink>
                <NavLink
                    to="reviews"
                    style={({ isActive }) => isActive ? activeLink : null}
                >Reviews</NavLink>
            </nav>
            <Outlet context={{ vans, loading, error }} />
        </div>
    );
}