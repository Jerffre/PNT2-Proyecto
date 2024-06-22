import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const MovieDetailScreen = ({ route }) => {

    const movie = route.params.movie;
    
    const navigation = useNavigation();

    console.log(movie)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image 
                style={styles.image}
                resizeMode='contain'
                source={{ uri: 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path }}
            />
            <Text style={styles.title}>{movie.title}</Text>
            
            <Text style={[styles.description, styles.justifiedText]}>{movie.overview}</Text>

            <Text style={styles.label}>Original Language:</Text>
            <Text style={[styles.description, styles.justifiedText]}>{movie.original_language}</Text>        
            
            <Text style={styles.label}>Release Date:</Text>
            <Text style={styles.description}>{movie.release_date}</Text>       
            
            <Text style={styles.label}>Vote Average:</Text>
            <Text style={styles.description}>{movie.vote_average}</Text>               
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'flex-start'
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20        
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    justifiedText: {
        textAlign: 'justify'
    }
});
