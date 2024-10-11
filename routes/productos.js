const express = require('express');
const router = express.Router();


//importar el controlador
const controladorProductos = require('../controllers/productosControllers');


//rutas CRUD 
router.post('/', productoController.createProduct);
router.get('/', productoController.getAllProducts);
router.get('/:id', productoController.getProductById);
router.put('/:id', productoController.updateProductById);
router.delete('/:id', productoController.deleteProduct);



module.exports = router;