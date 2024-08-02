const Order = require('../model/orderModel');
const User = require('../model/userModel');
const Cart = require('../model/cartModel');
const Product = require('../model/productModel');

const createOrder = async (req, res) => {
  try {
    const { name, address, phone } = req.body;
    const userId = req.user.id; 
    console.log(userId)
    const user = await User.findById(userId);
    const cart = await Cart.findOne({ user_id: userId });

 
    if (!user) {
      console.log("User not found for ID:", userId);
      return res.status(404).json({ message: 'User not found' });
    }
    if (!cart) {
      console.log("Cart not found for user ID:", userId);
      return res.status(404).json({ message: 'Cart not found' });
    }
    if (!Array.isArray(cart.products)) {
      console.log("Cart products is not an array for user ID:", userId);
      return res.status(400).json({ message: 'Cart products is not an array' });
    }
    let totalAmt = 0;
    for (const item of cart.products) {
      console.log("Processing cart item:", item);

     
      const product = await Product.findOne({ id: item.productId });
      if (!product) {
        console.log(`Product with ID ${item.productId} not found`);
        return res.status(404).json({ message: `Product with ID ${item.productId} not found` });
      }
      totalAmt += product.price * item.quantity; 
    }


    const orderDate = new Date();
    const deliveryDate = new Date(orderDate);
    deliveryDate.setDate(deliveryDate.getDate() + 10);

    const newOrder = new Order({
      user_id: userId,
      name: name || user.username,
      email: user.email,
      address: address || 'N/A',
      phone: phone || 'N/A', 
      products: JSON.stringify(cart.products), 
      totalamount: totalAmt.toString(), 
      orderdate: orderDate,
      deliverydate: new Date(Date.now()+10*24*60*60*1000),
      orderstatus: 'Pending', 
    });

    await newOrder.save();

    await Cart.findOneAndDelete({ user_id: userId });

    res.status(201).send({ order: newOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

// const getOrder=async(req,res){
//   try{
//     const {title,description}
//   }
// }

module.exports = { createOrder };
