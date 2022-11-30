import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect, UseEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios'
import TarjPersona from './TarjBusPersona';
import BasicCarta from './carta';
import './B_usuario.css'

function ButtonsEjemplo() {

  const [name, setName] = useState(' ')
  const [persona, setpersona] = useState([])

  const buscarPersona = async (e) => {
    e.preventDefault();
    axios.defaults.baseURL = 'http://localhost:4000'
    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/persona/buscarPersn/' + name, {
      headers: { 'autorizacion': token }
    })
    console.log('respuesta')
    setpersona(respuesta.data)
  }
  const datas = persona.map(persona => (
    <TarjPersona key={persona.name} {...persona} />
  ))


  return (

    <div className='container' >
      <Form onSubmit={buscarPersona}>
        <InputGroup  >
          <Form.Control
            placeholder="Nombre del usuario" onChange={(e) => setName(e.target.value)}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"/>
          <Button variant="primary" type="submit" class="btn btn-outline-success">
            Buscar un usuario
          </Button>
        </InputGroup>
      </Form>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {datas} 
    <div className='container5' >
    </div>
    </div>
    </div>

  )

}

export default ButtonsEjemplo;