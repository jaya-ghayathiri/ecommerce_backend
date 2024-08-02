const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const ProductRoutes=require("./routes/productroute");
const userRoutes=require("./routes/userroute");
const cartRoutes=require("./routes/cartroute");
const orderRoutes=require("./routes/orderroute");
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://jayaghayathiri:jayagayu@cluster0.jhjnpn6.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Mongodb connected")
})

app.set("view engine",'ejs');//ejs--->view file format
app.use(bodyParser.json());
app.use('/', userRoutes);
app.use('/',ProductRoutes);
app.use('/',cartRoutes);
app.use('/',orderRoutes);
app.listen(5000,()=>{
    console.log("server is running on port 5000")
})