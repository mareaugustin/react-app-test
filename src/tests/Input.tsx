// 🔹 Titre : Hello World avec TextInput
// 🎯 Objectif : Créer une application affichant 'Hello, [Prénom] !' avec un champ de saisie.

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Input() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre prénom"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.text}>Hello, {name || 'étranger'} !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 },
  text: { fontSize: 24, textAlign: 'center' },
});