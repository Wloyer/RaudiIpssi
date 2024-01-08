import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../style/Admin.css';

function AdminCars() {
  const [cars, setCars] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/car/getAllCar');
      setCars(response.data.car);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteCar = async (idCar) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/car/deleteCar/${idCar}`);
      fetchData();
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la suppression des données:', error);
    }
  };

  return (
    <div className="admin-container">
      <h2>Liste des modèles</h2>
      <Link to="/admin/adminCarsAdd" className='buttonAdd'>Ajouter un modèle</Link>
      <table className="user-table">
        <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Portes</th>
              <th>Moteur</th>
              <th>Sièges</th>
              <th>Actions</th>
            </tr>
          </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.name}</td>
              <td>{car.door}</td>
              <td>{car.engine}</td>
              <td>{car.seating_capacity}</td>
              <td>
                <Link to={`/admin/adminCarPut/${car.id}`}>Modifier</Link> |&nbsp;
                <Link onClick={() => deleteCar(car.id)}>Supprimer</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminCars;
