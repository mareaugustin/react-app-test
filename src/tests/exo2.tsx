// 🔹 Titre : Liste statique avec FlatList
//  Objectif : Afficher une liste de 5 fruits avec FlatList.

import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const fruits = ['🍎 Pomme', '🍌 Banane', '🍇 Raisin', '🍊 Orange', '🍓 Fraise'];

export default function Exo2() {
  return (
    <FlatList
      data={fruits}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  item: { padding: 15, fontSize: 18, borderBottomWidth: 1, borderColor: '#eee' },
});