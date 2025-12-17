// 🔹 Titre : Liste dynamique avec ajout/suppression
//  Objectif : Ajouter une tâche via TextInput, la supprimer en cliquant.

import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Exo6() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), title: text }]);
      setText('');
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Nouvelle tâche"
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>➕</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <Text style={{ color: 'red' }}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 , marginTop: 30},
  inputRow: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, padding: 10, borderRadius: 5 },
  addButton: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 5, marginLeft: 10 },
  addButtonText: { color: 'white', fontSize: 20 },
  taskItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 },
});