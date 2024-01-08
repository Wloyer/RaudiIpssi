// Details.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../style/Details.css';  
import { useParams } from 'react-router-dom';
import Customisation from './Customisation';
import { BrowserRouter as  Route} from 'react-router-dom';

function Details() {
  const [car, setCar] = useState({});
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

  return (
    <div className="detailsContainer">
      <div className="cardDetails">
        <h3 className="carName">Raudi {car.name}</h3>
        {car.name && (
          <img className="carImage" src={require(`../assets/${car.name}.jpg`)} alt={car.name} />
        )}
        <div className="carDetails">
          <p className="carProperty">Nombre de portes : {car.door}</p>
          <p className="carProperty">Type de moteur : {car.engine}</p>
          <p className="carProperty">Capacité d'assise : {car.seating_capacity}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
