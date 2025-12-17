// 🔹 Titre : Toggle switch (afficher/masquer texte)
//  Objectif : Afficher ou masquer un texte en cliquant sur un bouton.

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Exo3() {
  const [visible, setVisible] = useState(true);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {visible && <Text>✨ Texte masquable</Text>}
      <Button
        title={visible ? 'Masquer' : 'Afficher'}
        onPress={() => setVisible(!visible)}
      />
    </View>
  );
}