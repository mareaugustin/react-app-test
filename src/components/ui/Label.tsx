import React from "react";
import  {Text} from 'react-native'


export default function Label({text, value="", labelStyle}){
    return <Text style={labelStyle}>{text} {value}</Text>
}