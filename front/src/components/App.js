import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../style/App.css'
import Cookies from 'js-cookie';

// Importez les composants
import Accueil from './Accueil';
import Historique from './Historique';
import Customisation from './Customisation';
import Admin from './Admin';
import Details from './Details';
import Connexion from './Connexion';
import Inscription from './Inscription';
import AdminUsers from './AdminUsers';
import AdminCars from './AdminCars';
import AdminOptions from './AdminOptions';
import AdminUsersPut from './AdminUsersPut';
import AdminCarsAdd from './AdminCarsAdd';
import AdminCarsPut from './AdminCarsPut';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = Cookies.get('token');
    const role = Cookies.get('role');
    setIsUserLoggedIn(!!token); 
    setRole(role)
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('role');
    setIsUserLoggedIn(false);
    setRole("");
  };

  return (
    <Router>
      <div className='contenu'>
        <nav className='navApp'>
          <ul className="nav-left">
            <li className='liAppNav'><Link className='aAppNav' to="/">Accueil</Link></li>
            <li className={role === "utilisateur" || role === "admin" || role === "comptable" ? "liAppNav" : "liAppNav hidden"}><Link className='aAppNav' to="/customisation">Customisation</Link></li>
            <li className={role === "comptable" ? "liAppNav" : "liAppNav hidden"}><Link className='aAppNav' to="/historique">Historique</Link></li>
            <li className={role === "admin" ? "liAppNav" : "liAppNav hidden"}><Link className='aAppNav' to="/admin">Admin</Link></li>
          </ul>
          <ul className={isUserLoggedIn ? "nav-right hidden" : "nav-right"}>
            <li className='liAppNav'><Link className='aAppNav' to="/connexion">Connexion</Link></li>
            <li className='liAppNav'><Link className='aAppNav' to="/inscription">Inscription</Link></li>
          </ul>
          <ul className={isUserLoggedIn ? "nav-right" : "nav-right hidden"}>
            <li className='liAppNav'><Link className='aAppNav button' onClick={handleLogout}>Déconnexion</Link></li>
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
            <Route path="/details/:id" element={<Details />} />
            <Route path="/admin/adminUserPut/:id" element={<AdminUsersPut />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/cars" element={<AdminCars />} />
            <Route path="/admin/options" element={<AdminOptions />} />
            <Route path="/admin/adminCarsAdd" element={<AdminCarsAdd />} />
            <Route path="/admin/adminCarPut/:id" element={<AdminCarsPut />} />
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
