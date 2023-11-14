import express from "express";
import {
    getProducts,
    getProductsById
} from '../controllers/productController.js';
const router = express.Router();

// below 2 are replaced by import {getProducts,getProductsById}
// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from '../models/productModel.js';
//------------------------------------------------------
// import products from "../data/products.js";

router.route('/').get(getProducts);
router.route('/:id').get(getProductsById);

// old code below . replaced by above 2 lines

// router.get('/', asyncHandler(async (req,res)=>{
//     const products = await Product.find({});
//     throw new Error('Some error');  
//     res.json(products);
// }));

// router.get('/:id', asyncHandler(async(req,res)=>{
//     const product = await Product.findById(req.params.id);
    
//     if(product){
//         res.json(product);
//     }else{
//         res.status(404);
//         throw new Error('Resource not found');
//     }
    
    
// }));

export default router;