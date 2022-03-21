
import { useEffect } from 'react';
import React from 'react'
import './App.css'
import SearchIcon from './search.svg'
import Movie from './Movie';


//1206a049
 const API_URL = "http://www.omdbapi.com?apikey=1206a049";

/* const movie1 = {
    "Title": "Spiderman and Grandma", 
    "Year": "2009", 
    "imdbID": "tt1433184", 
    "Type": "movie", 
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
};*/



const App = () => {
      const [movies , setMovies] = React.useState([]);
    const [search, setSearch] = React.useState("");

        const searchMovies = async (title) => {
                const response = await fetch(`${API_URL}&s=${title}`)
                const data = await response.json();
                setMovies(data.Search);

        }


    useEffect(()=>{
    searchMovies('spiderman');
    }, []);

    return(
        <div className="App">
            <h1>MovieLand</h1>
            <div className="search">
                <input type="text"
                placeholder="Search for movies"
                value={search}
                onChange={(e)=> {setSearch(e.target.value)}}
                />
                <img src={SearchIcon}
                 alt="search"
                 onClick = {() => {searchMovies(search)}}
                 />
            </div>

           {
                movies.length > 0 
                 ? (
                 <div className="container">
                  {movies.map((movie)=> {
                      return <Movie movie = {movie} />
                  })}
                </div>
                 ):(
                     <div className="empty">
                    <h2>No movie found</h2>
                     </div>
                 )
           
           } 
               

        </div>
    )
}


export default App
