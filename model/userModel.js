const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");//password hashing (use)--->encrypt..

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Enter a valid name"]
    },
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: true
    },
    password: {
        type: String,
        required:[true,"Password is required"]
    }
});
//middleware code
userSchema.pre("save",async function(next){//pre acts as a middleware
    if(!this.isModified("password")){
        return next();
    }
    const salt=await bcrypt.genSalt(10);//10-->bytes(hashing power should be low )
    //gensalt-->method
    this.password=await bcrypt.hash(this.password,salt);
    next();
})
const User = mongoose.model("User", userSchema); // Ensure this is the correct model definition

module.exports = User; // Export the model directly
