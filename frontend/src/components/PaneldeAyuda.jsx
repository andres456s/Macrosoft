import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import './PanelDeAyuda.css'
import {Carousel } from 'react-bootstrap';


const PanelDeAyuda =()=> {
  

    return (
      <div className='container3'>
            <div className='row'>
                <h2 className='mt-6'>¿En qué podemos ayudarte?</h2>
            <form></form>
            </div>
            <div class="form-group">
            <label for="nombreReceta">Nombre completo</label>
            <input type="name" class="form-control" id="nombreReceta" placeholder="Escribe tu nombre"></input>
            </div> 
            <div class="form-group">
            <label for="nombreReceta">Correo electrónico</label>
            <input type="name" class="form-control" id="nombreReceta" placeholder="Escribe tu correo electrónico"></input>
            </div> 
            <div class="form-group">
            <label for="nombreReceta">Telefono</label>
            <input type="name" class="form-control" id="nombreReceta" placeholder="Escribe tu número de teléfono"></input>
            </div>      
            <div class="form-group">
            <label for="exampleFormControlTextarea1">Escríbenos tus comentarios</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
                <div class="Enviar">
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    
            </div>
                  
            <div className='container4'>
            <div className='row'>
            <h2 className='mt-7'>Preguntas frecuentes</h2>
            <div class="col">
            <div class="card">
            <div class="card-body">
            <h5 class="card-title">¿Puedo crear una receta sin ser usuario?</h5>
            <p class="card-text">No, para crear una receta primero debes registrarte en nuestra plataforma, seguido de iniciar sesión.</p>
            </div>
            </div>
            </div>
            <div class="col">
            <div class="card">
            <div class="card-body">
            <h5 class="card-title">¿Cómo califico una receta?</h5>
            <p class="card-text">Para calificar a un usuario debes tener una cuenta de usuario, seguido de acceder a la receta que desees puntuar y pulsar el botón que desees.</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
           
            
    );
}



export default PanelDeAyuda;