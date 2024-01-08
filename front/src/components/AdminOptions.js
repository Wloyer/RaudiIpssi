import '../style/Admin.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate , Link } from 'react-router-dom';


function Admin() {
  const [car, setCar] = useState({
    name: '',
    door: '',
    engine: '',
    seating_capacity: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/car/updateCar/${id}`, {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        });

        if (response.status !== 200) {
          navigate('/');
        } else {
          const fetchResponse = await axios.get(`http://127.0.0.1:8000/car/getCar/${id}`);
          setCar(fetchResponse.data.car);
        }
      } catch (error) {
        console.error('Erreur d\'autorisation:', error);
        navigate('/');
      }
    };

    checkAuthorization();
  }, [id, navigate]);

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/car/updateCar/${id}`, car, {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      });
      console.log('Voiture mise à jour avec succès!');
      navigate('/admin/cars');
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la mise à jour de la voiture:', error);
    }
  };
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
