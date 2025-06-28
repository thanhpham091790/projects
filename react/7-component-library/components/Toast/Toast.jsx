import { FaRegCheckCircle } from "react-icons/fa";
import { PiWarningCircleLight } from "react-icons/pi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { RxCrossCircled } from "react-icons/rx";

export default function Toast({ type }) {
    let types = {
        success: {
            icon: <FaRegCheckCircle style={{ color: "#34D399" }} />,
            heading: "Success",
            para: "Your work has been saved",
            colors: ["#065F46", "#047857", "#ECFDF5"]
        },
        warning: {
            icon: <PiWarningCircleLight style={{ color: "#FBBF24" }} />,
            heading: "Warning",
            para: "A network error was detected",
            colors: ["#92400E", "#B45309", "#FFFBEB"]
        },
        information: {
            icon: <HiOutlineInformationCircle style={{ color: "#60A5FA" }} />,
            heading: "Information",
            para: "Please read updated information",
            colors: ["#1E40AF", "#1C51B9", "#EFF6FF"]
        },
        error: {
            icon: <RxCrossCircled style={{ color: "#F87171" }} />,
            heading: "Error",
            para: "Please re-save your work again",
            colors: ["#92400E", "#B45309", "#FEF2F2"]
        },
    }



    return (
        <div className="toast" style={{ backgroundColor: types[type].colors[2] }}>
            {types[type].icon}
            <div className="content">
                <h3 style={{ color: types[type].colors[0] }}>{types[type].heading}</h3>
                <p style={{ color: types[type].colors[1] }}>{types[type].para}</p>
            </div>
        </div>
    );
}