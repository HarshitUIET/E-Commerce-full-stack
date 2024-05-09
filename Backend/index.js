const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");


app.use(express.json());

app.use(cors());

app.use("/images",express.static('upload/images'));

mongoose.connect("mongodb+srv://harshitpachauri76:DNGDwRayYKi1c2Fy@cluster0.2r9fwma.mongodb.net/ecommercedb")
.then(()=>{
    console.log("Connection Success");
})
.catch((error)=>{
    console.log("Error found in connection ",error);
})

const storage = multer.diskStorage({
    destination : "./upload/images",
    filename : (req,file,cb) => {
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage : storage});

app.get("/",(req,res)=>{
    res.send("Running the express js ");
})

app.post("/upload",upload.single('products'),(req,res)=>{
    res.json({
        success : 1,
        image_url : `http://localhost:${port}/images/${req.file.filename}`
    })
})

//  schema for products

const Product = new mongoose.model("Product",{
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    available:{
        type:Boolean,
        default:true
    }
})

app.post("/addproduct",async (req,res)=>{
 
    let product_arr = await Product.find({});
       console.log(product_arr);
       let id;

       if(product_arr.length>0) {
          let last_product_arr = product_arr.slice(-1);
          let last_product = last_product_arr[0];
          id = last_product.id + 1;
       }
       else{
         id=1;
       }


    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    })
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name
    })
})

app.post('/removeproduct',async (req,res)=>{
       await Product.findOneAndDelete({
        id:req.body.id
       })
       console.log("Removed");
       res.json({
        success:true,
        "name":req.body.name
       })
})

app.get("/allproducts",async (req,res)=>{
    let product = await Product.find({});
    console.log("All Product fetched ");
     res.send(product);
})

// Schema Creating for users signup

app.post('/signup',async (req,res) =>{

    let check = await User.findOne({email:req.body.email});

    if(check) {
        return res.status(400).json({success:false,errors:"existing user found with same email "})
    }

    let cart={};

    for (let i = 0; i <300; i++) {
       cart[i] = 0 
    }

    let user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart

    })

    await user.save();

    const data = {
        user:{
           id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');

    res.json({success:true,token})

})

// creating end point for user login

app.post("/login",async (req,res)=>{

    let user = await User.findOne({email:req.body.email});

    if(user) {
        let checkPass = req.body.password === user.password;
        if(checkPass) {
            const data = {
                user:{
                    id:user.id
                }
            }
            let token = jwt.sign(data,"secret_ecom")

            res.json({success:true,token});
        }
        else{
             res.json({success:false,errors:"Password not found "})
        } 
    }
    else{
        res.json({success:false,errors:"Email not found"})
    }
})

const User = mongoose.model("User",{
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,   
    },
    cartData:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// Creating end point for new collection

app.get("/newcollection",async (req,res)=>{
    let product = await Product.find({});
    let newcollection = product.slice(1).slice(-8);
    console.log("New Collection fetched");
    res.send(newcollection);
})

// creating end point for related products

app.get("/relatedproducts",async (req,res)=>{
    let product = await Product.find({});
    let relatedproducts = product.slice(0,4);
    console.log("Related Products fetched");
    res.send(relatedproducts);
})

// Creating end point for popular_in_women

app.get("/popularinwomen",async (req,res)=>{
        let product = await Product.find({category:"women"});
        let popular_in_women = product.slice(0,4);
        res.send(popular_in_women);
})

//  creating end point for addtocart

const fetchUser = async (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send(" I Please Authenticate using valid token")
    }
    else{
        try {
            const data = jwt.verify(token,"secret_ecom");
            req.user = data.user;
            next();
        } catch (error) {
            console.log("Error found in token ",error);
            res.status(401).send({errors:"Please Authenticate using valid token"})
        }
    }
}

app.post("/addtocart",fetchUser,async (req,res)=>{
   let userData = await User.findOne({_id:req.user.id});
   console.log(userData);
   userData.cartData[req.body.itemid] = userData.cartData[req.body.itemid] + 1;
   await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
   res.send("Added")
})  

// creating end point for remove from cart

app.post("/removefromcart",fetchUser,async (req,res)=>{
    let userData   = await User.findOne({_id:req.user.id});
    userData.cartData[req.body.itemid] = userData.cartData[req.body.itemid] -1; 
    await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})

// creating end point for getCart

app.post("/getcart",fetchUser,async (req,res)=>{
    console.log("Get Cart");
    let userData = await User.findOne({_id:req.user.id});
    res.send(userData.cartData);
})

app.listen(port,(error)=>{
    if(!error) {
        console.log("Listening to the port no ",port);
    }
    else{
        console.log("Found error ",error);
    }
})

