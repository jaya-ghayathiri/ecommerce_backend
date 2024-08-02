const express = require("express")
const Router = express.Router();
const cartController = require("../controller/cartController")
const auth =require('../middleware/auth')
// const deleteCart=require('../services/cartservice')

Router.post("/addCart",auth,cartController.addCart);
Router.get("/getCart",auth,cartController.getCart)
Router.delete("/deleteCart", auth, cartController.deleteCart);

module.exports = Router;