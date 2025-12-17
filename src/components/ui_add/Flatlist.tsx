import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

export default function List({onPress, item, source}){
    return (
        <View style={styles.cardContainer}>
            <View style={styles.contentContainer}>
                <Image source={source} style={styles.photo}/>
                
                <View style={styles.textContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>
                            {item.prenom} {item.nom}
                        </Text>
                    </View>
                    
                    <View style={styles.ageContainer}>
                        <Text style={styles.ageLabel}>Âge : </Text>
                        <Text style={styles.ageValue}>{item.age} ans</Text>
                    </View>
                </View>
            </View>
            
            <TouchableOpacity 
                onPress={onPress} 
                style={styles.deleteButton}
                activeOpacity={0.7}
            >
                <Text style={styles.deleteIcon}>🗑️</Text>
                <Text style={styles.deleteText}>Supprimer</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 12,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#4a90e2',
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    nameContainer: {
        marginBottom: 4,
    },
    nameText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    ageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f7ff',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    ageLabel: {
        fontSize: 12,
        color: '#4a90e2',
        fontWeight: '500',
    },
    ageValue: {
        fontSize: 13,
        fontWeight: '600',
        color: '#2c3e50',
    },
    deleteButton: {
        backgroundColor: '#ffeaea',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 70,
        marginLeft: 8,
    },
    deleteIcon: {
        fontSize: 16,
        marginBottom: 2,
    },
    deleteText: {
        fontSize: 10,
        color: '#e74c3c',
        fontWeight: '500',
    },
})