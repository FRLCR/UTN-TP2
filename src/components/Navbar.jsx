import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar(){
    return (
        <header>
            <nav className="navbar">
                <div className="logo">UTN TP2</div>
                <div className="nav-links">
                    <NavLink to="/"  className={({ isActive }) => (isActive ? "active" : undefined)}>Home</NavLink>
                    <NavLink to="/login"  className={({ isActive }) => (isActive ? "active" : undefined)}>Iniciar Sesión</NavLink>
                    <NavLink to="/register"  className={({ isActive }) => (isActive ? "active" : undefined)}>Registrarse</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;