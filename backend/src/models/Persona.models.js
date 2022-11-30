const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//para que la bd lo guarde tiene que llamar estos mismos atributos igual en el controller

const PersonaSchema = new Schema({
  name:String,
  email:String,
  password:String,

  Description:{type:String,default:'Usuario'}
});

module.exports  = mongoose.model("Persona", PersonaSchema);