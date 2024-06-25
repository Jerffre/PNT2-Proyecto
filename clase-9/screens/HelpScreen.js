import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const HelpScreen = () => {
  return (
      <ScrollView style={styles.container}>
          <View style={styles.section}>
              <Text style={styles.title}>Frequently Asked Questions</Text>
              <Text style={styles.question}>How can I add a movie to favorites?</Text>
              <Text style={styles.answer}>To add a movie to favorites, press the heart icon at the bottom of the movie card.</Text>
              
              <Text style={styles.question}>How can I remove a movie from favorites?</Text>
              <Text style={styles.answer}>To remove a movie from favorites, go to the favorites list and press the "Remove from list" button on the movie card.</Text>

              <Text style={styles.question}>How can I view a movie details?</Text>
              <Text style={styles.answer}>To see a movie detail you have to press on any movie you want and you will be redirected to its detail.</Text>
          </View>

          <View style={styles.section}>
              <Text style={styles.title}>Contact</Text>
              <Text style={styles.contactInfo}>Email: support@moviesapp.com.ar</Text>
              <Text style={styles.contactInfo}>Phone: +58 911 1234-5678</Text>
          </View>

          <View style={styles.sectionAbout}>
              <Text style={styles.title}>About the App</Text>
              <Text style={styles.aboutText}>MoviesApp is an application developed for movie lovers. It allows you to search, view details, and save your favorite movies in one place.</Text>
          </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff'
  },
  section: {
      marginBottom: 20
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10
  },
  question: {
      fontSize: 18,
      fontWeight: '500',
      marginTop: 10,
      paddingTop:10,
  },
  answer: {
      fontSize: 16,
      marginTop: 5,
      marginBottom: 20,
      color: 'grey',
      
  },
  contactInfo: {
      fontSize: 16,
      marginTop: 5,
      color: 'grey',
  },
  aboutText: {
      fontSize: 16,
      marginTop: 5,
      color: 'grey',
  },
  sectionAbout:{
    marginBottom:20,
    marginTop:10,
   }
});

export default HelpScreen;