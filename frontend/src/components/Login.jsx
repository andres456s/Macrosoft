import React from 'react'//comando rfc estructura de un compnente
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import './login.css'





const Login =()=> {
  
  //metodo de login
  
  const [email,setemail]=useState(' ')
  const [password,setpassword]=useState(' ')

  const login = async (e) => {
    e.preventDefault();
    const usuario={email,password}
    //la respesta es una peticion
    console.log(usuario.name)
    axios.defaults.baseURL='http://localhost:4000'

   
    const respuesta=await axios.post("./persona/login",usuario)
    console.log(respuesta)
    const mensaje = respuesta.data.mensaje
    const tipo = respuesta.data._id
    console.log(tipo)

    if (mensaje!=='Bienvenido') {
      
      Swal.fire({
        icon:'error',
        title:mensaje,
        showConfirmButton:false,
        timer:1500

      })
    }else{

      //caputar los q estan en res del controller


      //caputar los que estan en respuesta del controller
      const token =respuesta.data.token
      const name =respuesta.data.name
      const idUsuario =respuesta.data.id

      //todo lo anterior se captura en 

      sessionStorage.setItem('token',token)
      sessionStorage.setItem('token',name)
      sessionStorage.setItem('token',idUsuario)

      Swal.fire({
        icon:'success',

        title:"Usuario ingresado con exito",
        showConfirmButton:false,
        timer:1500
        

      })

      

      setTimeout(() => {
        window.location.href='../Inicio'

      }, 1600);

      
    }
      //onChange={(e)=>setemail(e.target.value) sirve para captuarr datos del
      
    };
  return (
    

    <div className='container'>
            <div className='row'>
                <h2 className='mt-6'>Iniciar sesión</h2>
            </div>
      <Form className='container2' onSubmit={login}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Dirección de correo</Form.Label>

         
          <Form.Control className='bnm'type="email" placeholder="Ingrese su correo eléctronico" onChange={(e)=>setemail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control className='bnm' type="password" placeholder="Ingrese su contraseña" onChange={(e)=>setpassword(e.target.value)}/>

        </Form.Group>
        <Button variant="primary" type="submit">
        Ingresar
      </Button>
      </Form>
    </div>
  );
}

export default Login;