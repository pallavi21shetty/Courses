let express = require("express")
let router=express.Router();

router.get(('/home'),(req,res)=>
res.send("welcome to home page"))
router.get(('/about'),(req,res)=>
res.send("welcome to about page"))
router.get(('/profile'),(req,res)=>
res.send("welcome to profile page"))

module.exports=router;