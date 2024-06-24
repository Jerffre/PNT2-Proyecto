import React, { createContext, useEffect, useState } from 'react'


export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {

    const [moviesPremiere, setMoviesPremiere] = useState([]);
    //const [cartItems, setCartItems] = useState([])

    const fetchMoviesPremiere = async () => {
        try {

            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjFlNTY2MDdjYzk4MTk1ZmE4OTJlYWE0ODk5OTJmNCIsInN1YiI6IjY2NWJiYWI0MWRhZjU3YWM1YjQ1MDk5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BhuU4GcxldV9HDAO4ZH1HctTSCz6rmxMQ-H0GHkh0iM'
                }
              };

            const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=cbeecd2ae348f85de2e35e5d7928ab42')
            const data = await respuesta.json();
            //console.log(data.results[0].overview)
            setMoviesPremiere(data.results)
        } catch (error) {
            console.error('Error en el fetch de MoviesPremiere: ', error)
        }
    }
    

    useEffect(() => {
        fetchMoviesPremiere();
    }, []);

  
 return (
    <MovieContext.Provider value={{moviesPremiere, setMoviesPremiere, fetchMoviesPremiere}}>
        { children }
    </MovieContext.Provider>
 )
}
