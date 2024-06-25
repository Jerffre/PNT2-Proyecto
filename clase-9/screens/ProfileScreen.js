import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; // Asegúrate de tener instalado @expo/vector-icons

const ProfileScreen = () => {
  const { logout, userData } = useContext(AuthContext);
  const navigation = useNavigation();

  const logOut2 = () => {
    navigation.navigate('RegisterLogin');
    logout();
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
 
      { userData != null ?
      ( 
      <>
      <View style={styles.profilePicContainer}>
         <Image style={styles.profilePic}
        source={userData.avatar} />
       </View> 
      <Text style={styles.label}>Name: </Text>
      <TextInput style={styles.input}>{userData.username}</TextInput>
       <Text style={styles.label}>Mail:</Text>
       <TextInput style={styles.input}>{userData.email}</TextInput>

         <View style={styles.footer}>
           <Text style={styles.footerText}></Text>
           <Button style={styles.boton} title="Logout" onPress={() => logOut2()} color="red" />
         </View>
        </>
      ) : (
        <Text style={styles.texto}>Logueate para poder ver tu info</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop:30,
    alignItems: 'center',
    
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc', 
  },
  label: {
    alignSelf:'flex-start',
    marginBottom: 10,
    paddingLeft: 20,
    marginTop:20,
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  input:{
    alignSelf: 'center',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
    width: 300,
    backgroundColor: 'white',
    color: 'grey',
  },
  boton:{
    marginTop: 100,
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
}
});

export default ProfileScreen;
