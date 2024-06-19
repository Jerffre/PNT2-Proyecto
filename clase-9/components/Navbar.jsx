import React from 'react'
import { HomeScreen } from '../screens/HomeScreen'
import { MovieDetailScreen } from '../screens/MovieDetailScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const Navbar = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="MovieDetail" component={MovieDetailScreen} />
    </Tab.Navigator>
  )
}
