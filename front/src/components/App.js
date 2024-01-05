import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../style/App.css'

// Importez les composants
import Accueil from './Accueil';
import Historique from './Historique';
import Customisation from './Customisation';
import Admin from './Admin';
import Details from './Details';
import Connexion from './Connexion';
import Inscription from './Inscription';

function App() {
  return (
    <Router>
      <div className='contenu'>
        <nav>
          <ul className="nav-left">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/customisation">Customisation</Link></li>
            <li><Link to="/historique">Historique</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
          <ul className="nav-right">
            <li><Link to="/connexion">Connexion</Link></li>
            <li><Link to="/inscription">Inscription</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/historique" element={<Historique />} />
            <Route path="/customisation" element={<Customisation />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/details/:ref" element={<Details />} />
          </Routes>
        </main>
        <footer>
          <div className='footer'>
            <ul className="footer-left">
              <li><a href='https://youtube.com' target='_blank'>Mentions légales</a></li>
              <li><a href='https://youtube.com' target='_blank'>Paramètres des cookies</a></li>
              <li><a href='https://youtube.com' target='_blank'>CGU</a></li>
            </ul>
            <ul className="footer-right">
              <li>Numéro de téléphone : 01.69.69.25.52</li>
              <li>Adresse postale : 123 Rue de l'Exemple, Paris</li>
              <li>Adresse e-mail : contact@raudi.com</li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;