// import React from "react";
// import { TextInput, Text, View, StyleSheet } from "react-native";


// export default function FormName({value, text, onChangeText, setMessage, setError}){
//     return (
//          <View style={styles.containerFormName}>
//             <Text style={styles.titl}>Username</Text>
//             <TextInput 
//                 value={value}
//                 // onChangeText={(username)=> {setUsername(username), setMessage(''), setError('')}}
//                 onChangeText={(text) => {
//                     onChangeText(text);
//                     setMessage(setMessage);
//                     setError(setError);
//                 }}
//                 placeholder="usernanme"
//                 style={styles.input}
//             />
//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     icon:{
//         position: 'absolute',
//         right: 10,
//         bottom: 15
//     },
//     title:{
//         fontSize: 40,
//         fontWeight: 'bold',
//         textDecorationLine: 'underline',
//         marginBottom: 10
        
//     },
//     message:{
//         fontSize: 18,
//         color: 'green',
//         marginBottom: 10
//     },

//     error:{
//         fontSize: 18,
//         color: 'red',
//         marginBottom: 10
//     },

//     containerForm:{
//         borderWidth: 2,
//         width: '80%',
//         gap:20,
//         paddingVertical:30,
//         paddingHorizontal:30,
//         borderRadius: 10,
//         marginBottom: 10,
//         borderColor: 'blue'
        
//     },
//     containerFormName:{
//         position: 'relative'
//     },

//     titl:{
//         fontSize: 20,
//         fontWeight: 'semibold',
//         marginBottom:5
//     },

//     input:{
//         borderWidth:1,
//         width: '100%',
//         fontSize: 20,
//         fontWeight: 'semibold',
//         borderColor: 'gray',
//         borderRadius: 10,
//         paddingLeft: 10
//     },

//     button:{
//         backgroundColor: 'blue',
//         paddingVertical: 10,
//         paddingHorizontal: 30,
//         borderRadius: 5,
//     },

//     buttonTilte:{
//         fontSize: 18,
//         color:'white',
//         fontWeight: 'bold'
//     }

// })