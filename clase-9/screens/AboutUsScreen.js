import React from 'react'
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'

const AboutUsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
  
      <Text style={styles.title}>About Us</Text>
    
      <Text style={[styles.description, styles.justifiedText]}>
          Welcome to our movie search application. Our goal is to provide you with the most comprehensive 
          and up-to-date information on movies from all around the world. Whether you are looking for the 
          latest blockbuster or a classic film, our app has got you covered. We hope you enjoy using our 
          app as much as we enjoyed creating it.
      </Text>       
    
      <Text style={[styles.description, styles.justifiedText]}>
          Our team is dedicated to ensuring that you have the best possible experience. If you have any 
          feedback or suggestions, please do not hesitate to contact us. We are constantly working to 
          improve and expand our app to meet your needs.
      </Text>       
    
      <Text style={[styles.description, styles.justifiedText]}>
          Thank you for choosing our app for your movie searching needs. We look forward to serving you.
      </Text>

      <View style={styles.footer}>
                <Text style={styles.footerBold}>Regulatory Certification</Text>
                <Text style={styles.footerGray}>2024 ORT Inc.</Text>
                <Text style={styles.footerGray}>Version 2024.01</Text>
                <Text style={styles.footerGray}>All Rights Reserved.</Text>
            </View>                
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'flex-start'
  },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
    description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: 'grey'
  },
    justifiedText: {
    textAlign: 'justify'
  },
  footer: {
    marginTop: 20,
    alignItems: 'center'
  },
  footerBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  footerGray: {
    fontSize: 14,
    color: 'gray'
  }
});

export default AboutUsScreen