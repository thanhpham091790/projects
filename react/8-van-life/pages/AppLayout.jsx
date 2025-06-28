
import { Outlet, NavLink } from "react-router-dom";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

export default function AppLayout() {

    const activeLink = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    };

    function handleLogout() {
        localStorage.removeItem("loggedIn");
    }

    return (
        <>
            <header className="header">
                <NavLink
                    className="home-link"
                    to="."
                >#VanLife</NavLink>

                <nav className="nav">
                    <NavLink
                        to="host"
                        style={({ isActive }) => { return isActive ? activeLink : null }}
                    >Host</NavLink>
                    <NavLink
                        to="about"
                        style={({ isActive }) => { return isActive ? activeLink : null }}
                    >About</NavLink>
                    <NavLink
                        to="vans"
                        style={({ isActive }) => { return isActive ? activeLink : null }}
                    >Vans</NavLink>
                    <NavLink
                        to="login"
                        style={({ isActive }) => { return isActive ? activeLink : null }}
                        title="Login"
                    ><FaRegUserCircle /></NavLink>
                    <NavLink
                        to="."
                        style={({ isActive }) => { return isActive ? activeLink : null }}
                        title="Logout"
                        onClick={handleLogout}
                    ><IoIosLogOut /></NavLink>

                </nav>
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                Ⓒ 2022 #VANLIFE
            </footer>
        </>
    );
}