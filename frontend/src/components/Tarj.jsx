import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Tarj = ({Nombre,descripcion}) => {



  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.blogs.es/8968d6/risotto-a-los-cuatro-quesos/840_560.jpg" />
      <Card.Body>
        <Card.Title>{Nombre}</Card.Title>
        <Card.Text>
        {descripcion}
        </Card.Text>
       
        <Button variant="primary">Ver Receta</Button>
      </Card.Body>
    </Card>
    </div>
  )
}


export default Tarj