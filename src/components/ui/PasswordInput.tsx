import React, {useState} from "react";
import Label from "./Label";
import Input from "./Input";
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function MailInput({value, onChangeText}){

    const [showPassword, setShowPassword] = useState(false)


    return(
        <View style={styles.passwordContainer}>

   
            <Label text={"Mot de passe :"} labelStyle={styles.label}/>

            <Input 
                style={styles.input}
                value={value}
                placeholder={"mot de passe"}
                onChangeText={onChangeText}
                secureTextEntry={!showPassword}
            />

            {showPassword ? <Icon 
                    name="eye" 
                    size={20} color="gray" 
                    onPress={() => setShowPassword(!showPassword)} 
                    style={styles.icon} 
                /> : <Icon 
                    name="eye-slash" 
                    size={20} color="gray" 
                    onPress={() => setShowPassword(!showPassword)} 
                    style={styles.icon} 
                />
            }

        </View>
    )
}



const styles = StyleSheet.create({

    passwordContainer:{
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
        width:'100%'
    },
    icon:{
        position: 'absolute',
        right: 10,
        bottom: 10,
    },

})