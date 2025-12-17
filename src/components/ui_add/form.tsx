import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import InputNom from "./InputNom";
import InputPrenom from "./InputPrenom";
import InputAge from "./InputAge";


export default function Form({value1, value2, value3, onChangeText1, onChangeText3, onChangeText2, onPress}){
    return <View style={styles.inputRow}>
            
            <Text style={styles.text}>Nom</Text>
            <InputNom value={value1} onChangeText={onChangeText1}/>

            <Text style={styles.text}>Prénom</Text>
            <InputPrenom value={value2} onChangeText={onChangeText2}/>

            <Text style={styles.text}>Age</Text>
            <InputAge value={value3} onChangeText={onChangeText3}/>
             
            <TouchableOpacity style={styles.addButton} onPress={onPress}>
              <Text style={styles.addButtonText}>Enregistrez</Text>
            </TouchableOpacity>
          </View>
}



const styles = StyleSheet.create({

  text:{ fontSize: 18, fontWeight: 'bold'},
     inputRow: { gap: 15, marginBottom: 20, marginTop: 20 },
     addButtonText: { color: 'white', fontSize: 20 },
     addButton: { backgroundColor: '#0942faff', padding: 10, borderRadius: 5, alignSelf: 'center' },
})