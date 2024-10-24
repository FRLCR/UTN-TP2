import React from "react";
import './Login.css'


function login(e){
    e.preventDefault()
    const loginForm = new FormData(e.target)    
    const username = loginForm.get('username');
    alert(`Bienvenido ${username}`);
}
function Login() {
    return (
        <>
       <div className="login-container">
            <form className="login-form" onSubmit={login}>
                <h1>Iniciar Sesión</h1>
                <div className="form-group">
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
        </>
    )
}

export default Login;