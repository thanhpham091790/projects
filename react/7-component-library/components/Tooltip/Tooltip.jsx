
import { MdOutlineInbox } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function Tooltip({ color, style }) {

    const colors = {
        black: {
            bold: ["#C7C7C7", "#FFFFFF", "#C7C7C7", "#C7C7C7", "#262626"],
            light: ["#6B7280", "#111827", "#6B7280", "#6B7280", "#FFFFFF"]
        },
        blue: {
            bold: ["#7EA6F2", "#FFFFFF", "#D8D8D8", "#E8EDFF", "#1E40AF"],
            light: ["#1C51B9", "#1E40AF", "#1C51B9", "#1C51B9", "#E0E7FF"]
        },
        pink: {
            bold: ["#F462E6", "#FFFFFF", "#D8D8D8", "#FFE9FD", "#A9229B"],
            light: ["#C7369E", "#A9229B", "#C7369E", "#C7369E", "#FFF3FC"]
        },
        green: {
            bold: ["#C1FFCF", "#FFFFFF", "#D8D8D8", "#E3FFE9", "#47AA5D"],
            light: ["#41A557", "#137A2A", "#3C8C4E", "#3C8C4E", "#E7FFF3"]
        }
    };

    const inboxIcon = colors[color][style][0];
    const heading = colors[color][style][1];
    const closeIcon = colors[color][style][2];
    const para = colors[color][style][3];
    const backgroundColor = colors[color][style][4];

    return (
        <div className="tooltip" style={{ backgroundColor }}>
            <MdOutlineInbox style={{ color: inboxIcon, width: "24px", height: "24px" }} />
            <div className="content">
                <h3 style={{ color: heading }}>Archive notes</h3>
                <p style={{ color: para }}>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
            </div>
            <IoClose style={{ color: closeIcon, width: "24px", height: "24px" }} />
        </div >
    );
}