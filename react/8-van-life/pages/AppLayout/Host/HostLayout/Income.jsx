import { NavLink } from "react-router-dom";

export default function Income() {
    return (
        <div className="income">
            <h2>Income</h2>
            <p className="period">Last <NavLink to="">30 days</NavLink></p>
            <p className="total">$2,260</p>
            <img src="/hosts/chart.png" alt="Income chart" />
            <div>
                <span className="trans">Your transactions (3)</span>
                <span className="period"> Last <NavLink to="">30 days</NavLink></span>
            </div>
            <div className="container">
                <div className="row">
                    <span className="trans-income">$720</span>
                    <span className="trans-date">1/12/22</span>
                </div>
                <div className="row">
                    <span className="trans-income">$560</span>
                    <span className="trans-date">10/11/22</span>
                </div>
                <div className="row">
                    <span className="trans-income">$980</span>
                    <span className="trans-date">23/11/22</span>
                </div>
            </div>
        </div>
    );
}