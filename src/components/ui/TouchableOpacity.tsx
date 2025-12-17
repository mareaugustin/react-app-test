import React from "react";
import { TouchableOpacity } from "react-native";


export default function ButtonTouchable({style, click, disabled, children}){
    return <TouchableOpacity 
                style={style}
                onPress={click}
                disabled={disabled}
            > {children}</TouchableOpacity >
}