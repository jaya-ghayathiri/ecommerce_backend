const jwt=require("jsonwebtoken");
const auth=(req,res,next)=>{
    // const token=req.header("Authorization".replace("Bearer"," "));
    const token = req.header("Authorization").split(" ")[1];//string ku space provide panum
    if(!token)return res.status(401).json({error:"Token required"});

    try{
        const decoded=jwt.verify(token,"secret_key");
        req.user={id:decoded.userId};
        next();
    }
    catch(err){
        res.status(401).json({error:"Invalid Token"});//expire
    }
};
module.exports=auth;