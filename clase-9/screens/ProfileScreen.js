import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
      {userData != null ? (
        <>
          <View style={styles.profilePicContainer}>
            <Image style={styles.profilePic} source={userData.avatar} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.labelBold}>Name: </Text>
            <Text style={styles.text}>{userData.username}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.labelBold}>Mail: </Text>
            <Text style={styles.text}>{userData.email}</Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity onPress={logOut2} style={styles.logoutButton}>
              <FontAwesome name="sign-out" size={70} color="red" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text>Logueate para poder ver tu info</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 200, 
    height: 200, 
    borderRadius: 100, 
    backgroundColor: '#ccc',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelBold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    marginTop: 20,
  },
  logoutButton: {
    padding: 30,
  },
});

export default ProfileScreen;
