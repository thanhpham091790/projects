
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
    return (
        <div className="reviews">
            <div className="title-section">
                <h2>Your reviews</h2>
                <span>last <NavLink to="">30 days</NavLink></span>
            </div>
            <div className="rating-section">
                <p className="rating-title"><span className="big">5.0</span>  <FaStar /> overall rating</p>
                <div className="container">
                    <div className="row">
                        <span className="text">5 starts</span>
                        <div className="meter">
                            <span style={{ width: "100%" }}></span>
                        </div>
                        <span className="percent">100%</span>
                    </div>
                    <div className="row">
                        <span className="text">4 starts</span>
                        <div className="meter">
                            <span style={{ width: "50%" }}></span>
                        </div>
                        <span className="percent">50%</span>
                    </div>
                    <div className="row">
                        <span className="text">3 starts</span>
                        <div className="meter">
                            <span style={{ width: "25%" }}></span>
                        </div>
                        <span className="percent">25%</span>
                    </div>
                    <div className="row">
                        <span className="text">2 starts</span>
                        <div className="meter">
                            <span style={{ width: "75%" }}></span>
                        </div>
                        <span className="percent">75%</span>
                    </div>
                    <div className="row">
                        <span className="text">1 start</span>
                        <div className="meter">
                            <span style={{ width: "10%" }}></span>
                        </div>
                        <span className="percent">10%</span>
                    </div>
                </div>
            </div>
            <div className="review-section">
                <p className="review-title">Reviews (2)</p>
                <div className="container">
                    <div className="review">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        <div className="name">Elliot <span className="date">December 1, 2022</span></div>
                        <p>The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
                    </div>
                    <div className="review">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        <div className="name">Sandy <span className="date">November 23, 2022</span></div>
                        <p>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}