import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/Admin.css';

function UpdateUser() {
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const authResponse = await axios.get('http://127.0.0.1:8000/user/checkAuth', {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        });

        if (authResponse.status === 200) {
          fetchData();
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Erreur d\'autorisation:', error);
        navigate('/');
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/user/getUser/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error);
      }
    };

    checkAuthorization();
  }, [id, navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/user/updateUser/${id}`, user, {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      });
      console.log('Utilisateur mis à jour avec succès!');
      navigate('/admin/users');
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la mise à jour de l\'utilisateur:', error);
    }
  };
  return (
    <div className="update-user-container">
      <h2 className="h2UpdateUser">Mise à jour de l'utilisateur</h2>
      <form className="update-user-form" onSubmit={handleSubmit}>
        <label className="labelUpdateUser" htmlFor="firstName">Prénom:</label>
        <input
          className="inputUpdateUser"
          type="text"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          required
        />

        <label className="labelUpdateUser" htmlFor="lastName">Nom:</label>
        <input
          className="inputUpdateUser"
          type="text"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          required
        />

        <label className="labelUpdateUser" htmlFor="email">Email:</label>
        <input
          className="inputUpdateUser"
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <label className="labelUpdateUser" htmlFor="role">Role:</label>
        <select
          className="inputUpdateUser"
          id="role"
          name="role"
          value={user.role}
          onChange={handleChange}
          required
        >
          <option value="utilisateur">Utilisateur</option>
          <option value="comptable">Comptable</option>
          <option value="admin">Admin</option>
        </select>

        <button className="buttonUpdateUser" type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default UpdateUser;
