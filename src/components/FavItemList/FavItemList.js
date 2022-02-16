import "./FavItemList.css"
import { Button, Card, CardGroup,Form } from "react-bootstrap";
import React, { useState } from 'react';
import { useRef } from 'react';
const FavItemList = (props) => {

    let api = "https://movies-salim-2.herokuapp.com"

    const commentRef = useRef();

    function deleteMovie(id) {
        const requestOptions = {
          method: 'DELETE',
      };
      fetch(api+"/DELETE/"+id, requestOptions).then(res =>{
        props.refresh()
    } );
      }

    function updateMovie(movie) {
        const comment = commentRef.current.value;
        movie.comment = comment
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(movie)
      };
      fetch(api+"/UPDATE/"+movie.id, requestOptions).then(res =>{
          props.refresh()
      } );

    }

    return (
        <>
        <CardGroup style={{ display: "flex" }}>
            {
                
                (props.favoriteList ?? []).map(movie => {
                    return (
                        <Card key={movie.id}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${movie.image}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.overview}
                                </Card.Text>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Captions:</Form.Label>
                        <Form.Control ref={commentRef} type="textarea" placeholder={movie.comment ? movie.comment : "Add Your Comment Here..."}   />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={()=> updateMovie(movie)}  >
                        Update
                    </Button>
                    <Button variant="danger" onClick={()=> deleteMovie(movie.id)}>
                        delete
                    </Button>
                                
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </CardGroup>
        </>
    )
}

export default FavItemList;
