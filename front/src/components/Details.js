// Details.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../style/Details.css';  
import { useParams } from 'react-router-dom';

function Details() {
  const [voiture, setVoiture] = useState({});
  const { ref } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/car/getCar/${ref}`);
        setVoiture(response.data.car);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error.message);
      }
    };

    fetchData();
  }, [ref]);

  return (
    <div className="detailsContainer">
      <div className="cardDetails">
        <h3 className="carName">Raudi {voiture.name}</h3>
        {voiture.name && (
          <img className="carImage" src={require(`../assets/${voiture.name}.jpg`)} alt={voiture.name} />
        )}
        <div className="carDetails">
          <p className="carProperty">Nombre de portes : {voiture.door}</p>
          <p className="carProperty">Type de moteur : {voiture.engine}</p>
          <p className="carProperty">Capacité d'assise : {voiture.seating_capacity}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
