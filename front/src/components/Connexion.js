// Connexion.js
import React from 'react';
import '../style/Connexion.css';

function Connexion() {
  return (
    <div className="connexion-container">
      <h2>Connexion</h2>
      <form className="connexion-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" required />

        <div className="remember-me">
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Se souvenir de moi</label>
        </div>

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Connexion;
