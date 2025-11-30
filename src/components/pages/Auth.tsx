import React, {useEffect, useState} from "react";
import Form from "../ui/Form";
import ImageDeFond from "../ui/ImageDeFond";
import Label from "../ui/Label";
import BoutonDeConnexion from "../ui/Button";
import { View, StyleSheet, Alert, Text } from "react-native";
import ListEtudiant from "./ListEtudiant";


export default function Auth(){
    const [connexionreussie, setConnexionReussie] = useState(false)
     
    

    function handleAuth({email, password, setError}){
        // console.log('bien')
        if(email === 'millogo@gmail.com' && password === 'password'){
            setConnexionReussie(!connexionreussie)
        } else {
            setError('Informations incorrectes, veuillez réessayer!')
        }


    }


    
    return(
        <>
        {connexionreussie ?(
            Alert.alert('Connexion réussie'),
            <ListEtudiant />
        ):(

             <ImageDeFond source={require('../../assets/images/logo.jpg')} style={styles.image}>
            <View style={styles.container}>
                
                <Label text={"S'identifier"} labelStyle={styles.label}/>

                <Form handleSubmit={handleAuth}/>
                
            </View>
        </ImageDeFond>
        
        
        )}
        </>

        
       
    )
}


const styles = StyleSheet.create({

    container:{
         flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        gap:30,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor: '#201e1eaa'
    },

    image:{
        flex:1,
    resizeMode: 'cover',

    },

    label:{
        fontSize: 35,
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: 20,
        color: 'white',
        textDecorationLine:'underline'
    },

   
})