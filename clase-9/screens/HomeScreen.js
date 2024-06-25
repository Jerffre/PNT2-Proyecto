import React, { useContext, useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, RefreshControl } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { MovieContext } from '../context/MovieContext';
import { MovieCard } from '../components/MovieCard';
import { FavoritesContext } from '../context/FavoritesContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HomeScreen = ({ navigation }) => {

    const { logout, userData} = useContext(AuthContext);
    const { moviesPremiere, fetchMoviesPremiere } = useContext(MovieContext);
    const [refreshing, setRefreshing] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(moviesPremiere);
    const {addFavoritos2} = useContext(FavoritesContext)

    useEffect(() => {
        setFilteredMovies(
            moviesPremiere.filter(movie =>
                movie.title.toLowerCase().includes(searchText.toLowerCase())
            )
        );
    }, [searchText, moviesPremiere]);

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchMoviesPremiere();
        setRefreshing(false);
    };

    
    const renderItem = ({ item }) => (
        <>
        <TouchableOpacity
            style={styles.touchable}
            key={item.id}
            //onPress={() => getUserData() }
            onPress={() => navigation.navigate('MovieDetail', { movie: item, user: userData })}
        >
            <MovieCard
                title={item.title}
                overview={item.overview}
                image={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path}
                item={item}
            />
         <Button title='♥ agregar favorito' onPress = {() => addFavoritos2(item)} color="red" />   
        </TouchableOpacity>
        </>
    );

    return (
        <>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search for a movie..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <Icon
                    name="search"
                    size={20}
                    color="gray"
                    style={styles.searchIcon}
                />
            </View>
        <View style={styles.container}>
            <FlatList 
                data={filteredMovies}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.flatListContainer}
                numColumns={1}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
                <View style={styles.footer}>
                    <Button title="Logout" onPress={() => logout()} color="red" />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems:'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        margin: 10,
        backgroundColor:'white',
    },
    searchBar: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    flatListContainer: {
        justifyContent: 'center',
    },
    touchable: {
        flex: 1,
        margin: 10,
    },
    footer: {
        marginTop: 20,
    },
});

export default HomeScreen;