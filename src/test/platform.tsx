import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

export default function Plateforme() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Plateforme : {Platform.OS}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: {
    fontSize: Platform.OS === 'ios' ? 20 : 18,
    color: Platform.OS === 'android' ? 'green' : 'blue'
  }
});