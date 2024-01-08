// Customisation.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../style/Customisation.css';  
import Cookies from 'js-cookie';
import { Link, useParams } from "react-router-dom";

function CustomizationPage() {
    const [car, setCar] = useState({});
    const [options, setOptions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const { id } = useParams();
    const [idUser, setIdUser] = useState();
    const [price, setPrice] = useState();


  useEffect(() => {
    const idUser = Cookies.get('id');
    setIdUser(idUser); 

    const fetchData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/car/getCar/${id}`);
          setCar(response.data.car);
        } catch (error) {
          console.error('Une erreur s\'est produite lors de la récupération des données:', error.message);
        }
    };

    const fetchOptions = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/option/getAllOption');
          setOptions(response.data.option);
        } catch (error) {
          console.error('Une erreur s\'est produite lors de la récupération des options:', error);
        }
    };

    fetchOptions();
    fetchData();
  }, [price]);

  const handleCheckboxChange = (optionId) => {
    const selectedOptionIds = Object.keys(selectedOptions).filter((key) => selectedOptions[key]);
    const selectedOptionsDetails = options.filter((option) => selectedOptionIds.includes(option.id.toString()));
    const totalPrice = selectedOptionsDetails.reduce((acc, option) => acc + option.price, 0) + car.price;
    setPrice(totalPrice)
    setSelectedOptions({
      ...selectedOptions,
      [optionId]: !selectedOptions[optionId],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Calculez le prix total en fonction des options sélectionnées
    const selectedOptionIds = Object.keys(selectedOptions).filter((key) => selectedOptions[key]);
    const selectedOptionsDetails = options.filter((option) => selectedOptionIds.includes(option.id.toString()));
    const totalPrice = selectedOptionsDetails.reduce((acc, option) => acc + option.price, 0) + car.price;
  
    // Envoyer les données au backend avec une requête POST
    try {
        const userId = idUser; 
        const carId = id; 
    
        const orderResponse = await axios.post(`http://127.0.0.1:8000/ordered/orders`, {
            price: totalPrice,
            userId: userId,
            carId: carId,
            selectedOptionIds: selectedOptionIds
        });
        window.location.href = '/customisation';
      console.log('Options personnalisées avec succès!');
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la personnalisation des options:', error);
    }
  };
  
  return (
    <div className="container">
      <h2 className='h2CustomVehi'>Customisation de Raudi</h2>
      <strong>{price}</strong>
      <form className='form-container' onSubmit={handleSubmit}>
        <ul className='ulCustomVehi'>
          <li className='options-list' key={car.id}>
            <p className='pCustomVehi'>
              {car.name} - {car.price}€
            </p>
          </li>
          {options.map((option) => (
            <li className='options-list' key={option.id}>
              <label className='option-label'>
                <input
                  type="checkbox"
                  className="checkbox-input"
                  checked={selectedOptions[option.id] || false}
                  onChange={() => handleCheckboxChange(option.id)}
                />
                {option.name} - {option.price}€
              </label>
            </li>
          ))}
        </ul>
        <button type="submit" className="submit-button">Acheter</button>
      </form>
    </div>
  );
};

export default CustomizationPage;
