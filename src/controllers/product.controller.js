import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController {
    getProducts(req, res, next){
        var products = ProductModel.get();
        res.render("index", { products })
    }

    getAddForm(req, res){
        return res.render("new-product", {errorMessage:null}); // data is optional
    }

    getUpdateProductView(req, res){
        // 1. if product existes then 
        const id = req.params.id; // reading product id from the body
        const productFound = ProductModel.getById(id); // calling model to get the product
        if(productFound){
            res.render('update-product', {product:productFound, errorMessage:null, });// if product found render the view
        }
        // 2. else retur errors
        else {
            res.status(401).send("Product not found");
        }
    }

    postUpdateProduct(req, res) {
        ProductModel.update(req.body)
        var products = ProductModel.get(); 
        res.render('index', { products });
    }

    // Another Controling method To receive data when form is submitted 
    addProduct(req, res, next){
        const {name, desc, price} = req.body;
        const imageUrl = 'images/'+ req.file.filename
        // access data from form
         //we are adding all the propperties which we take from the user like name , desc ...
        
         // before we pasiing data to the model | Validate
        
         ProductModel.add(name, desc, price, imageUrl);
        //after that we are retriving the products updated array from the model
        var products = ProductModel.get(); 
        // after user successfully added product redirect the user to products page returning the templet and data products
        res.render("index", { products })
    }

    deleteProduct(req, res, next){
        const id = req.params.id;
        const productFound = ProductModel.getById(id);
        if(!productFound) {
            return res.status(401).send('product not found');
        }
        ProductModel.delete(id);
        var products = ProductModel.get();
        res.render('index', { products });
    }
}


// module.exports = ProductController;