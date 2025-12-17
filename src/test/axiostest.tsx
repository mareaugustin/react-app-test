import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function AxiosTest() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError('Impossible de charger les données');
      })
      .finally(() => {
        setLoading(false);
      });
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