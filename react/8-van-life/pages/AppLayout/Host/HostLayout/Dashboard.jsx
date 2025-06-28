import { NavLink, useOutletContext } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function Dashboard() {
    const context = useOutletContext();
    const vans = context.vans;
    const loading = context.loading;
    const error = context.error;
    let contentJsx;

    if (loading) {
        contentJsx = <p><span>Loading...</span></p>
    }

    if (error) {
        contentJsx = <p><span>{error.message}</span></p>
    }

    if (vans.length) {
        contentJsx =
            <>
                <p>
                    <span>Your listed vans</span>
                    <NavLink>View all</NavLink>
                </p>
                <div className="container">
                    {vans.map(van => {
                        return (
                            <div key={van.id} className="van">
                                <img src={van.imageUrl} alt={van.name} />
                                <div>
                                    <div className="name">{van.name}</div>
                                    <div className="price">${van.price}/day</div>
                                </div>
                                <NavLink to="">Edit</NavLink>
                            </div>
                        )
                    })}
                </div>
            </>
    }


    return (
        <div className="dashboard">
            <div className="income">
                <p className="welcome">Wellcome!</p>
                <p className="text">
                    <span>Income last <NavLink to="">30 days</NavLink></span>
                    <NavLink to="">Details</NavLink>
                </p>
                <p className="number">$2,260</p>
            </div>

            <div className="score">
                <span>Review score <FaStar /> <span>5.0</span>/5</span>
                <NavLink to="">Details</NavLink>
            </div>

            <div className="vans">
                {contentJsx}
            </div>

        </div>
    )
}