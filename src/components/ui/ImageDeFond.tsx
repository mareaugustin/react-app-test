import React from "react";
import { ImageBackground } from "react-native";



export default function ImageDeFond({source, style, children}){
    return <ImageBackground source={source} style={style}>{children}</ImageBackground> 
}