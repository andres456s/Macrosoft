import TarjAdmnRec from './TarjAdmnRec';
import TarjAdmnPers from './TarjAdmnPers';
import Tarj from './Tarj';
import React from 'react'//comando rfc estructura de un compnente

import Button from 'react-bootstrap/Button';
import { useState, useEffect, UseEffect } from 'react';
import axios from 'axios'
const KardsAdmn = () => {

  const [receta, setreceta] = useState([])
  const [persona, setpersona] = useState([])

  useEffect(() => {
   obtenerRecetas()
   obtenerPersonas()
  //  buscarRecetas()

  }, [])
  const obtenerRecetas = async () => {
    axios.defaults.baseURL = 'http://localhost:4000'
    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/receta/listar', {
      headers: { 'autorizacion': token }
    })
    console.log(respuesta)
    setreceta(respuesta.data)
  }
  const obtenerPersonas = async () => {
    axios.defaults.baseURL = 'http://localhost:4000'
    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/persona/listarPersn', {
      headers: { 'autorizacion': token }
    })
    console.log(respuesta)
    setpersona(respuesta.data)
  }
  
  
  const dataReceta = receta.map(receta => (
      <TarjAdmnRec key={receta._id} {...receta} />
      ))
      
      const dataPersona = persona.map(persona => (
        <TarjAdmnPers key={persona._id} {...persona} />
    ))
    
  return (
    <>
      <div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 border bg-light">{dataPersona}</div>
    </div>

    <div class="col">
      <div class="p-3 border bg-light"> {dataReceta}</div>
    </div>
  </div>
  <p></p>
</div>

    </>
  );

}

export default KardsAdmn;