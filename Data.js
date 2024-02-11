import React, {useEffect} from 'react';

const Data = () => {

    const title = "avengers"
    const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=f457e288"

    const movie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const movieData = await response.json()
        console.log(movieData)
    } 

    useEffect(() => {
        movie(title)
    }, [])


  return (
    <div>
        <h1>Movie Data: {title}</h1>

      
    </div>
  );
}

export default Data;
