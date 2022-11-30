import React from 'react'//comando rfc estructura de un compnente
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import './RecetasForm.css'
import {Carousel } from 'react-bootstrap';


const RecetasForm =()=> {
  
  

    return (
      <div className='container3'>
            <div className='row'>
                <h2 className='mt-6'>Crear una nueva receta</h2>
            </div>

            <form>
            
            <div class="form-group">
            <label for="nombreReceta">Nombre De Receta</label>
            <input type="name" class="form-control" id="nombreReceta" placeholder="Hamburguesa bestial"></input>
            </div>
            <div class="form-group">
            <label for="dificultad">Dificultad</label>
            <select class="form-control" id="dificultad">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
                </div>
                
            <div class="form-group">
            <label for="exampleFormControlSelect2">Lugar De Origen</label>
            <select multiple class="form-control" id="exampleFormControlSelect2">
                <option>Colombiana</option>
                <option>Mexicana</option>
                
                <option>Japonesa</option>
                <option>Italiana</option>
                <option>China</option>
                <option>India</option>
                <option>Otro Lugar</option>
             </select>
            </div>
            <div class="form-group">
            <label for="exampleFormControlSelect2">tipo</label>
            <select multiple class="form-control" id="exampleFormControlSelect2">
                <option>Comida Rápida</option>
                <option>Mexicana</option>
                
                <option>Comida Típica</option>
                <option>Desayuno</option>
                <option>Ensalada</option>
                <option>Pastas</option>
                <option>Vegana</option>
             </select>
            </div>
            <div class="form-group">
            <label for="duracion">Duracion</label>
            <select class="form-control" id="duracion">
                <option>-15min</option>
                <option>15min</option>
                <option>30min</option>
                <option>1H</option>
                <option>2H</option>
                <option>3H</option>
                <option>4H</option>
                <option>5H</option>
                <option>+5H</option>
            </select>
                </div>
            <div class="form-group">
            <label for="exampleFormControlTextarea1">Descripcion de preparamiento</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="foto">Foto</label>
                 <input type="file" class="form-control-file" id="foto"></input>
            </div>
                <div class="cre">
                    <Button variant="primary" type="submit">
                        Crear
                    </Button>
            </div>
            
            
            </form>
            <div class="imagenComida">
                
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
          src="https://images5.alphacoders.com/396/396169.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 class="rounded d-inline p-1 bg-dark text-white">yum yum</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images3.alphacoders.com/597/597575.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 class="rounded d-inline p-1 bg-dark text-white">pollito hmmm</h3>
          
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
            </div>
            </div>
            
            
            

    );
}

export default RecetasForm;