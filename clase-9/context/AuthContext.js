import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext()

const url = 'https://666ae3b37013419182d1589d.mockapi.io/FreshTomatoes/';

export const AuthProvider = ({ children }) => {

    const [status, setStatus] = useState('checking');

    useEffect(() => {
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


    const login = async (username, password) => {

        try {
            
            const respuesta = await fetch(`${url}users`);
            const users = await respuesta.json()
            console.log('users: ', users);
            
            const user = users.find( element => element.username === username && element.password === password)
            
            console.log('user: ', user);
            if (user){
                await AsyncStorage.setItem('isAuthenticated', 'true')
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
        setStatus('unauthenticated')
    }
   


  
  
 return (
    <AuthContext.Provider value={{ status, login, register, logout}}>
        { children }
    </AuthContext.Provider>
 )
}

