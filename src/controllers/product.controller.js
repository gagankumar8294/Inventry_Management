import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController {
    getProducts(req, res){
        let products = ProductModel.get();
        // console.log(products);
        // return res.sendFile(path.join(path.resolve(), 'src','views','products.html'));
        
        // have to specify name of the templete
        // render function accrpts name of the templete[products] 
        // & data in key value pair
        res.render("products", {products:products})
    }

    // render the form when navigated to /addproducts
    // need to call this from index.js
    getAddForm(req, res){
        return res.render("new-product"); // data is optional
    }

    // Another Controling method
    // To receive data when form is submitted 
    addProduct(req, res){
        // access data from form
        console.log(req.body);
         //we are adding all the propperties which we take from the user 
        // like name , desc ...
        ProductModel.add(req.body)
       
        //after that we are retriving the products
        // updated array from the model
        let products = ProductModel.get();
        
        // after user successfully added product
        // redirect the user to products page

        // returning the templet and data products
        return res.render("products", { products })
    }
}


// module.exports = ProductController;