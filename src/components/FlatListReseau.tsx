import React, {useState} from "react";
import {View, FlatList, TouchableOpacity, ScrollView, Text, StyleSheet} from 'react-native'
import RenduDeLaListe from "./Render";
import Label from "./ui/Label";



export default function FlatListReseau({filiereReseau}){
    
    const [list, setList] = useState(false) 

    return(
        <View style={styles.column}>

            <TouchableOpacity onPress={() => setList(!list)}>
                <Label labelStyle={styles.columnTitle} text={"MEDECINE"} />
            </TouchableOpacity>

              {list && (
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    style={styles.scroll}
                >
                        <FlatList
                            data={filiereReseau}
                            renderItem={({item})=> <RenduDeLaListe item={item}/>}
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={false}
                            style={styles.flatlist}
                        />
                </ScrollView>
             )}
        </View>
    )
}


const styles = StyleSheet.create({
     column: { 
        flex: 1, 
        marginHorizontal: 6, 
        backgroundColor: "#fff0", 
        padding: 6 ,
        borderLeftWidth:2,
        borderLeftColor:'green',
        marginTop:6
        
    },
    columnTitle: { 
        fontSize: 16, 
        fontWeight: "600", 
        marginBottom: 6, 
        textAlign: "center" ,
        backgroundColor: 'green',
        borderRadius: 5,
        borderTopLeftRadius: 20,
        paddingVertical:4,
        color: 'white',
        marginVertical:5
    },
    scroll:{
        paddingTop: 5
    },

    flatlist:{

        paddingLeft:5
    }

})