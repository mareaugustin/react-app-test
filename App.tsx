// import * as React from 'react';
// import { View, Text, SafeAreaView, ScrollView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Écrans fictifs
// function HomeScreen() { return <Text>Accueil</Text>; }
// function DetailsScreen() { return <Text>Détails</Text>; }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



// import * as React from 'react';
// import { View, Button, Text, SafeAreaView, ScrollView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Écrans fictifs
// function HomeScreen() { return <Text>Accueil</Text>; }
// function DetailsScreen() { return <Text>Détails</Text>; }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//   initialRouteName="Home"
//   screenOptions={{
//     headerStyle: { backgroundColor: '#4a90e2' },
//     headerTintColor: '#fff',
//     headerTitleStyle: { fontWeight: 'bold' },
//   }}
// >
//   <Stack.Screen
//     name="Home"
//     component={HomeScreen}
//     options={{ title: 'Accueil' }}
//   />
//   <Stack.Screen
//     name="Details"
//     component={DetailsScreen}
//     options={({ route }) => ({
//       title: route.params?.title || 'Détails',
//       headerRight: () => (
//         <Button title="✏️" onPress={() => alert('Modifier')} />
//       ),
//     })}
//   />
// </Stack.Navigator>
//     </NavigationContainer>
//   );
// }







// // App.js
// import React from 'react';
// import { SafeAreaView, Text, Button, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Écrans
// function HomeScreen({ navigation }) {
//   return (
//     <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 24 }}>🏠 Accueil</Text>
//       <Button
//         title="Aller aux détails"
//         onPress={() => navigation.navigate('Details', { userId: 1, name: 'Alice' })}
//       />
//     </SafeAreaView>
//   );
// }

// function DetailsScreen({ route, navigation }) {
//   const { userId, name } = route.params || {};
//   return (
//     <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 24 }}>📄 Détails</Text>
//       <Text>ID: {userId}, Nom: {name}</Text>
//       <Button title="Retour" onPress={() => navigation.goBack()} />
//       <Button title="🔄 Recharger avec nouveau param" onPress={() => navigation.push('Details', { userId: 2, name: 'Bob' })} />
//     </SafeAreaView>
//   );
// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerStyle: { backgroundColor: '#4a90e2' },
//           headerTintColor: '#fff',
//           headerTitleAlign: 'center',
//         }}
//       >
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
//         <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Détails' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }









// App.js
// import React from 'react';
// import { SafeAreaView, Text, Button, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {Ionicons} from '@react-native-vector-icons/ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';

// // Écrans
// function HomeScreen({ navigation }) {
//   return (
//     <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>🏠 Accueil</Text>
//       <Button title="Voir détails" onPress={() => navigation.navigate('DetailsTab', { screen: 'Details', params: { id: 101 } })} />
//     </SafeAreaView>
//   );
// }

// function DetailsScreen({ route }) {
//   return (
//     <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>📄 Détail ID: {route.params?.id}</Text>
//     </SafeAreaView>
//   );
// }

// function SettingsScreen() {
//   return (
//     <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>⚙️ Paramètres</Text>
//     </SafeAreaView>
//   );
// }

// // Stack dans l'onglet "Accueil"
// const HomeStack = createNativeStackNavigator();
// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Accueil' }} />
//       <HomeStack.Screen name="Details" component={DetailsScreen} />
//     </HomeStack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             if (route.name === 'Accueil') iconName = 'home';
//             else if (route.name === 'Paramètres') iconName = 'user';
//             return <Icon name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: '#4a90e2',
//           tabBarInactiveTintColor: 'gray',
//           headerShown: false, // on gère les headers dans les stacks
//         })}
//       >
//         <Tab.Screen name="Accueil" component={HomeStackScreen} />
//         <Tab.Screen name="Paramètres" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }













// import * as React from "react";
// import AuhtScreen from "./src/navigation/screens/AuthScreen";
// import {NavigationContainer} from '@react-navigation/native'
// import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import Icon from 'react-native-vector-icons/FontAwesome'
// import AddScreen from "./src/navigation/screens/AddScreen";
// import HomeScreen from "./src/navigation/screens/HomeScreen";
// import StatScreen from "./src/navigation/screens/StatScreen";
// import { StatusBar , useColorScheme, SafeAreaView} from "react-native";
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';


