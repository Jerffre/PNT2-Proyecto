import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

export const MovieDetailScreen = ({ route }) => {

    const {movie, user} = route.params;
    
    const navigation = useNavigation();
   
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
        fontWeight: '500',
        marginTop: 10,
        paddingBottom:5,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: 'grey',
    },
    justifiedText: {
        textAlign: 'justify'
    }
});
