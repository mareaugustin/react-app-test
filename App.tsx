/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, Text, View } from 'react-native';
import Auth from './src/components/pages/Auth';
import ListEtudiant from './src/components/pages/ListEtudiant';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        
        {/* Vu de Connexion */}
        <Auth />


      </View>
  );
}


export default App;
