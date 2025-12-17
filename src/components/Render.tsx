import React, {useState, useEffect} from "react";
import {View,TouchableOpacity , Text, Modal, StyleSheet, Alert} from 'react-native'
import ImageProfil from "./ui/Image";
import Label from "./ui/Label";
import {images} from '../data/images'
import PersonalInfo from "./pages/PersonalInfo";



export default function RenduDeLaListe({item}){

    const [details, setDetails] = useState(false)
    const [person, setPerson] = useState(null)


    function handleClick(){
        setPerson(item)
        setDetails(true)
            
    }

    return(
        <>
        <TouchableOpacity 
            onPress={handleClick}
        >
            <View style={styles.row}>
                
                <ImageProfil source={images[item.photo]} style={styles.photo} />
                <View style={styles.container}>
                    <Label labelStyle={styles.name} text={item.nom}/>
                    <Label labelStyle={styles.prenom} text={item.prenom}/>
                </View>
                
            </View>
        </TouchableOpacity>


        {person && (

            <PersonalInfo 
                visible={details} 
                source={images[person.photo]}
                textNom={"Nom :"}
                textPrenom={"Prénom :"}
                textTel={"Telephone :"}
                textFiliere={"Spécialité :"}
                valueNom={person.nom}
                valuePrenom={person.prenom}
                valueTel={person.telephone}
                valueFiliere={person.filiere}
                onPress={() => setDetails(false)}
            />
            
            )}
        
        </>
    )
}

const styles = StyleSheet.create({
    row: { 
        flexDirection: "row", 
        alignItems: "center", 
        paddingVertical: 8, 
        borderBottomWidth: 0.5, 
        borderColor: "#ddd" 
        
    },
    container:{
        flexDirection: 'row'
    },
    photo: { 
        width: 44, 
        height: 44, 
        borderRadius: 22, 
        marginRight: 10, 
    },
    name: { 
        fontSize: 18, 
        fontWeight: "500" 
    },
    prenom: { 
        fontSize: 18, 
       
        color: "#555" 
    },
     
})