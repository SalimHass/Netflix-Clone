
import "./ModalMovie.css"
import React, { useState, useEffect } from 'react';
let api = "https://movies-salim-2.herokuapp.com"
export default function ModalMovie({show, movie,handleClose }) {
    const [comment, setComment] = useState("");
    let showHideClassName= show ? "modal display-block" : "modal display-none"
    function addToFav() {
      movie.comment = comment
      movie.image = movie.poster_path
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
    };
    fetch(api+"/addMovie", requestOptions);
      handleClose()
    }
    function cancel() {
        handleClose()

    }
    function handleChange(e) {
        setComment(e.target.value)
      }

    return (
        <div className={showHideClassName}>
          <section className="modal-main">
              <div className="card">
              <h3>{movie.title}</h3> <br />
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            <br/>
            <input id="commentText" type="text" value={comment} onChange={handleChange} />
            <button type="button" onClick={addToFav} >
              Add to Fav
            </button>
            <button type="button" onClick={cancel} >
              Cancel
            </button>
              </div>
         
          </section>
        </div>
      );

        
}