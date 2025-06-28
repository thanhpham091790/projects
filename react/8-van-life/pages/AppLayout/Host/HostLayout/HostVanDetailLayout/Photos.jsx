

import { useOutletContext } from "react-router-dom";

export default function Photos() {
    const van = useOutletContext();

    return (
        <div className="photos">
            <img src={van.imageUrl} alt={van.name} />
        </div>
    );
}