import React, { useState } from "react";
import { auth } from "../../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./login-form.css";

function FormLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      // Autenticar al usuario con Firebase
      await signInWithEmailAndPassword(auth, email, password);
      setError(""); // Limpiar errores si inicia sesión correctamente
      alert("Inicio de sesión exitoso.");
      // Redirigir o realizar acciones posteriores al inicio de sesión
    } catch (err) {
      console.error("Error al iniciar sesión:", err.message);
      setError("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="div-form">
        <label className="label-form" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@mail.com"
          className="input-form"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="div-form">
        <label className="label-form" htmlFor="password">
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="input-form"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="actiondiv-form">
        <button type="submit" className="button-form">
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
}

export default FormLogin;
