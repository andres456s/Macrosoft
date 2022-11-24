import Tarj from './Tarj';
import React from 'react'//comando rfc estructura de un compnente
import { useState, useEffect, UseEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios'

const Kards = () => {

  const [receta, setreceta] = useState([])
  const [nombre, setnombre] = useState('')
  const [comentario, setcomentario] = useState('')

  useEffect(() => {
    obtenerRecetas()

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
  console.log(receta)


  const datas = receta.map(receta => (
    /*Nombre:receta.Nombre,
    Comentarios:receta.Comentarios,*/
    <Tarj key={receta._id} {...receta} />
  ))

  /*const products =data.map(product => (
    <Tarj key={product.id} {...product}/>
  ));*/

  return (
    <>
      <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {datas}
        </div>
      </div>
    </>
  );

}

export default Kards;