import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterLoginScreen from './screens/RegisterLoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ProductDetailScreen } from './screens/ProductDetailScreen';
import { useContext } from 'react';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { MovieProvider } from './context/MovieContext';
import { MovieDetailScreen } from './screens/MovieDetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navbar } from './components/Navbar';
import { MoviesFavoritesScreen } from './screens/MoviesFavoritesScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import HelpScreen from './screens/HelpScreen';
import ProfileScreen from './screens/ProfileScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { NotificationsProvider } from './context/NotificationsContext';
import { FavoritesProvider } from './context/FavoritesContext';

import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { NotificationsContext, NotificationsProvider} from './context/NotificationsContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// function AppTabs() { 
//   return ( 
//   <Tab.Navigator> 
//     <Tab.Screen name="SideTab" component={SideTab} options={{ headerShown: false }} /> 
//     <Tab.Screen name="HomeScreen" component={HomeScreen} /> 
//     <Tab.Screen name="MovieFavorites" component={MoviesFavoritesScreen} /> 
//   </Tab.Navigator> ); 
// }

function SideTab() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="MovieFavorites" component={MoviesFavoritesScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Help" component={HelpScreen} /> 
        <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
    </Drawer.Navigator>
  )
}

function AppNavigator(){
  const { status } = useContext(AuthContext)
  // if( status === 'checking') return ()
  return (
    <Stack.Navigator
      screenOptions={{
          backgroundColor: 'white'
        
      }}
    >
      {
        status !== 'authenticated' ? (
          
           <Stack.Screen name="RegisterLogin" component={RegisterLoginScreen} />
          
        ) : 
        (
          <Stack.Group>
            <Stack.Screen name="SideTab" component={SideTab} options={{ headerShown: false }} />            
            <Stack.Screen name="MovieDetail" component={MovieDetailScreen}/>
          </Stack.Group>
          
        )
      }

    </Stack.Navigator>
  )
  
}


export default function App() {

  return (
    <AuthProvider>
      <FavoritesProvider>
        <MovieProvider>
          <NotificationsProvider>
            <NavigationContainer>
                <AppNavigator/>            
            </NavigationContainer>
          </NotificationsProvider>
        </MovieProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}




