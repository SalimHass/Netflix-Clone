
import "./ModalMovie.css"
import { Button, Modal } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
let api = "https://movies-salim-2.herokuapp.com"
export default function ModalMovie({show, movie,handleClose }) {
    const [comment, setComment] = useState("");
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
    function handleChange(e) {
        setComment(e.target.value)
      }

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            <br/>
            <input id="commentText" type="text" value={comment} onChange={handleChange} />
            <Button  variant="secondary" type="button" onClick={addToFav} >
              Add to Fav
            </Button>
          </Modal.Body>
        </Modal>
      );

        
}