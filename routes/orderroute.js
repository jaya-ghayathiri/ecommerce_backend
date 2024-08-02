const express=require("express");
const Router=express.Router();
const orderController=require("../controller/orderController")
const auth=require('../middleware/auth')
Router.post('/createOrder',auth,orderController.createOrder);

module.exports=Router;