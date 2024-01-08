import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../style/Admin.css';

function AdminUsers() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/user/getAllUsers');
      setUsers(response.data);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = async (idUser) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/user/deleteUser/${idUser}`);
      fetchData();
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la suppression des données:', error);
    }
  };

  return (
    <div className="admin-container">
      <h2>Liste des Utilisateurs</h2>
      <table className="user-table">
        <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.lastName}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link to={`/admin/adminUserPut/${user.id}`}>Modifier</Link> |&nbsp;
                <Link onClick={() => deleteUser(user.id)}>Supprimer</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
