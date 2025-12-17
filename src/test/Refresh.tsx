import React, { useEffect, useState } from 'react';
import {  RefreshControl, ScrollView , View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function Refresh() {
const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const fetchData = async () => {
  try {
    const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
    setData(response.data);
  } catch (err) {
    setError('Erreur');
  }
};

useEffect(() => {
  fetchData();
}, []);

return (
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await fetchData();
          setRefreshing(false);
        }}
      />
    }
  >
    {data.map(item => <Text key={item.id}>{item.title}</Text>)}
  </ScrollView>
);

}