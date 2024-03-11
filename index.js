import express from 'express';
import  ProductController  from './src/controllers/product.controller.js';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import validateRequest from './src/middlewares/validation.middleware.js';
const server = express();

//parse form data
// it will take the data received from the form 
// parse(convert) it and store it in the "body"
server.use(express.urlencoded({ extended: true }));

// setup view engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), 'src', 'views'));

server.use(expressEjsLayouts);
// calling a method belongs to class
// create a instance fot the class / ProductController
server.use(express.static('public'));

const productController = new ProductController();

server.get('/', productController.getProducts);
server.get('/addproduct', productController.getAddForm);
server.get('/update-product/:id', productController.getUpdateProductView);
server.post('/delete-product/:id', productController.deleteProduct);

server.post('/update-product', productController.postUpdateProduct)
// because form post to root "/"
server.post('/', validateRequest, productController.addProduct);


server.use(express.static('src/views'))

server.listen(3400);