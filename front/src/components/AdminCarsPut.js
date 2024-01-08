// UpdateCar.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../style/Admin.css';

function UpdateCar() {
  const [car, setCar] = useState({
    name: '',
    door: '',
    engine: '',
    seating_capacity: '',
    price: ''
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/car/getCar/${id}`);
        setCar(response.data.car);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/car/updateCar/${id}`, car);
      console.log('Voiture mis à jour avec succès!');
      window.location.href = '/admin/cars';
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la mise à jour de l\'utilisateur:', error.message);
    }
  };

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  return (
    <div className="update-user-container">
      <h2>Modification de la Voiture</h2>
      <form className="update-user-form" onSubmit={handleSubmit}>
        <label className="labelUpdateUser" htmlFor="name">Nom:</label>
        <input
          className="inputUpdateUser"
          type="text"
          id="name"
          name="name"
          value={car.name}
          onChange={handleChange}
          required
        />

        <label className="labelUpdateUser" htmlFor="door">Portes:</label>
        <input
          className="inputUpdateUser"
          type="number"
          id="door"
          name="door"
          value={car.door}
          onChange={handleChange}
          required
        />

        <label className="labelUpdateUser" htmlFor="engine">Moteur:</label>
        <select
          className="inputUpdateUser"
          id="engine"
          name="engine"
          value={car.engine}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionnez le moteur</option>
          <option value="fuel">Essence</option>
          <option value="diesel">Diesel</option>
        </select>

        <label className="labelUpdateUser" htmlFor="seating_capacity">Sièges:</label>
        <input
          className="inputUpdateUser"
          type="number"
          id="seating_capacity"
          name="seating_capacity"
          value={car.seating_capacity}
          onChange={handleChange}
          required
        />

        <label className="labelUpdateUser" htmlFor="price">Prix:</label>
        <input
          className="inputUpdateUser"
          type="number"
          id="price"
          name="price"
          value={car.price}
          onChange={handleChange}
          required
        />

        <button className="buttonConn" type="submit">Modifier</button>
      </form>
    </div>
  );
}

export default UpdateCar;
