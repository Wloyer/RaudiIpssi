import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Admin.css';

function Admin() {
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
