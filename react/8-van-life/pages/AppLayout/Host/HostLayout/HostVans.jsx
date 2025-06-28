import { NavLink, useOutletContext } from "react-router-dom";
export default function HostVans() {
    const context = useOutletContext();
    const vans = context.vans;
    const loading = context.loading;
    const error = context.error;

    if (loading) {
        return (
            <div className="vans">
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="vans">
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div className="vans">
            <p>Your listed vans</p>
            <div className="container">
                {
                    vans && vans.map(van =>
                        <div key={van.id} className="van">
                            <NavLink to={van.id}>
                                <img src={van.imageUrl} alt={van.name} />
                                <div>
                                    <div className="name">{van.name}</div>
                                    <div className="price">${van.price}/day</div>
                                </div>
                            </NavLink>
                        </div>
                    )
                }
            </div >
        </div >
    );
}