// Connexion.js
import React from 'react';
import '../style/Connexion.css';

function Connexion() {
  return (
    <div className="connexion-container">
      <h2 className='h2Conn'>Connexion</h2>
      <form className="connexion-form">
        <label className='labelConn' htmlFor="email">Email:</label>
        <input className='inputConn' type="email" id="email" name="email" required />

        <label className='labelConn' htmlFor="password">Mot de passe:</label>
        <input className='inputConn' type="password" id="password" name="password" required />

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
