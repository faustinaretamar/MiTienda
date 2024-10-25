import React from 'react';
import FormLogin from './pages-components/login-form';
import './login.css';

function Login() { 
    return (
        <div className="login-container">
            <h1 className="login-title">Inicia Sesión y accede a tu cuenta</h1>
            <p className="login-description">Disfruta de tus compras personalizadas, revisa tu historial de pedidos y aprovecha ofertas exclusivas para miembros.</p>
            <p className="login-promo">¿Aún no tienes cuenta? <a href="/registro" className="register-link">Regístrate aquí</a> y empieza a disfrutar de todos los beneficios.</p>
            <FormLogin />
        </div>
    );
}

export default Login;
