import React, { createContext, useEffect, useState } from 'react'


export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {

    const [moviesPremiere, setMoviesPremiere] = useState([]);
    //const [cartItems, setCartItems] = useState([])

    // const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjFlNTY2MDdjYzk4MTk1ZmE4OTJlYWE0ODk5OTJmNCIsInN1YiI6IjY2NWJiYWI0MWRhZjU3YWM1YjQ1MDk5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BhuU4GcxldV9HDAO4ZH1HctTSCz6rmxMQ-H0GHkh0iM'
    //     }
    //   };
      
    //   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2024&sort_by=popularity.desc', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    const fetchMoviesPremiere = async () => {
        try {

            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjFlNTY2MDdjYzk4MTk1ZmE4OTJlYWE0ODk5OTJmNCIsInN1YiI6IjY2NWJiYWI0MWRhZjU3YWM1YjQ1MDk5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BhuU4GcxldV9HDAO4ZH1HctTSCz6rmxMQ-H0GHkh0iM'
                }
              };

            const respuesta = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2024&sort_by=popularity.desc', options)
            const data = await respuesta.results.json();
            setMoviesPremiere(data)
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
