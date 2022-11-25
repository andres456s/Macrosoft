//requerimientos
const {Router} = require("express");
const {defaul:mongoose} = require("mongoose");
const router =Router()
const PersonaCrl = require('../controller/Persona.controllers');

//rutas y endspoints
router.post("/crearPersona",PersonaCrl.crearPersona)
router.get("/listarPersn",PersonaCrl.listar)
router.put("/actualizarPersn/:id",PersonaCrl.actualizar)
router.delete("/eliminarPersn/:id",PersonaCrl.eliminaR)
router.get("/buscarPersn/:name",PersonaCrl.buscar)
router.post("/login",PersonaCrl.login)

module.exports = router;