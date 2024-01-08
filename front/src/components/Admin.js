import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style/Admin.css';

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Envoi de la requête à /admin');
    fetch('/admin', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
    .then(response => {
      console.log('Réponse reçue:', response);
      if (response.status === 403) {
          alert('Accès non autorisé');
          navigate('/');
      } else if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
      } else if (response.headers.get("Content-Type")?.includes("application/json")) {
          return response.json(); // Convertir en JSON seulement si la réponse est du JSON
      }
    })
    .then(data => {
      // Utilisez les données ici si nécessaire
    })
    .catch(error => {
      console.error('Erreur lors de la requête:', error);
      navigate('/');
    });
  }, [navigate]);


  return (
    
    <div className="admin-container">
      <h2 className="h2Admin">Admin</h2>
      <div className="admin-cards">
        <Link to="/admin/users" className="admin-card">
          <h3>Utilisateurs</h3>
          <p>Gérer les utilisateurs</p>
        </Link>
        <Link to="/admin/cars" className="admin-card">
          <h3>Voitures</h3>
          <p>Gérer les voitures</p>
        </Link>
        <Link to="/admin/options" className="admin-card">
          <h3>Options</h3>
          <p>Gérer les options</p>
        </Link>
      </div>
    </div>
  );
}

export default Admin;
