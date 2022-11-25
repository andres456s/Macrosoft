import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useState } from 'react';

const TarjAdmnRec = ({ Nombre, Comentarios,_id }) => {

  const [receta, setreceta] = useState([])

  const EliminarRecetas = async () => {
    axios.defaults.baseURL = 'http://localhost:4000'
    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuestab = await axios.delete('/receta/eliminar/'+_id, {
      headers: { 'autorizacion': token }
    })
    console.log(respuestab.data[1])
    setreceta(respuestab.data)
  }

    return (
      <form onSubmit={EliminarRecetas} >

        <Card >
        <Card.Header>{Nombre}</Card.Header>
        <Card.Body>
          <Card.Title>{Nombre}</Card.Title>
          <Card.Text>
            {Comentarios}
          </Card.Text>
          <Button variant="primary" type="submit">Eliminar</Button>
        </Card.Body>
      </Card>
      </form>
      );
}


export default TarjAdmnRec