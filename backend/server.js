import  express  from "express";
// import products from "./data/products.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./config/db.js";
connectDB();
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js';

const port = process.env.PORT || 5000;

const app=express();

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie parser Middleware
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('API is running...<br><br>Backend of TechTrove');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => res.send({clientId:process.env.PAYPAL_CLIENT_ID}));

app.use(notFound);
app.use(errorHandler);

// Moved to ./routes/productRoutes.js
// old express code (reference , not in use)

// app.get('/api/products',(req,res)=>{
//     res.json(products);
// })

// app.get('/api/products/:id',(req,res)=>{
//     const product=products.find((p)=>p._id===req.params.id);
//     res.json(product);
// })


app.listen(port,()=> console.log(`server running in ${port}`));