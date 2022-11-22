//requerimientos
const {Router} = require("express");
const {defaul:mongoose} = require("mongoose");
const router =Router()
const RecetaCrl = require('../controller/Receta.Controllers');

//rutas y endspoints
router.post("/crearReceta",RecetaCrl.crearReceta)
router.get("/listar",RecetaCrl.listar)
router.put("/actualizar/:id",RecetaCrl.actualizar)
router.delete("/eliminar/:id",RecetaCrl.eliminaR)
router.get("/buscar/:name",RecetaCrl.buscar)

module.exports = router;