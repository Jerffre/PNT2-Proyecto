import React, { useContext, useEffect, useState } from 'react'
import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, RefreshControl } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { MovieContext } from '../context/MovieContext'
import { MovieCard } from '../components/MovieCard'

export const HomeScreen = ({navigation}) => {

   const { logout } = useContext(AuthContext)
    
    const { moviesPremiere, fetchMoviesPremiere } = useContext(MovieContext)
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = async () => {
         setRefreshing(true);
        await fetchMoviesPremiere()
        setRefreshing(false)
    };
   

    //  useEffect(() => {
    //    fetch('https://fakestoreapi.com/products')
    //      .then(response => response.json())
    //     .then( data => setProductos(data))
    //  }, [])

    const renderItem = ({ item }) => (
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
        </TouchableOpacity>
    )
    
  return (
    <View style={styles.container}>
        
        
        <FlatList
            data={moviesPremiere}
            renderItem={ renderItem }
            keyExtractor={ item => item.id.toString()}
            contentContainerStyle={ styles.flatListContainer}
            numColumns={2}
            refreshControl={
                <RefreshControl 
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        />
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
        maxWidth: '45%'
    }
})