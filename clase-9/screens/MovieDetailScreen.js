import React, { useContext, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export const MovieDetailScreen = ({ route }) => {

    const movie = route.params.movie;
    
    const navigation = useNavigation()

  return (
    <View style={ styles.container}>
        <Image 
            style={ styles.image}
            resizeMode='contain'
            source={{uri:'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path}}
        />
        <Text style={ styles.title}>{movie.title}</Text>
        <Text style={ styles.description}>{movie.description}</Text>       
        <Text style={ styles.category}>{movie.category}</Text>               

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    image:{
        width: '100%',
        height: 200,
        marginBottom: 10
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description:{
        fontSize: 16,
        marginBottom: 20,
    },
    category:{
        fontSize: 12,
        marginBottom: 20,
    },
    price:{
        fontSize: 18,
        color: 'green',
        marginBottom: 20
    },
    counterContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    cantidad:{
        fontSize: 18,
        marginHorizontal: 20
    }
})