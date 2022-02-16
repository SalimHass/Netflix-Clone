import React, { useState, useEffect } from 'react';
import Movie from '../Movie/Movie';
import MovieList from "../MovieList/MovieList"

let api = "https://movies-salim-2.herokuapp.com"
const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

   useEffect(() => {
        fetch(api+"/trending")
          .then(res =>{
            return  res.json()
          } )
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <MovieList movies = {items} />
        );
      }


}

export default Home;