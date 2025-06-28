
export default function Badge({ children, badgeColor, badgeShape }) {

    const colors = {
        gray: ["#1F2937", "#F3F4F6"],
        red: ["#991B1B", "#FEE2E2"],
        yellow: ["#92400E", "#FEF3C7"],
        green: ["#065F46", "#D1FAE5"],
        blue: ["#1E40AF", "#DBEAFE"],
        indigo: ["#3730A3", "#E0E7FF"],
        purple: ["#5B21B6", "#EDE9FE"],
        pink: ["#9D174D", "#FCE7F3"],
    };

    return (
        <button
            className={`badge ${badgeShape}`}
            style={{
                color: colors[badgeColor][0],
                backgroundColor: colors[badgeColor][1]
            }}
        >{children}</button>
    );
}