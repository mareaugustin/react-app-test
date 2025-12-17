import React, {useState} from "react";
import { View, ActivityIndicator, Text,Modal, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'


export default function AuhtScreen({navigation}){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    

    function handleConnect(){
        setLoading(true)

        if(username === '' || password === ''){
            setError('Veuillez remplir tous les champs')
            setLoading(false)
            return
        }

        if(username !== 'admin' || password !== 'admin'){
            setError('Nom d\'utilisateur ou mot de passe incorrect')
            setLoading(false)
            return
        }

        if(username === 'admin' && password === 'admin'){
            setMessage('Connexion réussie')
            setUsername('')
            setPassword('')
            setTimeout(() => {
                setLoading(false)
            navigation.navigate('App')
            }, 2000);
        }
    }

    return(

        <View style={{flex: 1, backgroundColor: '#cbe5ffff'}}>
            <View style={{ position:'absolute', borderRadius:50, height:'65%', bottom:0, width:'100%', justifyContent: 'center', gap:30, alignItems: 'center', backgroundColor: '#e8f2fcff'}}>
            <Text style={styles.title}>Connexion</Text>

            {message && <Text style={styles.message}>{message}</Text>}
            {error && <Text style={styles.error}>{error}</Text>}

            <View style={styles.containerForm}>
                <View style={styles.containerFormName}>
                    <Text style={styles.titl}>Username</Text>
                    <TextInput 
                        value={username}
                        onChangeText={(username)=> {setUsername(username), setMessage(''), setError('')}}
                        placeholder="usernanme"
                        style={styles.input}
                    />
                </View>

                 <View >
                   
                    <View style={styles.containerFormName}>
                    <Text style={styles.titl}>Password</Text>
                    <TextInput 
                        value={password}
                        onChangeText={(password)=> {setPassword(password), setMessage(''), setError('')}}
                        placeholder="password"
                        secureTextEntry={!show}
                        style={styles.input}
                    />
                    </View>
                     <View style={styles.icon}>
                        {show ? <Icon name='eye' size={24} color='gray' onPress={() => setShow(!show)} /> : <Icon name='eye-slash' size={24} color='gray' onPress={() => setShow(!show)}/>}
                        
                    </View>
                </View>

            </View>

            <TouchableOpacity style={styles.button} onPress={handleConnect}
                disabled={!username.trim() || !password.trim() || loading}
            >
                {loading ? (<ActivityIndicator color="#fff"/> 
                ) : (

                <Text style={styles.buttonTilte}>Connexion</Text>
                )}
            </TouchableOpacity>
            </View>
            
        </View>

    )
}


const styles = StyleSheet.create({
    icon:{
        position: 'absolute',
        right: 10,
        bottom: 15
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 10
        
    },
    message:{
        fontSize: 18,
        color: 'green',
        marginBottom: 10
    },

    error:{
        fontSize: 18,
        color: 'red',
        marginBottom: 10
    },

    containerForm:{
        borderWidth: 2,
        width: '80%',
        gap:20,
        paddingVertical:30,
        paddingHorizontal:30,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: 'blue'
        
    },
    containerFormName:{
        position: 'relative'
    },

    titl:{
        fontSize: 20,
        fontWeight: 'semibold',
        marginBottom:5
    },

    input:{
        borderWidth:1,
        width: '100%',
        fontSize: 20,
        fontWeight: 'semibold',
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 10
    },

    button:{
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
    },

    buttonTilte:{
        fontSize: 18,
        color:'white',
        fontWeight: 'bold'
    }

})