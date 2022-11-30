import './App.css';
import React,{useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import RecetasForm from './components/RecetasForm';


import Tabla from './components/Tabla'
import Formulario from "./components/formulario";
import B_usuario from "./components/B_usuario";
import { Tarjeta } from './components/tarjeta';
import KardsAdmn from './components/KardsAdmn';
import PanelDeAyuda from './components/PaneldeAyuda';
import Registro from './components/Registro';
import Login from './components/Login'
import Inicio from './components/Inicio';





function App() {
  const  [userType, setUserType] = useState("invitado");
  if(userType == 'invitado'){
    return(//Barra superior
    <div className="App">
      <nav className="navbar navbar-expand mb-4 navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="Inicio">MacroFood</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              <li className="nav-item">
                <a className="nav-link" href="formulario">Buscar Receta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="BuscarUsuario">Buscar Usuario</a>
              </li>
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp

              <li className="nav-item">
                <a className="nav-link" href="PanelDeAyuda">Panel De Ayuda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Tabla">Estadisticas</a>
              </li>
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="Login">Iniciar Sesión</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="Registro">Registrarse</a>
               
              </li>
            </ul> 
          </div>
        </div>
    </nav>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio/>} exact></Route>

      <Route path="/Inicio" element={<Inicio/>} exact></Route>

      <Route path="/Registro" element={<Registro/>} exact></Route>

      <Route path="/Login" element={<Login />} exact></Route>

      <Route path="/PanelDeAyuda" element={<PanelDeAyuda />} exact></Route>
      
      <Route path="/BuscarUsuario" element={<B_usuario/>} exact></Route>

      <Route path="/formulario" element={<Formulario />} exact></Route>

      <Route path="/Tabla" element={<Tabla />} exact></Route>

    </Routes>
  </BrowserRouter>
  
    </div>

    )
  }
  else if(userType == "usuario"){
    return (
    //Barra superior
      <div className="App">
        <nav className="navbar navbar-expand mb-4 navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="Inicio">MacroFood</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
                <li className="nav-item">
                  <a className="nav-link" href="RecetasForm">Crear Receta</a>
                  </li>

                <li className="nav-item">
                  <a className="nav-link" href="formulario">Buscar</a>
                </li>
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
                <li className="nav-item">
                  <a className="nav-link" href="PanelDeAyuda">Panel De Ayuda</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="Tabla">Estadisticas</a>
              </li>

              </ul> 
            </div>
          </div>
        </nav>


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio/>} exact></Route>

      <Route path="/Inicio" element={<Inicio/>} exact></Route>

      <Route path="/Tabla" element={<Tabla />} exact></Route>

      <Route path="/PanelDeAyuda" element={<PanelDeAyuda />} exact></Route>

      <Route path="/RecetasForm" element={<RecetasForm/>} exact></Route>

      <Route path="/formulario" element={<Formulario />} exact></Route>
      

    </Routes>
  </BrowserRouter>
  
    </div>
  );
}
else{
  return (
    //Barra superior
      <div className="App">
        <nav className="navbar navbar-expand mb-4 navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="Inicio">MacroFood</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
                <li className="nav-item">
                  <a className="nav-link" href="RecetasForm">Crear Receta</a>
                  </li>

                  <li className="nav-item">
                  <a className="nav-link" href="formulario">Buscar</a>
                </li>
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
                <li className="nav-item">
                  <a className="nav-link" href="PanelDeAyuda">Panel De Ayuda</a>
                </li>


              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
              &nbsp
                <li className="nav-item">
                  <a className="nav-link" href="KardsAdmn">Eliminar Usuarios y recetas</a>
                </li>
              </ul> 
            </div>
          </div>
        </nav>


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio/>} exact></Route>

      <Route path="/Inicio" element={<Inicio/>} exact></Route>

      <Route path="/Registro" element={<Registro/>} exact></Route>

      <Route path="/Login" element={<Login />} exact></Route>

      <Route path="/PanelDeAyuda" element={<PanelDeAyuda />} exact></Route>

      <Route path="/RecetasForm" element={<RecetasForm/>} exact></Route>

      <Route path="/formulario" element={<Formulario />} exact></Route>

      <Route path="/BuscarUsuario" element={<B_usuario/>} exact></Route>
      
      <Route path="/tarjeta" element={<Tarjeta />} exact></Route>
      
      <Route path="/Tabla" element={<Tabla />} exact></Route>

      
      <Route path="/KardsAdmn" element = {<KardsAdmn/>} exact></Route>

    </Routes>
  </BrowserRouter>
  
    </div>
  );
}
}
export default App;