// const Stack = createNativeStackNavigator()
// const HomeStack = createNativeStackNavigator();
// const StatistiqueStack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();


// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Accueil',  headerStyle: { backgroundColor: 'blue'}, }} />
//       <HomeStack.Screen name="Add" component={AddScreen} options={{ headerTitle: 'Ajouter', headerStyle: { backgroundColor: 'blue' }, }}/>
//     </HomeStack.Navigator>
//   );
// }

// function StatStackScreen(){
//   return (
//     <StatistiqueStack.Navigator>
//       <StatistiqueStack.Screen name="Stats" component={StatScreen} options={{ headerTitle: 'Statistiques',  headerStyle: { backgroundColor: 'blue' }, } } />
//     </StatistiqueStack.Navigator>
//   );
// }

// function NavigationTab(){
//   return(
        
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
//               if (route.name === 'Accueil') iconName = 'home';
//               else if (route.name === 'Statistiques') iconName = 'dashboard';
//               return <Icon name={iconName} size={size} color={color} />;
//             },
//             tabBarActiveTintColor: '#4a90e2',
//             tabBarInactiveTintColor: 'gray',
//             headerShown: false, 
//           })}
//         >
//           <Tab.Screen name="Accueil" component={HomeStackScreen} />
//           <Tab.Screen name="Statistiques" component={StatStackScreen} />
//         </Tab.Navigator>
//   )
// }

// export default function App(){

//   return(
//     <SafeAreaProvider style={{flex: 1}}>
//       <StatusBar
//         barStyle={'dark-content'}
//         backgroundColor={'blue'}
//       />
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//           <Stack.Screen name="Auth" component={AuhtScreen} />
//           <Stack.Screen name="App" component={NavigationTab} />
//         </Stack.Navigator>
//       </NavigationContainer>
        
//      </SafeAreaProvider>
//   )
// }






// App.js
// import React from 'react';
// import { SafeAreaView, Text, Button, View, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

// // Écrans
// function HomeScreen({ navigation }) {
//   return (
//     <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>🏠 Accueil</Text>
//       <Button title="Ouvrir le menu" onPress={() => navigation.openDrawer()} />
//     </SafeAreaView>
//   );
// }

// function ProfileScreen() {
//   return (
//     <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>👤 Profil utilisateur</Text>
//     </SafeAreaView>
//   );
// }

// function SettingsScreen() {
//   return (
//     <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>⚙️ Paramètres avancés</Text>
//     </SafeAreaView>
//   );
// }

// // Stack pour Home
// const Stack = createNativeStackNavigator();
// function HomeStackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Accueil' }} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// }

// const Drawer = createDrawerNavigator();

// // Composant personnalisé du drawer
// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Déconnexion"
//         onPress={() => alert('Déconnexion simulée')}
//       />
//       <DrawerItem
//         label="Aide"
//         onPress={() => props.navigation.navigate('Settings')}
//       />0
//     </DrawerContentScrollView>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContent={(props) => <CustomDrawerContent {...props} />}
//         screenOptions={{
//           drawerActiveBackgroundColor: '#e3f2fd',
//           drawerActiveTintColor: '#1976d2',
//           drawerLabelStyle: { marginLeft: -20 },
//         }}
//       >
//         <Drawer.Screen name="Accueil" component={HomeStackScreen} />
//         <Drawer.Screen name="Paramètres" component={SettingsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }






import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, Text, Button, View, Alert } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {

    function HomeScreen() {
        return <Text>Accueil</Text>;
    }

    function ProfileScreen() {
        return <Text>Profil</Text>;
    }


  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Accueil" component={HomeScreen} />
        <Drawer.Screen name="Profil" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}




// navigation.navigate()
// Aller vers un écran (le plus utilisé)

// navigation.push(
// Empiler un nouvel écran

// navigation.replace()
// Remplacer l’écran actuel

// navigation.goBack()
// Revenir à l’écran précédent

// navigation.pop()
// ➤ Supprimer un écran de la pile   ---- navigation.pop(2);


// navigation.popToTop()
// Retour au premier écran  ------- navigation.popToTop();



// navigation.openDrawer()
// Ouvrir le menu Drawer


// navigation.closeDrawer()
// Fermer le menu Drawer

// navigation.toggleDrawer()
// Ouvrir / Fermer automatiquement