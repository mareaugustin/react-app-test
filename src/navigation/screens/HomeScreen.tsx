import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function HomeScreen({ route, navigation }) {

    const { nom, prenom, age, filiere, genre } = route.params || {};
  const [tasks, setTasks] = useState([
    { id: Date.now().toString(), nom: nom, prenom: prenom, age: age, filiere: filiere, genre: genre }
  ]);

  const photo=  'https://randomuser.me/api/portraits/men/11.jpg';

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des étudiants</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Add')} style={styles.button}>
        <Text style={styles.buttonText}>Ajouter un étudiant</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingTop: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: photo }}
              style={styles.avatar}
            />

            <View style={styles.info}>
              <Text style={styles.name}>{item.nom} {item.prenom}</Text>
              <Text style={styles.meta}>Âge : {item.age}</Text>
              <Text style={styles.meta}>Genre : {item.genre}</Text>
              <Text style={styles.meta}>Filière : {item.filiere}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    marginTop: 20,
    padding: 12,
    backgroundColor: 'blue',
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  card: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  info: {
    marginLeft: 15,
    justifyContent: 'center'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  meta: {
    fontSize: 14,
    color: '#555'
  }
});
