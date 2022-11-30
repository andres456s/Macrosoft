import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './formulario.css'

const Tarj = ({Nombre,Tipo,Puntuación,Dificultad,Comentarios,Fecha,Tiempo_de_preparación,Tipo_de_comida,Lugar_de_origen}) => {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  return (
    <div >
    
    <Card style={{ width: '18rem' }} className='containerrer'>
      <Card.Img variant="top" src="https://i.blogs.es/8968d6/risotto-a-los-cuatro-quesos/840_560.jpg" />
      <Card.Body>
        <Card.Title>{Nombre}</Card.Title>
        <Card.Text>
        {Comentarios}
        </Card.Text>
       
        <Button variant="primary" onClick={handleShow}>
        Ver mas
      </Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Fecha:{Fecha}</Modal.Body>
        <Modal.Title class="card-subtitle mb-2 text-muted">   Categorias</Modal.Title>
        <Modal.Body>Tiempo de preparación:{Tiempo_de_preparación}</Modal.Body>
        <Modal.Body>Dificultad:{Dificultad}</Modal.Body>
        <Modal.Body>Tipo de comida:{Tipo_de_comida}</Modal.Body>
        <Modal.Body>Lugar de origen:{Lugar_de_origen}</Modal.Body>
        <Modal.Body>Descripcion:{Comentarios}</Modal.Body>
        <Modal.Body>Puntuación:{Puntuación}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>

    
  )
}


export default Tarj