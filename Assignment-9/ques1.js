const express = require('express');
const fs = require('fs');
const {uuid} = require('uuidv4');
const {Product} = require('./Product');
const app = express();

const port = 5000;

app.use(express.json())

app.get('/', (req, res) => {
    try{
        console.log(__dirname);
        const filearray = fs.readdirSync(__dirname);
        console.log(filearray);
        let products = [];
        let message ='';
        if(filearray.includes('products.json'))
            products = JSON.parse(fs.readFileSync('products.json'));
        if(products.length > 0)
            message = 'Products loaded successfully'
        else
            message = 'No products found' 
        return res.status(200).json({
            message: message,
            products
        })
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
    
})


app.delete('/del/:product_id',(req, res) => {
    try{
        const{ product_id } = req.params;
        const filearray = fs.readdirSync(__dirname);
        let products =[];

        if(filearray.includes('products.json'))
            products = JSON.parse(fs.readFileSync('products.json'));
        
        
        products = products.filter(product=>product.product_id != product_id)

        fs.writeFile('products.json', JSON.stringify(products),(err)=>{
            if(err)
                res.status(500).json({
                    message:"Something went wrong while removing product",
                })
            res.status(200).json({
                message:"product removed successfully"
            })
        })
        
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
})


app.put('/update/:id',(req, res) => {
    try{
        const{ id } = req.params;
        const product_id = id;
        const{product_name,product_price,product_description,product_image} = req.body;
        const filearray = fs.readdirSync(__dirname);
        let products =[];

        if(filearray.includes('products.json'))
            products = JSON.parse(fs.readFileSync('products.json'));
        
        
        products = products.filter(product=>product.product_id != product_id)

        products = [...products,{product_id,product_name,product_price,product_description,product_image}]
        fs.writeFile('products.json', JSON.stringify(products),(err)=>{
            if(err)
                res.status(500).json({
                    message:"Something went wrong while updating product",
                })
            res.status(200).json({
                message:"product updated successfully"
            })
        })
        
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
})


app.post('/add',(req, res) => {
    try{

        const filearray = fs.readdirSync(__dirname);
        let products =[];
        let error ='';

        if(filearray.includes('products.json'))
            products = JSON.parse(fs.readFileSync('products.json'));
        
        const{ product_name, product_price, product_description,product_image }= req.body;
        
        if(product_name =='' && error == ''){
            error = "Missing product name"
            res.status(400).json({
                message: error
            })
        }
        if(product_price =='' && error == ''){
            error = "Missing product Price"
            res.status(400).json({
                message: error
            })
        }
        const product = new Product (uuid(),product_name, product_price, product_description,product_image);
        products = [...products,product];

        fs.writeFile('products.json', JSON.stringify(products),(err)=>{
            if(err)
                res.status(500).json({
                    message:"Something went wrong while adding product",
                })
            res.status(200).json({
                message:"product added successfully",
                product
            })
        })
        
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong2",
            error:err.message
        })
    }
})

app.listen(port,() => {
    console.log(`Server listening on port ${port}`);
})