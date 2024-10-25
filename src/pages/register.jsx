import React from 'react';
import FormRegister from './pages-components/register-form';
import './register.css'
import { Link } from 'react-router-dom';

function Register() { 
    return (
        <div className="register-container">
            <h1 className="register-title">Regístrate para disfrutar de una experiencia personalizada en nuestra tienda</h1>
            <p className="register-description">Accede a ofertas exclusivas, guarda tus productos favoritos y compra de manera rápida y segura. ¡Es rápido y fácil!</p>
            <p className="register-promo">Solo te tomará un par de minutos para crear tu cuenta. ¡Únete a nuestra comunidad de compradores hoy mismo!</p>
            <FormRegister />
            <p className="login-prompt">¿Ya tienes una cuenta? <Link to="/inicio-sesion" className="login-link">Inicia sesión aquí</Link>. </p>
           
        </div>
    );
}

export default Register;

