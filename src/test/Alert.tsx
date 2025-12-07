import React from 'react';
import { View, Button, Alert } from 'react-native';

export default function Alerte() {
  const showAlert = () => {
    Alert.alert(
      'Confirmation',
      'Voulez-vous continuer ?',
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK pressé') }
      ]
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Montrer l'alerte" onPress={showAlert} />
    </View>
  );
}