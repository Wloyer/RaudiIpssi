// Inscription.js
import React from 'react';
import '../style/Inscription.css';

function Inscription() {
  return (
    <div className="inscription-container">
      <h2 className='h2Insc'>Inscription</h2>
      <form className="inscription-form">
        <label className='labelInsc' htmlFor="firstName">Prénom:</label>
        <input className='inputInsc' type="text" id="firstName" name="firstName" required />

        <label className='labelInsc' htmlFor="lastName">Nom:</label>
        <input className='inputInsc' type="text" id="lastName" name="lastName" required />

        <label className='labelInsc' htmlFor="email">Email:</label>
        <input className='inputInsc' type="email" id="email" name="email" required />

        <label className='labelInsc' htmlFor="password">Mot de passe:</label>
        <input className='inputInsc' type="password" id="password" name="password" required />

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
