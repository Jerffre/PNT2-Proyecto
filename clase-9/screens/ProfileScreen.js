import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = ({children}) => {
  const { logout, userData } = useContext(AuthContext);
      
  const navigation = useNavigation()

  const logOut2 = () => {
    navigation.navigate('RegisterLogin')
    logout()
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
      <Text style={styles.label}>Name </Text>
      <Text style={styles.label}>{userData.username}</Text>
       <Text style={styles.label}>Mail</Text>
       <Text style={styles.Text}>{userData.email}</Text>

         <View style={styles.footer}>
           <Text style={styles.footerText}></Text>
           <Button title="Logout" onPress={() => logOut2()} color="red" />
         </View>
        </>
         )
      : (<Text> holu </Text>)
      }

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
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc', // Just for visualization, you can remove it
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  footerText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#e0f7fa',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  homeIcon: {
    width: 24,
    height: 24,
  },
});

export default ProfileScreen;
