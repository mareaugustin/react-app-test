import React, { useState, useEffect } from "react";
import {View, Text,ScrollView, RefreshControl, FlatList ,ActivityIndicator, StyleSheet} from 'react-native'
import ButtonTouchable from "../ui/TouchableOpacity";
import Label from "../ui/Label";
import axios from "axios";
import GetUrl from '../../getUrl'
import RenduDeLaListe from "../Render";

export default function EtudiantGenieLogiciel({retour}){

    const [genieLogiciel, setGenieLogiciel] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false);

    const {urlGenie} = GetUrl()

    useEffect(()=>{
        ListGenieLogiciel()
    }, [])

    async function ListGenieLogiciel(){
        setLoading(true)
        setError(null)

        try{
            const response = await axios.get(`${urlGenie}`)
            setGenieLogiciel(response.data)

        } catch(error){
            setError('Erreur de récupération de données génie logiciel')

        } finally{
            setLoading(false)
        }
    }

  

    if (loading) return (
         <View style={styles.loadingContainer}>
            <ActivityIndicator 
                size="large" 
                color={'blue'}
            />
            <Label 
                labelStyle={styles.loadingText} 
                text={'Chargement Génie Logiciel...'}
            />
        </View>
    ) 

    if (error) return (
        <View style={styles.error}>
            <Text>{error}</Text>
        </View>
    )

    return (
        <View style={{flex: 1,}}>
            <ButtonTouchable
                style={styles.backButton}
                click={retour}
                disabled={false}
                children={
                    <Label
                        labelStyle={styles.label}
                        text={'Retour'}
                    />
                }
            />

                <ScrollView
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={async () => {
                          setRefreshing(true);
                          await ListGenieLogiciel();
                          setRefreshing(false);
                        }}
                      />
                    }
                  >
                <FlatList
                    data={genieLogiciel}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <RenduDeLaListe item={item}/> }
                    showsVerticalScrollIndicator= {false}
                    style={[styles.flatist, styles.listContent]}
                />
            </ScrollView>
        </View>
    )
}




const styles = StyleSheet.create({
    flatist: {
        flex: 1,
        width: 380,
        marginTop: 10
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#555'
    },
    error: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButton: {
        padding: 10,
        backgroundColor: '#2196F3',
        margin: 10,
        borderRadius: 5
    },
    label: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    listContent: {
        paddingBottom: 20
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyText: {
        fontSize: 18,
        color: '#777'
    }
})