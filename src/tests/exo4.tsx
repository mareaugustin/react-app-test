// 🔹 Titre : Couleur aléatoire au clic
//  Objectif : Changer la couleur de fond à chaque clic sur un bouton.

import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

export default function Exo4() {
  const [bgColor, setBgColor] = useState('#fff');

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button
        title="Changer la couleur"
        onPress={() => setBgColor(getRandomColor())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});