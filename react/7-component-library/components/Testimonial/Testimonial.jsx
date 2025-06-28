

import { RiDoubleQuotesL } from "react-icons/ri";
import { IconContext } from "react-icons";

export default function Testimonial({ imgUrl, quote, name, role }) {
    return (
        <>
            {imgUrl ?
                <IconContext.Provider value={{ color: "rgba(255, 255, 255, 0.25)", size: "3rem" }}>
                    <div className="testimonial-with-pic">
                        <img
                            srcSet="/testimonial/pic-mobile.png 343w, /testimonial/pic.png 385w"
                            sizes="(max-width: 600px) 343px, 385px"
                            src="pic.png"
                            alt="Avatar" />

                        <div className="content">
                            <RiDoubleQuotesL />
                            <div className="quote">{quote}</div>
                            <div className="footer">
                                <p className="name">{name}</p>
                                <p className="role">{role}</p>
                            </div>
                        </div>
                    </div>
                </IconContext.Provider> :
                <div className="testimonial-without-pic">
                    <img src="/testimonial/no-pic.png" alt="No avatar" />
                    <q className="quote">{quote}</q>
                    <div className="footer">
                        <span className="name">{name}</span>
                        <span className="divider">/</span>
                        <span className="role">{role}</span>
                    </div>
                </div>
            }
        </>
    );
}