// Accueil.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../style/Accueil.css';  
import { Link } from "react-router-dom";

function Accueil() {
  const [voitures, setVoitures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/car/getAllCar');
        setVoitures(response.data.car);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className='h2Accueil'>Liste des modèles</h2>
      <ul className='ulCard'>
        {voitures.map((car) => (
          <Link to={"/details/" + car.id} className='liCard'>
            <li key={car.id}>
              <div className="card">
                <h3 className='h3Card'>Raudi {car.name}</h3>
                <img src={require("../assets/" + car.name + ".jpg")}alt={car.name} />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
  
}

export default Accueil;
