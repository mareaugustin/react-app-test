import React, {useState} from "react";
import { View , TouchableOpacity, ActivityIndicator, TextInput, Text, StyleSheet} from "react-native";



export default function AddScreen({navigation}){

    const[nom, setNom] = useState("");
    const[prenom, setPrenom] = useState("");
    const[age, setAge] = useState("");
    const[filiere, setFiliere] = useState("");
    const[genre, setGenre] = useState("");
    const[message, setMessage] = useState("");
    const[error, setError] = useState("");
    const[loading, setLoading] = useState(false);


    function handleAdd(){
        setLoading(true)

        if(nom === '' || prenom === '' || age === '' || filiere === '' || genre === ''){
            setError('Veuillez remplir tous les champs')
            setLoading(false)
            return
        }

        setMessage('Ajout réussi')
        setNom('')
        setPrenom('')
        setAge('')
        setFiliere('')
        setGenre('')

        setTimeout(() => {
            setLoading(false)
            navigation.navigate('Home', {nom, prenom, age, filiere, genre})
        }, 1000);
    }


    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View  style={styles.containerForm}>
            
                {message && <Text style={styles.message}>{message}</Text>}
                {error && <Text style={styles.error}>{error}</Text>}

                <View style={styles.containerFormName}>
                    <Text style={styles.titl}>Nom</Text>
                    <TextInput 
                        value={nom}
                        onChangeText={(nom)=> {setNom(nom), setMessage(''), setError('')}}
                        placeholder="nom"
                        style={styles.input}
                    />
                </View>

                <View style={styles.containerFormName}>
                    <Text style={styles.titl}>Prenom</Text>
                    <TextInput 
                        value={prenom}
                        onChangeText={(prenom)=> {setPrenom(prenom), setMessage(''), setError('')}}
                        placeholder="prenom"
                        style={styles.input}
                    />
                </View>

                <View style={styles.containerFormName}>
                    <Text style={styles.titl}>Age</Text>
                    <TextInput 
                        value={age}
                        onChangeText={(age)=> {setAge(age), setMessage(''), setError('')}}
                        placeholder="age"
                        style={styles.input}
                    />
                </View>

                <View style={styles.containerFormName}>
                    <Text style={styles.titl}>Filière</Text>
                    <TextInput 
                        value={filiere}
                        onChangeText={(filiere)=> {setFiliere(filiere), setMessage(''), setError('')}}
                        placeholder="filiere"
                        style={styles.input}
                    />
                </View>

                <View style={styles.containerFormName}>
                    <Text style={styles.titl}>Genre</Text>
                    <TextInput 
                        value={genre}
                        onChangeText={(genre)=> {setGenre(genre), setMessage(''), setError('')}}
                        placeholder="genre"
                        style={styles.input}
                    />
                </View>


                <TouchableOpacity style={styles.button} onPress={handleAdd}
                    disabled={!nom.trim() || !prenom.trim() || !age.trim() || !filiere.trim() || !genre.trim() || loading}
                >
                    {loading ? (<ActivityIndicator color="#fff"/> 
                    ) : (
    
                    <Text style={styles.buttonTilte}>Ajouter</Text>
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
        width: '80%',
        gap:20,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: 'blue'
        
    },
    containerFormName:{
        position: 'relative'
    },

    titl:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:5
    },

    input:{
        borderWidth:1,
        width: '100%',
        fontSize: 18,
        fontWeight: 'semibold',
        borderColor: 'gray',
        borderRadius: 10,
        padding:10
    },

    button:{
        marginTop: 20,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonTilte:{
        color: 'white',
        fontSize: 18,
    }
})