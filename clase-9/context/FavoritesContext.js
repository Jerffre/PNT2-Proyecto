import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthContext';

export const FavoritesContext = createContext()

const url = 'https://666ae3b37013419182d1589d.mockapi.io/FreshTomatoes/';

export const FavoritesProvider = ({ children }) => {

    const [status, setStatus] = useState('checking');

    const user = useContext(AuthContext)

    const getFavorites = async () => {

        try {

            const respuesta = await fetch(`${url}favorites`);
            const favorites = await respuesta.json()

            const user_id = user.find( element => element.user_id == user.id)

            
            
        } catch (error) {
            
        }

    }

}   