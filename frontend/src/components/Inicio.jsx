import React from 'react'//comando rfc estructura de un compnente
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { Card,Carousel } from 'react-bootstrap';

import './inicio.css'

import Kards from './kards';



const Inicio =()=> {
    //pantalla inicial
    return(
        <div className='container'>
            <div className='row'>
                <h1 class="p-2 bg-dark text-white">Bienvenido al foro de recetas MacroFood!</h1>
            </div>

            <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dam.cocinafacil.com.mx/wp-content/uploads/2019/08/comida-tailandesa.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 class="rounded d-inline p-1 bg-dark text-white">Cena con Familia</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dam.cocinafacil.com.mx/wp-content/uploads/2020/08/comida-arabe.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 class="rounded d-inline p-1 bg-dark text-white">Pica con Amigos</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/03/reposteria.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 class="rounded d-inline p-1 bg-dark text-white">Dulces Tardes</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <p>
    </p>
    <Kards />
    <>
    </>
        </div>
        
    );
}

export default Inicio;