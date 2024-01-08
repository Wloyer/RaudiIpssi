// Connexion.js
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import '../style/Connexion.css';

function Connexion() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/user/login', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            const data = await response.json();
            if (response.ok) {
                Cookies.set('token', data.token);
                localStorage.setItem('token', data.token);
                Cookies.set('role', data.role);
                localStorage.setItem('role', data.role);
                window.location.href = '/';
            } else {
                console.error('Échec de la connexion:', data.message);
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données', error);
        }
    };

    return (
        <div className="connexion-container">
            <h2 className='h2Conn'>Connexion</h2>
            <form className="connexion-form" onSubmit={handleSubmit}>
                <label className='labelConn' htmlFor="email">Email:</label>
                <input className='inputConn' type="email" id="email" name="email" required onChange={handleChange} />

                <label className='labelConn' htmlFor="password">Mot de passe:</label>
                <input className='inputConn' type="password" id="password" name="password" required onChange={handleChange} />

                <div className="remember-me">
                    <input className='inputConn' type="checkbox" id="remember" name="remember" />
                    <label className='labelConn' htmlFor="remember">Se souvenir de moi</label>
                    <a className='senregistrer' href="/inscription">Je n'ai pas de compte ?</a>
                </div>

                <button className='buttonConn' type="submit">Se connecter</button>
            </form>
        </div>
    );
}

export default Connexion;