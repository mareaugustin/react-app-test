// 🔹 Titre : Liste dynamique avec ajout/suppression
//  Objectif : Ajouter une tâche via TextInput, la supprimer en cliquant.

import React, { useState } from 'react';
import Form from './ui_add/form';
import List from './ui_add/Flatlist';
import { View, FlatList, StyleSheet, Alert } from 'react-native';

export default function Add() {
  const [tasks, setTasks] = useState([]);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [age, setAge] = useState('');

   const photo=  'https://randomuser.me/api/portraits/men/11.jpg';

   

const addTask = () => {
  if (!nom.trim() || !prenom.trim() || !age.trim()) return;

  const ageNumber = parseInt(age);
  if (isNaN(ageNumber)) {
      return;
    }


  setTasks([...tasks, { id: Date.now().toString(), nom, prenom, age}]);
  setNom('');
  setPrenom('');
  setAge('')
};


  const removeTask = (id) => {

  Alert.alert(
    'Confirmation',
    'Voulez-vous vraiment supprimer ?',
    [
      {
        text: 'Non',
        style: 'cancel',
      },
      {
        text: 'Oui',
        onPress: () => {
          setTasks(tasks.filter(task => task.id !== id));
        },
        style: 'destructive',
      },
    ],
    { cancelable: true }
  );
};

  return (
    <View style={styles.container}>
      
        <Form 
            value1={nom}
            value2={prenom}
            value3={age}
            onChangeText1={setNom}
            onChangeText2={setPrenom}
            onChangeText3={setAge}
            onPress={addTask}
        />

    
      <FlatList
        data={tasks}
        renderItem={({ item }) => 
          <List item={item} source={{ uri: photo }} onPress={()=> removeTask(item.id)}/>
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 , marginTop: 30},
});