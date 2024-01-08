import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Accueil.css'; 

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // La requête est effectuée sans vérification du rôle de l'utilisateur
    axios.get('http://127.0.0.1:8000/history') // Utilisez l'URL appropriée pour votre API
    .then(response => {
      setOrders(response.data);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données:', error);
      // Vous pouvez choisir de gérer l'erreur différemment, par exemple, afficher un message d'erreur
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
              <td>{order.userId}</td> {/* Assurez-vous que ces champs correspondent à votre structure de données */}
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
