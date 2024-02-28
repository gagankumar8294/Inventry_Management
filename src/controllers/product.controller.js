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
}


// module.exports = ProductController;