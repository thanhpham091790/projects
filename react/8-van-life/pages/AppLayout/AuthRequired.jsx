import { Outlet, useOutletContext, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {
    const isLoggedIn = localStorage.getItem("loggedIn");
    const context = useOutletContext();
    const location = useLocation();

    if (!isLoggedIn) {
        return <Navigate
            to="/login"
            state={{
                message: "You must log in first (admin/admin123).",
                pathname: location.pathname
            }}
            replace={true}
        />
    }

    return <Outlet context={context} />
}