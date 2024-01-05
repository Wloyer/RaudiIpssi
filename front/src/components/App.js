import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../style/App.css'

// Importez les composants
import Accueil from './Accueil';
import Historique from './Historique';
import Customisation from './Customisation';
import Admin from './Admin';
import Connexion from './Connexion';
import Inscription from './Inscription';

function App() {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>

        <Routes>
          <Route path="/" component={Accueil} />
          <Route path="/historique" component={Historique} />
          <Route path="/customisation" component={Customisation} />
          <Route path="/admin" component={Admin} />
          <Route path="/connexion" component={Connexion} />
          <Route path="/inscription" component={Inscription} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;