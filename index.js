import express from 'express';
import  ProductController  from './src/controllers/product.controller.js';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';

const server = express();

// setup view engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), 'src', 'views'));

server.use(expressEjsLayouts);
// calling a method belongs to class
// create a instance fot the class / ProductController

const productController = new ProductController();

server.get('/', productController.getProducts);
server.get('/addproduct', productController.getAddForm);
// because form post to root "/"
server.post('/', productController.addProduct);

server.use(express.static('src/views'))

server.listen(3400);