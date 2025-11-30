import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import ImageProfil from "../ui/Image";
import Label from "../ui/Label";
import DetailLabel from "../DetailsLabel";

export default function PersonalInfo({visible, valueNom, valuePrenom, valueTel, valueFiliere, source,
    textNom, textPrenom, textTel, textFiliere, onPress}){

    return(
        <>
            <Modal 
                visible={visible}
                    animationType="slide" 
            >
                <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Label labelStyle={styles.title} text={"Information Supplémentaires"}/>
                    <ImageProfil 
                        source={source} 
                        style={styles.img} 
                    />

                    <DetailLabel 
                        textNom={textNom}
                        textPrenom={textPrenom}
                        textTel={textTel}
                        textFiliere={textFiliere}
                        valueNom={valueNom}
                        valuePrenom={valuePrenom}
                        valueTel={valueTel}
                        valueFiliere={valueFiliere}
                    />

                    <TouchableOpacity onPress={ onPress}>
                        <Icon name='times' size={30} color='gray' style={styles.icon}/>
                    </TouchableOpacity>
                </View>
            </View>
            </Modal>
        </>
    )
}




const styles = StyleSheet.create({
   

     modalContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    modalContent:{
        gap:20,
        // borderWidth:2,
        paddingVertical:5
    },
    img:{
         width: 400,
          height: 300,
         borderRadius: 40 ,
         borderColor: 'blue',
         borderWidth: 2,
    },
    icon:{
        position: 'absolute',
        bottom:670,
        right: 10
    },
    title:{
        textAlign: "center",
        fontSize: 26,
        marginBottom: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
})