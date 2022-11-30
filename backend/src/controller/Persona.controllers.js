const PersonaCrl={}
const Persona = require("../models/Persona.models");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//funcion crear persona
PersonaCrl.crearPersona = async (req,res) => {
    
    


    //metodo crear persona
    const{name,email,password,Description}=req.body 

    const NuevaPersona = new Persona({
        name,
        email,
        password,
        Description,
    })

    const correoPersona =await Persona.findOne({email:email})

    if (correoPersona) {
        res.json({
            mensaje:'El correo ya existe'
        })
        
    }else{
        //encriptar la contraseña
        NuevaPersona.password=await bcrypt.hash(password,10)
        const token =jwt.sign({_id:NuevaPersona._id},"secreto")
        await NuevaPersona.save()//guardar en la bd

        res.json({
            mensaje:'Bienvenido',
            id:NuevaPersona.name,
            token
        })
    }
    
  };

  PersonaCrl.listar = async (req,res) => {
  const respuesta =await Persona.find()
  res.json(respuesta)
};

PersonaCrl.actualizar = async (req,res) => {
    const id =req.params.id 
  const respuesta =await Persona.findByIdAndUpdate({_id:id})
  res.json(
    {
        mensaje:"persona actualizada"
    }
  )
};
PersonaCrl.eliminaR = async (req,res) => {
    const id =req.params.id 
  const respuesta =await Persona.findByIdAndRemove({_id:id})
  res.json(
    {
        mensaje:"persona ELIMINADA"
    }
  )
};
PersonaCrl.login = async (req,res) => {
    const {email,password}=req.body
    
  const respuesta =await Persona.findOne({email:email})
  if (!respuesta) {
      res.json(
        {
            mensaje:"Correo no Existe"             
        }
      )



    
  }else{

      //console.log(Persona," ",password,"   ",respuesta.password)
     const mathc =await bcrypt.compare(password,respuesta.password)
     if (mathc) {
        const token =jwt.sign({_id:Persona._id},'secreta')
        res.json({
            mensaje:'Bienvenido',
            id:Persona.id,
            nombre:Persona.name,
            token 
    
        })
     }else{
        res.json({
            mensaje:'Credenciales invalidas'
        })
     }
  }

};

PersonaCrl.buscar = async (req,res) => {
    const nombre =req.params.name 
    try {
        const respuesta =await Persona.find({name:nombre})
        res.json(respuesta )
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un Error',
            error
        })
        
    }
};

  module.exports= PersonaCrl
  