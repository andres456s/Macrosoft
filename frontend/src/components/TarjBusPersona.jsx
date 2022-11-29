import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TarjPersona = ({name}) => {


  return (
    <div>
        <Card style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
       
        <Button variant="primary">Ver perfíl</Button>
      </Card.Body>
    </Card>
    </div>
  )
}


export default TarjPersona