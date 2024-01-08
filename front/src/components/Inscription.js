import React, { useState } from 'react';
import '../style/Inscription.css';
import Cookies from 'js-cookie';

function Inscription() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/user/register', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data)
            if (data.token) {
                Cookies.set('token', data.token);
                localStorage.setItem('token', data.token);
                Cookies.set('role', data.role);
                Cookies.set('id', data.id);
                window.location.href = '/';
                console.log('Inscription réussie');
            } else {
                console.error('Échec de l\'inscription');
            }
            if (!response.ok) {
              throw new Error(`Erreur HTTP: ${response.status}`);
          }
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données', error);
        }
    };

    return (
      <div className="inscription-container">
      <h2 className='h2Insc'>Inscription</h2>
      <form className="inscription-form" onSubmit={handleSubmit}>
          <label className='labelInsc' htmlFor="firstName">Prénom:</label>
          <input className='inputInsc' type="text" id="firstName" name="firstName" required onChange={handleChange} />

          <label className='labelInsc' htmlFor="lastName">Nom:</label>
          <input className='inputInsc' type="text" id="lastName" name="lastName" required onChange={handleChange} />

          <label className='labelInsc' htmlFor="email">Email:</label>
          <input className='inputInsc' type="email" id="email" name="email" required onChange={handleChange} />

          <label className='labelInsc' htmlFor="password">Mot de passe:</label>
          <input className='inputInsc' type="password" id="password" name="password" required onChange={handleChange} />

          <div className="remember-me">
              <input className='inputInsc' type="checkbox" id="conditions" name="conditions" />
              <label className='labelInsc' htmlFor="conditions">Conditions d'utilisations</label>
              <a className='goToConnexion' href="/connexion">Je possède déjà un compte ?</a>
          </div>

          <button className='buttonInsc' type="submit">S'inscrire</button>
      </form>
  </div>
);
}

export default Inscription;
