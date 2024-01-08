import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/Historique.css';  

function Historique() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/checkAuth', {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        });

        if (response.status !== 200) {
          navigate('/connexion');
        }
      } catch (error) {
        console.error('Erreur d\'autorisation:', error);
        navigate('/connexion');
      }
    };

    checkAuthorization();
  }, [navigate]);
  
  return (
    <div>
      <h2>Historique</h2>
    </div>
  );
};

export default Historique;
