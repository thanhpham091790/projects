
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Banner({ type, children }) {
    const colors = {
        success: ["#ECFDF5", "#34D399", "#065F46", "#047857"],
        warning: ["#FFFBEB", "#FBBF24", "#92400E", "#B45309"],
        error: ["#FEF2F2", "#F87171", "#92400E", "#B45309"],
        neutral: ["#EFF6FF", "#60A5FA", "#1E40AF", "#1C51B9"]
    };

    function renderBanner(type, children = "") {
        switch (type) {
            case "success":
                return (
                    <IconContext.Provider value={{ color: colors[type][1], size: "1.25em" }}>
                        <div style={{ backgroundColor: colors[type][0] }} className={`banner`}>
                            <IoIosCheckmarkCircle />
                            <div>
                                <h3 style={{ color: colors[type][2] }}>Congratulation</h3>
                                {children ? <p style={{ color: colors[type][3] }}>{children}</p> : ""}
                            </div>
                        </div>
                    </IconContext.Provider>);
            case "warning":
                return (
                    <IconContext.Provider value={{ color: colors[type][1], size: "1.25em" }}>
                        <div style={{ backgroundColor: colors[type][0] }} className={`banner`}>
                            <IoIosWarning />
                            <div>
                                <h3 style={{ color: colors[type][2] }}>Attention</h3>
                                {children ? <p style={{ color: colors[type][3] }}>{children}</p> : ""}
                            </div>
                        </div>
                    </IconContext.Provider>
                );
            case "error":
                return (
                    <IconContext.Provider value={{ color: colors[type][1], size: "1.25em" }}>
                        <div style={{ backgroundColor: colors[type][0] }} className={`banner`}>
                            <FaCircleXmark />
                            <div>
                                <h3 style={{ color: colors[type][2] }}>There is a problem with your application</h3>
                                {children ? <p style={{ color: colors[type][3] }}>{children}</p> : ""}
                            </div>
                        </div>
                    </IconContext.Provider>
                );
            case "neutral":
                return (
                    <IconContext.Provider value={{ color: colors[type][1], size: "1.25em" }}>
                        <div style={{ backgroundColor: colors[type][0] }} className={`banner`}>
                            <FaInfoCircle />
                            <div>
                                <h3 style={{ color: colors[type][2] }}>Update available</h3>
                                {children ? <p style={{ color: colors[type][3] }}>{children}</p> : ""}
                            </div>
                        </div>
                    </IconContext.Provider>
                );
        }
    }

    return renderBanner(type, children);

}