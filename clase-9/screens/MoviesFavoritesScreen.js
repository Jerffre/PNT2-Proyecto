import React, { useContext, useEffect, useState } from 'react'
import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, RefreshControl } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { MovieContext } from '../context/MovieContext'
import { MovieCard } from '../components/MovieCard'
import { FavoritesContext } from '../context/FavoritesContext'

export const MoviesFavoritesScreen = ({navigation}) => {      
    
    const { moviesPremiere, fetchMoviesPremiere } = useContext(MovieContext);
    const {favorites, deleteFavoritos2} = useContext(FavoritesContext)
    // const { getFavorites} = useContext(FavoritesContext);

    // const favoritesMovies = getFavorites()

    const renderItem = ({ item }) => (
        <>
        <TouchableOpacity 
        style={styles.touchable}
        key={item.id}
        onPress={() => navigation.navigate('MovieDetail', { movie: item})}
        >
        <MovieCard 
            title={item.title}
            overview={item.overview}
            image={'https://image.tmdb.org/t/p/w500/'+item.backdrop_path}            
            />
        <Button title="Quitar de la lista" onPress = {() => deleteFavoritos2(item.id)} color="red" /> 
        </TouchableOpacity>

        </>
    )
    
  return (
    <View style={styles.container}>
                {favorites.length === 0 ? 
        <View>

        <Text>No tenes ninguna pelicula en la lista </Text>
        </View>
         
         :
         
        <FlatList
            data={favorites}
            renderItem={ renderItem }
            keyExtractor={ item => item.id.toString()}
            contentContainerStyle={ styles.flatListContainer}
            numColumns={1}
        />
                }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    },
    carrito:{
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center'
    },
    scrollContainer:{
        alignItems: 'center'
    },
    flatListContainer:{
        justifyContent: 'center'
    },
    touchable:{
        flex: 1,
        margin: 10,
    }
})
