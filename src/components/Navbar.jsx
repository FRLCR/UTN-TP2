import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar(){
    return (
        <header>
            <nav className="navbar">
                <div className="logo">UTN TP2</div>
                <div className="nav-links">
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    <NavLink to="/login" activeClassName="active">Iniciar Sesión</NavLink>
                    <NavLink to="/register" activeClassName="active">Registrarse</NavLink>
                    <NavLink to="/pizza" activeClassName="active">Pizza</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;