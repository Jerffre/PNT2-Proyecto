import React, { useContext } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { FavoritesContext } from '../context/FavoritesContext'

export const MovieCard = ({title, overview, image}) => {

    //console.log(overview);
    const tituloAcortado = title.length > 30 ? title.substring(0, 30) + '...' : title
    //const {addFavorite} = useContext(FavoritesContext);
    const overviewAcortado = overview.length > 50 ? overview.substring(0, 50) + '...' : overview
    const movie = {
        title,
        overview,
        image
    }

  return (
    <>
    <View style={ styles.card}>
        <Image 
            style={ styles.image}
            resizeMode='contain'
            source={{ uri: image}}
        />
        <Text style={styles.title}>{tituloAcortado}</Text>
        <Text style={styles.overview}>${overviewAcortado}</Text>
    </View>
        <Button title="Add favorites"  color="red" />        
    </>
  )
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 200,
        marginBottom: 10
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    overview:{
        fontSize: 16,
        color: 'green',
        marginBottom: 5
    },
    card:{
        borderWidth: 1,
        bordercolor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        width: "80%",
        height: 400
    }
})