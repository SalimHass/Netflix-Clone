import ModalMovie from "../ModalMovie/ModalMovie";
import "./Movie.css"
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
const Movie = (props) => {

    const [showModal, setShowModal] = useState(false);
    return (<li key={props.movie.id}>
        <div className="card">
        <ModalMovie show={showModal} movie= {props.movie} handleClose = {()=>{setShowModal(false)}} />
            <h3>{props.movie.title}</h3> <br />
            <img src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`} alt={props.movie.title} />
            <br />
            <Button onClick={()=>{setShowModal(true)}}>Add to Favorite</Button>
        </div>
    </li>)
}

export default Movie;