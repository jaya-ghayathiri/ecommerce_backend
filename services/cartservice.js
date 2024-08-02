// const Cart = require('../model/cartModel');
// const Product = require("../model/productModel");


// const deleteCartController= async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const { productId } = req.body;

//     if (!productId) {
//       return res.status(400).json({ error: 'Product ID is required' });
//     }

   
//     let cart = await Cart.findOne({ user_id: userId });

//     if (!cart) {
//       return res.status(404).json({ message: 'Cart not found' });
//     }

    
//     cart.products = cart.products.filter(item => item.productId != productId);

//    console.log(cart);
//     await cart.save();

//     res.json({ message: 'Product removed from cart', cart });
//   } catch (error) {
//     console.error('Error deleting product from cart:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// module.exports =  {deleteCartController};