import '../style/Admin.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate , Link } from 'react-router-dom';


function AdminOptions() {
  const [options, setOptions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/option/getAllOption');
      setOptions(response.data.option);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteOption = async (idOption) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/option/deleteOption/${idOption}`);
      fetchData();
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la suppression des données:', error);
    }
  };

  return (
    <div className="admin-container">
      <h2>Liste des modèles</h2>
      <Link to="/admin/adminOptionsAdd" className='buttonAdd'>Ajouter une option</Link>
      <table className="user-table">
        <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prix</th>
              <th>Actions</th>
            </tr>
          </thead>
        <tbody>
          {options.map(option => (
            <tr key={option.id}>
              <td>{option.id}</td>
              <td>{option.name}</td>
              <td>{option.price}€</td>
              <td>
                <Link to={`/admin/adminOptionPut/${option.id}`}>Modifier</Link> |&nbsp;
                <Link onClick={() => deleteOption(option.id)}>Supprimer</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Liste des modèles</h2>
      <Link to="/admin/adminOptionsAdd" className='buttonAdd'>Ajouter une option</Link>
      <table className="user-table">
        <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prix</th>
              <th>Actions</th>
            </tr>
          </thead>
        <tbody>
          {options.map(option => (
            <tr key={option.id}>
              <td>{option.id}</td>
              <td>{option.name}</td>
              <td>{option.price}€</td>
              <td>
                <Link to={`/admin/adminOptionPut/${option.id}`}>Modifier</Link> |&nbsp;
                <Link onClick={() => deleteOption(option.id)}>Supprimer</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOptions;
