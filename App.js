import './App.css';
import { useEffect, useState } from 'react';
import Searchicon from './images/search.svg';
import Card from './components/Card';



function App() {
  
  const [searchTerm, setsearchTerm] = useState("");
  const [movies, setmovies] = useState([]);
  

  const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=f457e288"


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const movieData = await response.json()
    setmovies(movieData.Search);
} 

useEffect(() => {
    searchMovies("avengers")
}, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='search for movies' value={searchTerm} onChange={(e) => 
          setsearchTerm(e.target.value)
        }/>
        <img src={Searchicon} alt='search' onClick={() => 
          searchMovies(searchTerm)
        }/>
      </div>
        
        {movies?.length > 0 ? (
            
            <div className='container'>
              
              {movies.map((mov, index) =>(
                  <Card movie={mov} key={index}/>
                ))
              }
          </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>

            </div>
          )}
        
        
      </div>
 
    
  );
}

export default App;