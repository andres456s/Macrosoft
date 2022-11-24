import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect, UseEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios'
import Tarj from './Tarj';


function ButtonsExample() {

  const [name,setName]=useState(' ')
  const [receta, setreceta] = useState([])

  const buscarRecetas = async (e) => {
    e.preventDefault();
    axios.defaults.baseURL = 'http://localhost:4000'
    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/receta/buscar/'+name, {
      headers: { 'autorizacion': token }
    })
    console.log('respuesta')
    setreceta(respuesta.data)
  }
  /*const buscarRecetas = async (e) => {
    e.preventDefault();
      console.log(name)
    };*/
    const datas = receta.map(receta => (
      <Tarj key={receta._id} {...receta} />
      ))


      return (
        <div className='container'>
        <Form onSubmit={buscarRecetas}>

         <InputGroup  >
        <Form.Control
          placeholder="Recipient's username" onChange={(e)=>setName(e.target.value)}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          />
        <Button variant="primary" type="submit">
        Confirmar Registro
      </Button>
          
      </InputGroup>
          </Form>

          <div >
          {datas}
          </div>
        </div>
    
  )

}

export default ButtonsExample;