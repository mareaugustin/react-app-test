import React, {useState, useEffect} from "react";
import RenduDeLaListe from "../Render";
import { View, Text, FlatList, ScrollView, Image, VirtualizedList, StyleSheet } from "react-native";
import genieLogiciel from '../../data/genieLogiciel.json'
import reseauSysteme from '../../data/reseauSysteme.json'
import Label from "../ui/Label";
import FlatListGenieLogiciel from "../FlatListGenieLogiciel";
import FlatListReseau from "../FlatListReseau";



export default function ListEtudiant(){


    const [genieLogiciell, setGenieLogiciel] = useState([]);
    const [reseau, setReseau] = useState([]);

    useEffect (()=>{
        setGenieLogiciel(genieLogiciel)
        setReseau(reseauSysteme)
    }, [])


    return(
        <View style={styles.mainContainer}>

            <View style={styles.containerTitle}>
                <Label labelStyle={styles.title} text={"Liste des etudiants par filière"}/>
            </View>

            <View style={styles.columns}>
                
                <FlatListGenieLogiciel filiereGenie={genieLogiciell}/>   

                <FlatListReseau filiereReseau={reseau}/>   
            </View>
                    
        </View>
    )
}




const styles = StyleSheet.create({
    mainContainer:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent:'center',
        marginVertical:100,
    },

    containerTitle: { 
        marginTop: 10, 
        marginBottom: 8 
    },
    title: { 
        fontSize: 23, 
        fontWeight: "700", 
        textAlign: "center",
        textDecorationLine: 'underline' 
    },
    columns: { 
        flexDirection: "row", 
        width: "100%", 
        paddingHorizontal: 12, 
        justifyContent: "space-between" 
    },
});