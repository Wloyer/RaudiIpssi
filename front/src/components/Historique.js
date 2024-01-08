import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Accueil.css'; 

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8000/ordered/history') 
    .then(response => {
      setOrders(response.data);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données:', error);

    });
  }, []);

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
              <td>{order.userId}</td> 
              <td>{order.carId}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistory;
