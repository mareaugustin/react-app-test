import React, {useState, useEffect} from "react";
import RenduDeLaListe from "../Render";
import { View, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";
import genieLogiciel from '../../data/genieLogiciel.json'
import reseauSysteme from '../../data/reseauSysteme.json'
import Label from "../ui/Label";
import FlatListGenieLogiciel from "../FlatListGenieLogiciel";
import FlatListReseau from "../FlatListReseau";
import UniqueListe from "../UniqueList";



export default function ListEtudiant(){


    // const [genieLogiciell, setGenieLogiciel] = useState([]);
    // const [reseau, setReseau] = useState([]);

    const [clickFiliere, setClickFiliere] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState({
        "Génie Logiciel" : [],
        "Réseaux et Système": []
    })

    // useEffect (()=>{
    //     setGenieLogiciel(genieLogiciel)
    //     setReseau(reseauSysteme)
    // }, [])

    useEffect (()=>{

        const ChargerListEtudiant = async() =>{
            try{
                const genieLogiciel = require('../../data/genieLogiciel.json');
                const reseauSysteme = require('../../data/reseauSysteme.json');

                setData({
                    "Génie Logiciel": genieLogiciel,
                    "Réseaux et Système": reseauSysteme,
                });
                
            } catch(e){
                setError('Erreur de récupération de la liste')
            }
        };

        ChargerListEtudiant()
    }, [])


    async function selectFiliere(filiere) {
        setLoading(true);
        setClickFiliere(filiere);
        
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    function Retour() {
        setClickFiliere(null);
    };

    return(
        <View style={styles.mainContainer}>

            <View style={styles.containerTitle}>
                <Label labelStyle={styles.title} text={"Liste des etudiants par filière"}/>
            </View>

                    
        {clickFiliere ? (
                <UniqueListe
                    filiere={clickFiliere}
                    data={data[clickFiliere]}
                    loading={loading}
                    retour={Retour}
                />
            ) : (
                <View style={styles.selectionContainer}>
                    
                    <TouchableOpacity
                        style={[styles.filiereButton, styles.genieButton]}
                        onPress={() => selectFiliere("Génie Logiciel")}
                        disabled={loading}
                    >
                        <Label 
                            labelStyle={styles.buttonText} 
                            text={"Génie Logiciel"}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[styles.filiereButton, styles.reseauButton]}
                        onPress={() => selectFiliere("Réseaux et Système")}
                        disabled={loading}
                    >
                        <Label 
                            labelStyle={styles.buttonText} 
                            text={"Réseaux et Système"}
                        />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}




const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    containerTitle: {
        marginTop: 10,
        marginBottom: 30,
    },
    title: {
        fontSize: 23,
        fontWeight: "700",
        textAlign: "center",
        textDecorationLine: 'underline'
    },
    selectionContainer: {
        width: "100%",
        alignItems: "center",
        gap: 20,
    },
    filiereButton: {
        width: "80%",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    genieButton: {
        backgroundColor: 'blue',
    },
    reseauButton: {
        backgroundColor: 'green',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: 'white',
    }
});