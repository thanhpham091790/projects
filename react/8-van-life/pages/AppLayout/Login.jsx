import { NavLink, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { loginUser } from "../../api";

export default function Login() {
    const [loginData, setLoginData] = React.useState({ username: "", password: "" });
    const [status, setStatus] = React.useState("idle");
    const [error, setError] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const message = location.state?.message || "";
    const isDisabled = status === "submitting" ? true : false;



    function handleSubmit(event) {
        event.preventDefault();
        setStatus("submitting");
        loginUser(loginData)
            .then(data => {
                data.user && localStorage.setItem("loggedIn", true);
                setError(false);
                location.state?.pathname ?
                    navigate(`${location.state.pathname}`, { replace: true }) :
                    navigate("/host", { replace: true });
            })
            .catch(err => {
                console.log(err);
                setError(err)
            })
            .finally(() => setStatus("idle"));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setLoginData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div className="login-page">
            {message && <div className="required">{message}</div>}
            <h2>Sign in to your account</h2>
            {error && <div className="error">{error.message}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={loginData.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                />
                <button type="submit" disabled={isDisabled}> Sign in</button>
            </form>
            <p>Don't have an account? <NavLink to="">Create one now</NavLink></p>
        </div>
    );
}