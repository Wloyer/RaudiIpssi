import React, { useState } from 'react';
import axios from 'axios';
import '../style/Admin.css';

function AdminOptionsAdd() {
  const [optionData, setOptionData] = useState({
    name: '',
    price: ''
  });

  const handleChange = (e) => {
    setOptionData({ ...optionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post(`http://127.0.0.1:8000/option/createOption`, optionData);
        console.log('Option ajoutée avec succès!');
        window.location.href = '/admin/options';
      } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'ajout d\'option:', error.message);
      }
  };

  return (
    <div className="update-user-container">
      <h2>Ajout d'une option</h2>
      <form className="update-user-form" onSubmit={handleSubmit}>
        <label className="labelUpdateUser" htmlFor="name">Nom:</label>
        <input
          className="inputUpdateUser"
          type="text"
          id="name"
          name="name"
          value={optionData.name}
          onChange={handleChange}
          required
        />

        <label className="labelUpdateUser" htmlFor="price">Prix:</label>
        <input
          className="inputUpdateUser"
          type="number"
          id="price"
          name="price"
          value={optionData.price}
          onChange={handleChange}
          required
        />

        <button className="buttonConn" type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AdminOptionsAdd;
