const fs = require('fs');
const path = require('path');


//ruta del archivo que almacenará los productos JSON.
const productosFilePath = path.join(__dirname, '../productos.json');

//funcion para leer los productos desde el archivo JSON.
//lee el archivo y lo guarda en la variable 'data'.
//comvierte el string en un objeto javaScript.
const leerProductos = ()=>{
    const data = fs.readFileSync(productosFilePath,'utf-8');
    return JSON.parse(data)
};
//escribir los productos en el archivo JSON.
//uso de null y 2 hace que el JSON sea mas legible para los humanos.
const escribirProductos = (productos)=>{
    fs.writeFileSync(productosFilePath, JSON.stringify(productos,null,2));
};

//creo un producto.
exports.createProduct = (req, res) => {
    const { name, description, price, quantity } = req.body;
    if (!name || !price || !quantity) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }
    const products = readProducts();
    const newProduct = { id: Date.now().toString(), name, description, price, quantity };
    products.push(newProduct);
    writeProducts(products);
    res.status(201).json(newProduct);
  };


