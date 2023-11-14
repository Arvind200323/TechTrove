import { useState  } from "react";
import { useParams , useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
// import {useState, useEffect} from 'react';
// import products from "../products"

import { Row, Col ,Image , ListGroup ,Card, Button, Form } from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
// import axios from 'axios';
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { addToCart } from "../slices/cartSlice";
import {toast} from 'react-toastify'

const ProductScreen = () => {
    // const [product, setProduct] = useState({});

    const { id:productId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [qty, setQty] = useState(1);

    const { data: product, isLoading, error}= useGetProductDetailsQuery(productId);

    const goBack = ()=>{
        navigate('/');
    }

    const addToCartHandler = ()=>{
        dispatch(addToCart({...product, qty}));
        toast.success('Added to Cart');
        // navigate('/cart');
    }

    // useEffect(()=>{
    //     const fetchProduct = async()=>{
    //         const {data} = await axios.get(`/api/products/${productId}`);
    //         setProduct(data);
    //     }

    //     fetchProduct();
    // },[productId])
    

  return (
    <>
    <Button className="btn btn-light my-3" onClick={goBack}>
        Go Back
    </Button>
    
    { isLoading ? (
        <Loader></Loader>
    ) : error? (
        <Message variant='danger'>{ error?.data?.message || error.error }</Message>
    ): (
        <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                <strong>Price: ${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                <strong>Status: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    {product.countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>Qty</Col>
                                <Col>
                                    <Form.Control as='select' value={qty} onChange={(e)=>setQty(Number(e.target.value)) }>
                                        {[...Array(product.countInStock).keys()].map((x)=>(
                                            <option key={x+1} value={x+1}>
                                                {x+1}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}
                    <ListGroup.Item>
                        <Button className="btn btn-dark my-3" type="button" disabled={product.countInStock === 0} onClick={addToCartHandler}>
                            Add To Cart
                        </Button>
                    </ListGroup.Item>

                </ListGroup>
            </Card>
        </Col>
    </Row>
    ) }



     
    </>
  )
  
}

export default ProductScreen