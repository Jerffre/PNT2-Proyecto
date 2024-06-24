import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext()

const url = 'https://666ae3b37013419182d1589d.mockapi.io/FreshTomatoes/';

export const AuthProvider = ({ children }) => {

    const [status, setStatus] = useState('checking');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        
        const loadUserData = async () => {
            try {
                const user= await AsyncStorage.getItem('user');
                if (user) {
                    setUserData(JSON.parse(user));
                }
            } catch (error) {
                console.error('Failed to load user data:', error);
            }
        };

        loadUserData();
        
        const cargarEstadoAuth = async () => {
            const isAuthenticated = await AsyncStorage.getItem('isAuthenticated')

            if(isAuthenticated === 'true'){
                setStatus('authenticated')
            }else{
                setStatus('unauthenticated')
            }

        };

        cargarEstadoAuth()
    }, [])

    const getUserData = async () => {
        try {
            //console.log(await AsyncStorage.getItem('user'))
            return await AsyncStorage.getItem('user')
        } catch (error) {
            
        }
    }

    const login = async (username, password) => {

        try {
            
            const respuesta = await fetch(`${url}users`);
            const users = await respuesta.json() 
            
            const user = users.find( element => element.username === username && element.password === password)     
      
            if (user){  
                await AsyncStorage.setItem('isAuthenticated', 'true')
                await AsyncStorage.setItem('user',  JSON.stringify(user))
                
                setUserData(user)
                setStatus('authenticated')
                
            }else{
                setStatus('unauthenticated')
            }
            
        } catch (error) {
            console.error('Error en el fetch: ', error)
            alert('Error en login')
        }
    }

    const register = async (username, email, password) => {

        try {
            const respuesta = await fetch(`${url}users`,{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

            if(respuesta.ok){
                alert('Registro Exitoso')
            } else {
                alert('Error en el registro');
            }
        } catch (error) {
            console.error('Fallo el registro: ', error)
            alert('Error al registrarse')
        }
    }

    const logout = async () => {
        
        await AsyncStorage.removeItem('isAuthenticated');
        await AsyncStorage.removeItem('user');
        setStatus('unauthenticated')
        await setUserData(null);
    }

 return (
    <AuthContext.Provider value={{ status, login, register, logout,  getUserData, userData}}>
        { children }
    </AuthContext.Provider>
 )
}

