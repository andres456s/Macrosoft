const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecetaSchema = new Schema({
    Nombre: String,
    Tipo: String,
    Puntuación: String,
    Comentarios: String,
    Fecha: { type: Date, default: Date.now },
    Tiempo_de_preparación:{type:String,default:'5min'},
    Dificultad:{type:String,default:'facil'},
    Tipo_de_comida:{type:String,default:'picada'},
    Lugar_de_origen:{type:String,default:'colombia'},
});

module.exports = mongoose.model("Receta", RecetaSchema);