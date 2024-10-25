import React from 'react';
import './login-form.css';

function FormLogin() {
    return (
        <form> 
            <div className="div-form">
                <label className='label-form' htmlFor='email'>Email: </label>
                <input type="email" id="email" name="email" placeholder="example@mail.com" className='input-form' required />
            </div>
            
            <div className="div-form">
                <label className='label-form' htmlFor="password">Contraseña: </label>
                <input type="password" id="password" name="password" className="input-form" required />
            </div>

            <div className="actiondiv-form">
                <button type="submit" className='button-form'>Iniciar Sesión</button>
            </div>
        </form>
    );
}

export default FormLogin;
