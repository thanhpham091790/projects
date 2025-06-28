import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Testimonial from "./components/Testimonial/Testimonial";
import Tooltip from "./components/Tooltip/Tooltip";
import Toast from "./components/Toast/Toast"

export default function App() {
    // Toast
    const toastTypes = ["success", "warning", "information", "error"];

    // Tooltip
    const tooltipStyles = ["bold", "light"];
    const tooltipColors = ["black", "blue", "pink", "green"];

    // Testimonial
    const TestimonialWithPic = {
        imgUrl: "/testimonial/pic.png",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.",
        name: "May Andersons",
        role: "Workcation, CTO"
    };

    const TestimonialWithoutPic = {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
        name: "May Andersons",
        role: "Workcation, CTO"
    };

    // Card
    const cardInfo = {
        imgUrl: "/card/icon1.png",
        heading: "Easy Deployment",
        text: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
    };

    // Banner
    const bannerTypes = ["success", "warning", "error", "neutral"];
    const bannerTextandTypes = [
        { type: "success", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." },
        { type: "warning", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." },
        { type: "error", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." },
        { type: "neutral", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." },
    ];

    // Badge
    const badgeShapes = ["square", "pill"];
    const badgeColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];


    return (
        <>
            {/* Toast */}
            <div className="toasts">
                <h2>Toast Component</h2>
                <div className="row">
                    {
                        toastTypes.map(toastType => {
                            return <Toast key={toastType} type={toastType} />
                        })
                    }
                </div>
            </div>

            {/* Tooltip */}
            <div className="tooltips">
                <h2>Tooltip Component</h2>
                {
                    tooltipColors.map(
                        tooltipColor => {
                            return (
                                <div className="row" key={tooltipColor}>
                                    {
                                        tooltipStyles.map(
                                            tooltipStyle => {
                                                return <Tooltip key={`${tooltipColor}-${tooltipStyle}`} color={tooltipColor} style={tooltipStyle} />
                                            }
                                        )
                                    }
                                </div>
                            );
                        }
                    )
                }
            </div>

            {/* Testimonial */}
            <div className="testimonials">
                <h2>Testimonial Component</h2>
                <Testimonial {...TestimonialWithPic} />
                <Testimonial {...TestimonialWithoutPic} />
            </div>

            {/* Card */}
            <div className="cards">
                <h2>Card Component</h2>
                <Card {...cardInfo} />
            </div>

            {/* Banner */}
            <div className="banners">
                <h2>Banner Component</h2>
                <div className="container">
                    {bannerTypes.map(bannerType => <Banner key={bannerType} type={bannerType} />)}
                </div>
                <div className="container">
                    {bannerTextandTypes.map(bannerTextandType => <Banner key={bannerTextandType.type} type={bannerTextandType.type}>{bannerTextandType.text}</Banner>)}
                </div>
            </div>

            {/* Badges */}
            <div className="badges">
                <h2>Badge Component</h2>
                {badgeShapes.map(badgeShape => {
                    return (
                        <div key={badgeShape} className="row">
                            {badgeColors.map(badgeColor => {
                                return (
                                    <Badge
                                        badgeColor={badgeColor}
                                        badgeShape={badgeShape}
                                        key={`${badgeColor}-${badgeShape}`}
                                    >
                                        Badge
                                    </Badge>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </>

    );
}