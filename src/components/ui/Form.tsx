import React, {useState} from "react";
import MailInput from "./MailInput";
import PasswordInput from "./PasswordInput"
import BoutonDeConnexion from "./Button";
import { View, Text, StyleSheet } from "react-native";


export default function Form({handleSubmit}){

     const[password, setPassword] = useState("")
     const[email, setEmail] = useState("")
     const [error, setError] = useState('')

     function handleConnect(){
        handleSubmit({email, password, setError})
     }

     

    return(
        <View style={styles.FormContainer}>

            {error && (<Text style={styles.error}>{error}</Text>)}

            <MailInput 
                value={email} 
                onChangeText={(text)=>{setEmail(text); 
                setError('')}}
            />
            <PasswordInput 
                value={password} 
                onChangeText={(password)=>{setPassword(password); 
                setError('')}}
            />


            <View style={styles.buttoncontainer}>
                <BoutonDeConnexion title={"Connexion"} onPress={handleConnect}/>
            </View>

        </View>
        
    )
}


const styles = StyleSheet.create({
    FormContainer:{
       width: '100%',
        padding:30,
        paddingVertical:50,
        gap:30,
        borderWidth:2,
        borderColor: 'blue',
        borderRadius:20,
        backgroundColor: '#dff2ffe3',
    },

     buttoncontainer:{
        width: '50%',
        alignSelf: "center",
        marginTop:30,
    },

    error:{
        color: 'red',
        textAlign: 'center',
        fontSize: 15
    }
})