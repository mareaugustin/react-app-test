import React from "react";
import  {Text, TextInput} from 'react-native'


export default function Input({style, value, placeholder, onChangeText, secureTextEntry}){
    return <TextInput 
                style={style}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
}