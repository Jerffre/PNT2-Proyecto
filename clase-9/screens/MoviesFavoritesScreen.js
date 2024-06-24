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
            <Button title="Quitar de la lista" onPress={() => deleteFavoritos2(item.id)} color="red" /> 
        </TouchableOpacity>
    );
    
    return (
        <View style={styles.container}>
            {favorites.length === 0 ? 
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>¡No tenés ninguna película en la lista!</Text>
                </View>
                :
                <FlatList
                    data={favorites}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={styles.flatListContainer}
                    numColumns={1}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
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
    }
});

export default MoviesFavoritesScreen;
