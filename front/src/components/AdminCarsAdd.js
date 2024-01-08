import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/Admin.css';

function AdminCarsAdd() {
  const [carData, setCarData] = useState({
    name: '',
    door: '',
    engine: '',
    seating_capacity: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fonction pour vérifier si l'utilisateur est autorisé à accéder à cette page
    const checkAuthorization = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/car/checkAuth', {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        });

        if (response.status !== 200) {
          navigate('/');
        }
      } catch (error) {
        console.error('Erreur d\'autorisation:', error);
        navigate('/');
      }
    };

    checkAuthorization();
  }, [navigate]);

  const handleChange = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/car/createCar', carData, {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      });
      console.log('Voiture créée avec succès!');
      navigate('/admin/cars');
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la création de la voiture:', error);
    }
  };


  return (
    <div className="update-user-container">
      <h2>Ajout de Voiture</h2>
      <form className="update-user-form" onSubmit={handleSubmit}>
        <label className="labelUpdateUser" htmlFor="name">Nom:</label>
        <input
          className="inputUpdateUser"
          type="text"
          id="name"
          name="name"
          value={carData.name}
          onChange={handleChange}
          required
        />

        <label className="labelUpdateUser" htmlFor="door">Portes:</label>
        <input
          className="inputUpdateUser"
          type="number"
          id="door"
          name="door"
          value={carData.door}
          onChange={handleChange}
          required
        />

        <label className="labelUpdateUser" htmlFor="engine">Moteur:</label>
        <select
          className="inputUpdateUser"
          id="engine"
          name="engine"
          value={carData.engine}
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
          value={carData.seating_capacity}
          onChange={handleChange}
          required
        />

        <button className="buttonConn" type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AdminCarsAdd;
