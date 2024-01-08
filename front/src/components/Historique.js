import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/Accueil.css'; 
import Cookies from 'js-cookie';


function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const userRole = Cookies.get('role'); 

  useEffect(() => {
    if (userRole !== 'admin' && userRole !== 'comptable') {
      // Si l'utilisateur n'est ni admin ni comptable, redirigez vers la page d'accueil.
      navigate('/');
      return;
    }

    // Déterminez l'URL en fonction du rôle de l'utilisateur
    const url = userRole === 'admin' || userRole === 'comptable' 
      ? '/ordered/monthly' 
      : '/ordered/history';

    axios.get(url, {
      headers: {
        'Authorization': Cookies.get('token')
      }
    })
    .then(response => {
      setOrders(response.data);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données:', error);
      navigate('/');
    });
  }, [navigate, userRole]);

  return (
    <div className="order-history-container">
      <h2>Historique des Commandes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Utilisateur</th>
            <th>Voiture</th>
            <th>Prix</th>
            <th>Date de Commande</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.price}</td>
              <td>{order.userId}</td> {/* Assurez-vous que ces champs correspondent à votre structure de données */}
              <td>{order.carId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistory;
