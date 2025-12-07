import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, 
         Text, View, Image, StyleSheet } from 'react-native';

import getClient from './getClient'


const Fetch = () => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await getClient(); // Appel de la fonction
        setClients(data); // Mettre à jour l'état avec les données reçues
      } catch (err) {
        setError(err.message); // Gérer les erreurs
      }
    };

    fetchClients();
  }, []);

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <View>
      {clients.map((client, index) => (
        <Text key={index}>{client.name}</Text>
      ))}
    </View>
  );
};

export default Fetch;