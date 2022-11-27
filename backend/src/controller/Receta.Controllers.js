const RecetaCrl={}
const Receta = require("../models/Receta.models");
//funcion crear Receta
RecetaCrl.crearReceta = async (req,res) => {
    
    

    const{Nombre,Tipo,Puntuación,Dificultad,Comentarios,Fecha,Tiempo_de_preparación,Tipo_de_comida,Lugar_de_origen}=req.body 

    const NuevaReceta = new Receta({
        Nombre,
        Tipo,
        Puntuación,
        Comentarios,
        Fecha,
        Tiempo_de_preparación,
        Dificultad,
        Tipo_de_comida,
        Lugar_de_origen,
        
    })
 const respuesta =await NuevaReceta.save()
    res.json({
        mensaje:'Bienvenido',
        id:NuevaReceta.Nombre,
    
    })
    
  };
  RecetaCrl.listar = async (req,res) => {
    const respuesta =await Receta.find()
    res.json(respuesta)
  };
  RecetaCrl.listarPnombre = async (req,res) => {
    const respuesta =await Receta.find().sort({Nombre:1})
    res.json(respuesta)
  };
  RecetaCrl.listarPfecha = async (req,res) => {
    const respuesta =await Receta.find().sort({Fecha:1})
    res.json(respuesta)
  };
  RecetaCrl.listarPTiempo = async (req,res) => {
    const respuesta =await Receta.find().sort({Tiempo:1})
    res.json(respuesta)
  };


  RecetaCrl.actualizar = async (req,res) => {
    const id =req.params.id 


  const respuesta =await Receta.findByIdAndUpdate({_id:id})
  res.json(
    {
        mensaje:"Receta actualizada"
    }
  )
};
RecetaCrl.eliminaR = async (req,res) => {
    const id =req.params.id 
  const respuesta =await Receta.findByIdAndRemove({_id:id})
  res.json(
    {
        mensaje:"Receta ELIMINADA"
    }
  )
};

RecetaCrl.buscar = async (req,res) => {
    const nombre =req.params.name 
    try {
        const respuesta =await Receta.find({Nombre:nombre})
        res.json(respuesta )
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'Ha ocurrido un error. Intente nuevamente.',
            error
        })
        
    }
};

  module.exports= RecetaCrl