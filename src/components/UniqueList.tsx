import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Text, TouchableOpacity, StyleSheet} from "react-native";
import RenduDeLaListe from "./Render";
import Label from "./ui/Label";

export default function UniqueListe({ filiere, data, loading, retour }) {

    const [etudiants, setEtudiants] = useState([]);


    useEffect(() => {
         if (data && Array.isArray(data)) {
        setEtudiants(data);
    }
    }, [data]);

    return (
        <View style={styles.container}>

            <TouchableOpacity 
                style={styles.buttonRetour}
                onPress={retour}
            >
                <Label
                    labelStyle={styles.textRetour}
                    text={'Retour'}
                />
                
            </TouchableOpacity>


            <View style={styles.title}>
                <Label
                    labelStyle={styles.filiereTitle}
                    text={`${filiere}`}
                />
                <Label 
                    labelStyle={styles.countText} 
                    text={`${etudiants.length} étudiant(s)`}
                />
            </View>

            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator 
                        size="large" 
                        color={filiere === "Génie Logiciel" ? "blue" : "green"}
                    />
                    <Label 
                        labelStyle={styles.loadingText} 
                        text={`Chargement de la liste ${filiere}...`}
                    />
                </View>
            ) : etudiants.length > 0 ? (

                    <FlatList
                        data={etudiants}
                        renderItem={({ item }) => <RenduDeLaListe item={item} />}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        style={styles.list}
                        contentContainerStyle={styles.listContent}
                    />
            ) : (
                <View style={styles.emptyContainer}>
                    
                    <Label 
                        labelStyle={styles.noContent} 
                        text={'Aucun étudiant'}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    buttonRetour: {
        alignSelf: "flex-start",
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    textRetour: {
        fontSize: 16,
        color: "#007AFF",
        fontWeight: "500",
    },
    title: {
        alignItems: "center",
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#E0E0E0",
    },
    filiereTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "#333",
    },
    countText: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText: {
        marginTop: 20,
        fontSize: 16,
        color: "#666",
    },
    list: {
        width: "100%",
    },
    listContent: {
        paddingBottom: 20,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noContent: {
        fontSize: 16,
        color: "#999",
        textAlign: "center",
    },
});