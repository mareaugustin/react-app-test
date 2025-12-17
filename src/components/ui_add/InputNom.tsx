import React from "react";
import Input from "../ui/Input";
import { StyleSheet } from "react-native";

export default function InputNom({value, onChangeText}){
    return <Input
              style={styles.input}
              value={value}
              onChangeText={onChangeText}
              placeholder="Nom"
              secureTextEntry={false}
            />
}



const styles = StyleSheet.create({
    input: {  borderWidth: 1, padding: 10, borderRadius: 5 },
});