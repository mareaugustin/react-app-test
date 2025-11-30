import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import Label from "./ui/Label";

export default function DetailLabel({textNom, textPrenom, textTel, textFiliere, valueNom, valueFiliere, valuePrenom, valueTel}){
    return  <View style={styles.containertext}>
                <Label labelStyle={styles.label} text={textNom} value={valueNom} />
                <Label labelStyle={styles.label} text={textPrenom} value={valuePrenom} />
                <Label labelStyle={styles.label} text={textTel} value={valueTel} />
                <Label labelStyle={styles.label} text={textFiliere} value={valueFiliere} />
            </View>
}


const styles = StyleSheet.create({

    label:{
        textAlign: 'center',
        fontSize: 18,
        marginVertical:5
    },
    containertext:{
        paddingVertical: 20,
        borderRadius:20,
        borderTopLeftRadius: 50,

         borderColor: 'blue',
         borderWidth: 1,
        borderBottomRightRadius: 50,
        backgroundColor: "#becfffff" 
    },
})