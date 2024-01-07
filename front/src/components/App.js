import React, { useEffect, useState } from 'react';
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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsUserLoggedIn(!!token); 
  }, []);

  return (
    <Router>
      <div className='contenu'>
        <nav className='navApp'>
          <ul className="nav-left">
            <li className='liAppNav'><Link className='aAppNav' to="/">Accueil</Link></li>
            <li className='liAppNav'><Link className='aAppNav' to="/customisation">Customisation</Link></li>
            <li className='liAppNav'><Link className='aAppNav' to="/historique">Historique</Link></li>
            <li className='liAppNav'><Link className='aAppNav' to="/admin">Admin</Link></li>
          </ul>
          <ul className={isUserLoggedIn ? "nav-right hidden" : "nav-right"}>
            <li className='liAppNav'><Link className='aAppNav' to="/connexion">Connexion</Link></li>
            <li className='liAppNav'><Link className='aAppNav' to="/inscription">Inscription</Link></li>
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
              <li><a className='aAppFooter' href='https://youtube.com' target='_blank'>Mentions légales</a></li>
              <li><a className='aAppFooter' href='https://youtube.com' target='_blank'>Paramètres des cookies</a></li>
              <li><a className='aAppFooter' href='https://youtube.com' target='_blank'>CGU</a></li>
            </ul>
            <ul className="footer-right">
              <li className='liAppFooter'>Numéro de téléphone : 01.69.69.25.52</li>
              <li className='liAppFooter'>Adresse postale : 123 Rue de l'Exemple, Paris</li>
              <li className='liAppFooter'>Adresse e-mail : contact@raudi.com</li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
