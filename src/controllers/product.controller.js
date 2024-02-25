const path = require('path');

class ProductController {
    getProducts(req, res){
        return res.sendFile(path.join(path.resolve(), 'src','views','products.html'))
    }
}


module.exports = ProductController;