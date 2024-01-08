// UpdateOption.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../style/Admin.css';

function UpdateOption() {
  const [option, setOption] = useState({
    name: '',
    price: ''
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/option/getOption/${id}`);
        setOption(response.data.option);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/option/updateOption/${id}`, option);
      console.log('Option mis à jour avec succès!');
      window.location.href = '/admin/options';
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la mise à jour de l\'option:', error.message);
    }
  };

  const handleChange = (e) => {
    setOption({ ...option, [e.target.name]: e.target.value });
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
          value={option.name}
          onChange={handleChange}
          required
        />

        <label className="labelUpdateUser" htmlFor="price">Prix:</label>
        <input
          className="inputUpdateUser"
          type="number"
          id="price"
          name="price"
          value={option.price}
          onChange={handleChange}
          required
        />

        <button className="buttonConn" type="submit">Modifier</button>
      </form>
    </div>
  );
}

export default UpdateOption;
