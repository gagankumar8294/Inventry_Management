import express from 'express';
import  ProductController  from './src/controllers/product.controller.js';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import validateRequest from './src/middlewares/validation.middleware.js';
import UserController from './src/controllers/user.controller.js';
import { uploadFile } from './src/middlewares/file-upload.middleware.js';
const server = express();

server.use(express.urlencoded({ extended: true }));

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), 'src', 'views'));

server.use(expressEjsLayouts);
server.use(express.static('public'));

const productController = new ProductController();
const usersController = new UserController();

server.get('/', productController.getProducts);
server.get('/addproduct', productController.getAddForm);
server.get('/update-product/:id', productController.getUpdateProductView);
server.post('/delete-product/:id', productController.deleteProduct);
server.get('/register', usersController.getRegister);
server.get('/login', usersController.getLogin);
server.post('/login', usersController.postLogin);
server.post('/register', usersController.postRegister);
server.post('/update-product', productController.postUpdateProduct)
server.post('/', uploadFile.single('imageUrl'),validateRequest, productController.addProduct);


server.use(express.static('src/views'))

server.listen(3400);