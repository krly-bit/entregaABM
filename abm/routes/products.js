const express= require("express");
const router = express.Router();
const productoController= require("../controller/productController");
const path=require('path');
router.get('/crear/', productoController.crear);
router.get('/eliminar/', productoController.eliminar);
router.get('/editar/', productoController.editar);
router.post('/agregar', productoController.agregar);
router.post('/modificar', productoController.modificar);
router.post('/quitar', productoController.quitar);
module.exports=router;