import React from 'react';
import './register-form.css'
function FormRegister() { 
        return (
            
            <form> 
                <div className="div-form">
                    <label className='label-form' htmlFor='name'>Nombre: </label>
                    <input type="text" id="name" name="name" placeholder="Nombre" className='input-form' required/>
                </div>
                
                <div className="div-form">
                    <label className='label-form' htmlFor='surname' >Apellido: </label>
                    <input type="text" id="surname" name="surname" placeholder="Apellido" className='input-form' required/>
                </div>
                <div className="div-form">
                    <label className='label-form' htmlFor='email'>Email: </label>
                    <input type="email" id="email" name="email" placeholder="example@mail.com" className='input-form' required/>
                </div>
                <div className="div-form">
                    <label className='label-form' htmlFor='phone'>Telefono: </label>
                    <input type='tel' id="phone" name="phone" placeholder="1234567890" className='input-form' required/>
                </div>
            
                <div className="div-form">
                    <label className='label-form' htmlFor="password">Contraseña: </label>
                    <input type="password" id="password" name="password" className="input-form" required />
                </div>

                <div className="div-form">
                    <label className='label-form' htmlFor="confirm-password">Confirmar Contraseña: </label>
                    <input type="password" id="confirm-password" name="confirm-password" className="input-form" required />
                </div>
                <div className="actiondiv-form">
                    <button type="submit" className='button-form'>Registrarse</button>
                </div>
            </form>
        );
    }

export default FormRegister;
