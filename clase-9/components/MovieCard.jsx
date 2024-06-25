import React, { useContext } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { FavoritesContext } from '../context/FavoritesContext'

export const MovieCard = ({title, overview, image}) => {

    //console.log(overview);
    //const {addFavorite} = useContext(FavoritesContext);
    // const movie = {
    //     title,
    //     overview,
    //     image
    // }
    const tituloAcortado = title.length > 30 ? title.substring(0, 30) + '...' : title
    const overviewAcortado = overview.length > 70 ? overview.substring(0, 70) + '...' : overview

  return (
    <View style={ styles.card}>
        <Image 
            style={ styles.image}
            resizeMode='contain'
            source={{ uri: image}}
        />
        <Text style={styles.title}>{tituloAcortado}</Text>
        <Text style={styles.overview}>{overviewAcortado}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 200,
        
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 14,
    },
    overview:{
        fontSize: 16,
        color: 'grey',
        marginBottom: 5
    },
    card:{
        borderWidth: 1,
        bordercolor: 'red',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#F0F0F0',
        width: "96%",
        alignItems: 'center',

    }
})