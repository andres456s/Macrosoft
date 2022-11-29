import React from 'react'//comando rfc estructura de un compnente
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
            <h2 className='mt-6'>Preguntas frecuentes</h2>
            <label for="nombreReceta">¿Necesito tener una cuenta de usuario para crear una receta?</label>
            <label for="nombreReceta">Así es</label>
            </div>
            </div>
            </div>
            
    );
}

export default PanelDeAyuda;