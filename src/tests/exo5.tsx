// 🔹 Titre : Formulaire simple (nom + email)
//  Objectif : Valider un formulaire (champs non vides + email valide) et afficher un message.

import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function Exo5() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) return Alert.alert('Erreur', 'Nom requis');
    if (!emailRegex.test(email)) return Alert.alert('Erreur', 'Email invalide');
    Alert.alert('Succès', `Bonjour ${name} !`);
  };

  return (
    <View style={styles.container}>
      <TextInput        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Envoyer" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
});