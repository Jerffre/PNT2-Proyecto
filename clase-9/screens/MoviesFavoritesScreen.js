import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MovieContext } from '../context/MovieContext';
import { FavoritesContext } from '../context/FavoritesContext';
import { MovieCard } from '../components/MovieCard';

export const MoviesFavoritesScreen = ({navigation}) => {      
    
    const { favorites, deleteFavoritos2 } = useContext(FavoritesContext);

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.touchable}
            key={item.id}
            onPress={() => navigation.navigate('MovieDetail', { movie: item })}
        >
            <MovieCard 
                title={item.title}
                overview={item.overview}
                image={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}            
            />
        <Button title="♥ quitar favorito" onPress = {() => deleteFavoritos2(item.id)} color="red" /> 
        </TouchableOpacity>
    );
    
  return (
    <View style={styles.container}>
                {favorites.length === 0 ? 
        <View>

        <Text style={styles.texto}>Your list is empty! </Text>
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
        justifyContent: 'center',
        alignItems:'center'
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
    emptyText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#555'
    },
    flatListContainer: {
        justifyContent: 'center'
    },
    touchable: {
        flex: 1,
        margin: 10,
    },
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
    }
});

export default MoviesFavoritesScreen;
