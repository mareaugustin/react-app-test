import React, {useState, useEffect} from "react";
import { View, StyleSheet } from "react-native";
import Label from "../ui/Label";
import ButtonTouchable from "../ui/TouchableOpacity";
import EtudiantGenieLogiciel from "./EtudiantGenieLogiciel";
import EtudiantReseau from "./EtudiantReseau";


export default function Filiere(){

    const [genieLogiciell, setGenieLogiciel] = useState(false);
    const [reseau, setReseau] = useState(false);
    const [selectFiliere, setSelectFiliere] = useState(true)
    

    function ListGenieLogiciel(){
        setGenieLogiciel(true)
        setSelectFiliere(false)
    }

    function ListReseau(){
        setReseau(true)
        setSelectFiliere(false)
    }

    function RetourGenie(){
        setSelectFiliere(true)
        setGenieLogiciel(false)
    }

    function RetourReseau(){
        setSelectFiliere(true)
        setReseau(false)
    }

    return(
        <View style={styles.mainContainer}>

            {selectFiliere && (
                <>
                <View style={styles.containerTitle}>
                    <Label labelStyle={styles.title} text={"Liste des etudiants par filière"}/>
                </View>

                <View style={styles.selectionContainer}>
                    
                    <ButtonTouchable 
                        style={[styles.filiereButton, styles.genieButton]}
                        click={()=>{ListGenieLogiciel()}}
                        disabled={false}
                        children={<Label 
                                    labelStyle={styles.buttonText} 
                                    text={"Génie Logiciel"}
                                />}
                    />

                    <ButtonTouchable 
                        style={[styles.filiereButton, styles.reseauButton]}
                        click={()=>{ListReseau()}}
                        disabled={false}
                        children={<Label 
                                    labelStyle={styles.buttonText} 
                                    text={"Réseaux et Système"}
                                />}
                    />
                </View>
                </>
                )}

                {genieLogiciell && (
                    <EtudiantGenieLogiciel
                        retour={RetourGenie}
                    />
                   
                )}

                {reseau && (
                    <EtudiantReseau
                        retour={RetourReseau}
                    />
                   
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