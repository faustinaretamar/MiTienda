import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebaseConfig.js"; // Si usas Firestore
import { doc, setDoc } from "firebase/firestore"; // Si usas Firestore
import "./register-form.css";

function FormRegister() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, surname, email, phone, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      // Crear el usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Guardar datos adicionales en Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        surname,
        email,
        phone,
        createdAt: new Date(),
      });

      setSuccess("Usuario registrado con éxito.");
      setError("");
    } catch (err) {
      console.error("Error al registrar el usuario:", err.message);
      setError("No se pudo registrar el usuario.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="div-form">
        <label className="label-form" htmlFor="name">
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
          className="input-form"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="div-form">
        <label className="label-form" htmlFor="surname">
          Apellido:
        </label>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="Apellido"
          className="input-form"
          value={formData.surname}
          onChange={handleChange}
          required
        />
      </div>

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
        <label className="label-form" htmlFor="phone">
          Teléfono:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="1234567890"
          className="input-form"
          value={formData.phone}
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

      <div className="div-form">
        <label className="label-form" htmlFor="confirm-password">
          Confirmar Contraseña:
        </label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          className="input-form"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <div className="actiondiv-form">
        <button type="submit" className="button-form">
          Registrarse
        </button>
      </div>
    </form>
  );
}

export default FormRegister;
