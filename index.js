import express from 'express';
import ProductController from './src/controllers/product.controller';


const server = express();

// calling a method belongs to class
// create a instance fot the class / ProductController

const productController = new ProductController();

server.get('/', productController.getProducts)

server.use(express.static('src/views'))

server.listen(3400);