
import { useOutletContext } from "react-router-dom";

export default function Pricing() {
    const van = useOutletContext();

    return (
        <div className="pricing">
            <p>${van.price}/day</p>
        </div>
    );
}