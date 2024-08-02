const express=require('express');
const Router=express.Router();
const productController=require("../controller/productController");
const auth=require("../middleware/auth");


Router.get('/products',auth,productController.getAllProducts)
Router.post('/products',productController.postProducts);
Router.put('/products/:id', productController.updateProduct);
Router.delete('/products/:id', productController.deleteProduct);

module.exports=Router;