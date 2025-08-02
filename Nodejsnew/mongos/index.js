/*
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecom');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "max 100",
        price: 200,
        brand: 'maxx',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}

const updateInDB =async  () => {
    const Product = mongoose.model('products', productSchema);
    let data =await  Product.updateOne(
        { name: "max 6" },
        {
            $set: { price: 550,name:'max pro 6' }
        }
    )
    console.log(data)
}

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:'max 100'})
    console.log(data);
}
const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    //let data = await Product.find({name:'max pro 611'})
    let data = await Product.find()
    console.log(data);
}

saveInDB();

*/


const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
require("./config");
const Product = require('./product');
const app = express();

app.use(express.json());
app.post("/create", async (req, resp) => {
    let data = new Product(req.body);
    const result = await data.save();
    resp.send(result);
});

app.get("/list", async (req, resp) => {
    let data = await Product.find();
    resp.send(data);
})

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})


app.put("/update/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})


app.get("/search/:key",async (req,resp)=>{
    let data = await Product.find(
        {
            "$or":[
                {name:{$regex:req.params.key}},
                {brand:{$regex:req.params.key}},
                {category:{$regex:req.params.key}}
               
            ]
        }
    )
    resp.send(data);

})


//For file upload

// Ensure upload directory exists
const uploadDir = path.join(__dirname, 'mongos/uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).single('user_file');

app.post('/upload', (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            return res.status(500).send('Error uploading file.');
        }
        res.send('File uploaded successfully.');
    });
});


app.listen(5000)