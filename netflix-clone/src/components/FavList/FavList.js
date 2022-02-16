import React, { useState, useEffect } from 'react';
import FavItemList from "../FavItemList/FavItemList"
import "./FavList.css"

let api = "https://movies-salim-2.herokuapp.com"
const FavList = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    function refresh() {
         fetch(api+"/getMovies")
          .then(res =>{
            return  res.json()
          } )
          .then(
            (result) => {
              setItems(result);
              setIsLoaded(true);
             },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      
    }

   useEffect(() => {
        refresh()
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <>
            <h1>This is my favorite list of movies</h1>
            <main>
                <FavItemList favoriteList={items} refresh={refresh} />
            </main>
       
            </>
        );
      }


}

export default FavList;