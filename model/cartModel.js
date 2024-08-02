const mongoose=require("mongoose");
const cartSchema=new mongoose.Schema({
    user_id:{
        type:String,
        require:true
    },
    products:[{
        productId:{
            type:String
        },
        quantity:{
            type:String
        }
        
    }]
});
const Cart= mongoose.model("Cart",cartSchema);
module.exports=Cart;