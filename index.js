const express = require('express');
const ProductController = require('./src/controllers/product.controller.js');


const server = express();

// calling a method belongs to class
// create a instance fot the class / ProductController

const productController = new ProductController();

server.get('/', productController.getProducts)

server.use(express.static('src/views'))

server.listen(3400);