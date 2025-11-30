import React from "react";
import { Button } from "react-native";

/**
 * Bouton de connaxion, un composant avec ses parametres
 */
export default function BoutonDeConnexion({title, onPress}){
    return <Button title={title} onPress={onPress}/>
}