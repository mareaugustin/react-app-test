import React, {useState} from "react";
import Label from "./Label";
import Input from "./Input";
import {View, StyleSheet} from 'react-native'


export default function MailInput({value, onChangeText}){

    

    return(
        <View style={styles.mailContainer}>
            <Label text={"Adresse e-mail :"} labelStyle={styles.label}/>

            <Input 
                style={styles.input}
                value={value}
                placeholder={"Entrez votre mail"}
                onChangeText={onChangeText}
                secureTextEntry={false}
            />

        </View>
    )
}



const styles = StyleSheet.create({

    mailContainer:{
        gap: 10,
    },

    label:{
        fontSize: 18,
        fontWeight: '500'
    },

    input:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        width:'100%',
    }
})