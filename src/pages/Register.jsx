import React from "react";
import './Register.css'

function register(e){
    e.preventDefault()
    const registerForm = new FormData(e.target)    
    const username = registerForm.get('username');
    alert(`Usuario Registrado con éxito: Username: ${username} Password: *******`);
}
function Register() {
    return (
        <>
       <div className="register-container">
            <form className="register-form" onSubmit={(register)}>
                <h1>Registrarse</h1>
                <div className="form-group">
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button className= "registerButton" type="submit">Registrarse</button>
            </form>
        </div>
        </>
    )
}

export default Register;