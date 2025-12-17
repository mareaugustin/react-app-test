import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function AxiosF() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
    } catch (err) {
      setError('Erreur lors du chargement des posts');
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);


  if (loading) return <ActivityIndicator size="large" color="blue" style={styles.center} />;

  if (error) return <Text style={styles.center}>{error}</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
});