const express = require('express');
const fs = require('fs');
const { Product } = require('../models/Course');
const router = express.Router();

router.get('/', async (req,res)=>{
    try{
        const products = await Product.find();
        return res.status(200).json({
            message:"Product Retrieved Successfully",
            products
        })
    }
    catch(err){
        return res.status(500).json({
            message:"Something Went Wrong",
            error:err.message
        })
    }
})

router.post('/add',async (req,res)=>{
    try{
        const { product_name,product_price,product_image,product_description } = req.body;
        if(product_name == ''&& error == ''){
            error = "Missing Product Name";
            req.status(400).json({
                meassage:error
            })
        }
        if(product_price == ''&& error == ''){
            error = "Missing Product Price";
            req.status(400).json({
                meassage:error
            })
        }
        const productObj = {
            product_name,
            product_price,
            product_image,
            product_description
        }
        const product = new Product(productObj);
        await product.save();
        res.status(200).json({
            message:"Product saved successfully"
        })
    }
    catch(err){
        // console.log(err.message);
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
    
})
router.get('/:name', async (req,res)=>{
    try{
        const product = await Product.findOne({course_name:req.params.name});
        res.status(200).json({
            message:"Data Fetched",
            product
        })
    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err.meassage
        })
    }
})

router.put("/update/:id", async (req,res)=>{
    try{
        const id = req.params.id;
        const {product_name,product_price,product_image,product_description} = req.body;
        const product = await Product.findById(id);
        product.product_name = product_name;
        product.product_price = product_price;
        product.product_image = product_image;
        product.product_description = product_description;
        await product.save();
        return res.status(200).json({
            message:"Data Updated Successfully"
        })
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.meassage
        })
    }
    
})

router.delete('/delete/:name',async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.name);
        return res.status(200).json({
            message:"Data Deleted"
        })
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
})

module.exports = router;

