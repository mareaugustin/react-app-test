/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, Text, View } from 'react-native';
import Auth from './src/components/pages/Auth';
import ListEtudiant from './src/components/pages/ListEtudiant';
import Alerte from './src/test/Alert';
import Plateforme from './src/test/platform';
import Loader from './src/test/Loader';
import Permission from './src/test/permissionandroid';
import Fetch from './src/test/fetch';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        

        <Auth />
        


      </View>
  );
}


export default App;
