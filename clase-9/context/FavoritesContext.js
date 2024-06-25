import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthContext';

export const FavoritesContext = createContext()

const url = 'https://666ae3b37013419182d1589d.mockapi.io/FreshTomatoes/';

export const FavoritesProvider = ({ children }) => {

    const [status, setStatus] = useState('checking');
    const [favorites, setFavorites] = useState([]);
    const [contador, setContador] = useState(0)

    const {userData} = useContext(AuthContext)
    
    // const getFavorites = async () => {
        
    //         try {
    //             const userId = userData.id
    //             const respuesta = await fetch(`${url}/favorites`);
    //             return await respuesta.find(e => e.user_id == userId.id)
            
    //     } catch (error) {
            
    //     }
    // }

    // const addFavorite = async (movie) => {
    //     try {

    //         const favorites = getFavorites()
    //         console.log(favorites)
    //         const respuesta = await fetch(`https://6656578f9f970b3b36c51233.mockapi.io/api/v1/favorites/${favorites.id}`,{
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type':'application/json',
    //             },
    //             body:{
    //                 favorites_ids: favorites.favorites_ids.push(movie)
    //             }
    //         });
    //         } catch (error) {
                
    //         }
    //     }
        
    const addFavoritos2 = (item) => {

        const peliculaFavorita = favorites.find(f => f.id===item.id)

        if(peliculaFavorita){
            alert('La pelicula ya esta en tu lista de favoritos')
            setFavorites([...favorites])
        }else{
            alert('Agregaste la pelicula a tu lista de favoritos')
            setFavorites([...favorites, {...item}])
            setContador(contador + 1)
        }
    }

    const deleteFavoritos2 = (id) => {
        alert('Quitaste la pelicula de tu lista de favoritos')
        setContador(contador - 1)
        return setFavorites(favorites.filter((fa) => fa.id !== id))
    }

    return (
        <FavoritesContext.Provider value={{addFavoritos2, favorites, setFavorites, contador, setContador, deleteFavoritos2  }}>
            { children }
        </FavoritesContext.Provider>
     )
    

}

  