import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect, UseEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios'
import Tarj from './Tarj';
import './formulario.css'


function ButtonsExample() {

  const [name, setName] = useState(' ')
  const [receta, setreceta] = useState([])
  const [recetaLN, setrecetaLN] = useState([])
  const [recetaLT, setrecetaLT] = useState([])

  const buscarRecetas = async (e) => {
    e.preventDefault();
    axios.defaults.baseURL = 'http://localhost:4000'
    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/receta/buscar/' + name, {
      headers: { 'autorizacion': token }
    })
    console.log('respuesta')
    setreceta(respuesta.data)
  }
  
  //LN=listadas por nombre acedente
  const buscarRecetasLN = async (e) => {
    e.preventDefault();
    axios.defaults.baseURL = 'http://localhost:4000'
    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/receta/listarPnombre' , {
      headers: { 'autorizacion': token }
    })
    console.log('respuesta')
    setreceta(respuesta.data)
  }
  //LN=listadas por tiempo de preparación
  const buscarRecetasLT = async (e) => {
    e.preventDefault();
    axios.defaults.baseURL = 'http://localhost:4000'
    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/receta/listarPTiempo' , {
      headers: { 'autorizacion': token }
    })
    console.log('respuesta')
    setreceta(respuesta.data)
  }
  //LF=listadas por fecha acedente
  const buscarRecetasLF = async (e) => {
    e.preventDefault();
    axios.defaults.baseURL = 'http://localhost:4000'
    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/receta/listarPfecha' , {
      headers: { 'autorizacion': token }
    })
    console.log('respuesta')
    setreceta(respuesta.data)
  }
  //LO=listadas por lugar de origen
  const buscarRecetasLO = async (e) => {
    e.preventDefault();
    axios.defaults.baseURL = 'http://localhost:4000'
    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/receta/listarPorigen' , {
      headers: { 'autorizacion': token }
    })
    console.log('respuesta')
    setreceta(respuesta.data)
    //<div className='container6'>
  }
  const datas = receta.map(receta => (
    <Tarj key={receta._id} {...receta} />
  ))
  
  
  

  

 


  return (
    <div className='container' >
      <Form onSubmit={buscarRecetasLN} >
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button variant="primary" type="submit" class="btn btn-outline-info">
            Listar Por Nombres
          </Button>
        </div>
      </Form>

      <Form onSubmit={buscarRecetas}>
        <InputGroup  >
          <Form.Control
            placeholder="Recipient's username" onChange={(e) => setName(e.target.value)}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"/>
          <Button variant="primary" type="submit" class="btn btn-outline-success">
            Buscar por Nombres
          </Button>
        </InputGroup>
      </Form>

      <Form onSubmit={buscarRecetasLF}>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button variant="primary" type="submit"  class="btn btn-outline-primary">
          Buscar Por Fechas
          </Button>
        </div>
      </Form>
      
      <Form onSubmit={buscarRecetasLO} >
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button variant="primary" type="submit" class="btn btn-outline-info">
            Listar Por Lugar de Origen
          </Button>
        </div>
      </Form>
      
    
    

      <div class="row row-cols-1 row-cols-md-3 g-4">
        {datas}
      </div>
    </div>

  )

}

export default ButtonsExample;