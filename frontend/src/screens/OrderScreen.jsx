import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useGetOrderDetailsQuery } from "../slices/ordersApiSlice";
import { useSelector, useDispatch } from "react-redux"


import React from 'react'

const OrderScreen = () => {
    const { id: orderId } = useParams();
    const { data: order , refetch, isLoading , error } = useGetOrderDetailsQuery(orderId);

    const navigate = useNavigate();
    const submitHandler = (e) => {
        navigate('/final');
    }

    return isLoading ? <Loader /> : error ? <Message variant="success"><h2>Order Placed Successfully</h2></Message>
  : (
    <>
    <h1>Order {order._id}</h1>
    <Row>
        <Col md={8}>
            <Row>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>Shipping</h2>
                        <p>
                            <strong>Name: </strong> {order.user.name}
                        </p>
                        <p>
                            <strong>Address: </strong>
                            {order.shippingAddress.address}, {order.shippingAddress.city}{' '}{order.shippingAddress.postalCode}, {order.shippingAddress.country}
                        </p>
                        {order.isDelivered ? (<Message variant='success'>
                            Delivered on {order.deliveredAt}
                        </Message>
                        ) : (
                            <Message id='a1' variant='primary'>Order on Transit</Message>
                            // <Message id='a1' variant='danger'>Not Delivered</Message>
                        )}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <p>
                            <strong>Method: </strong>
                            {order.paymentMethod}
                        </p>
                        {order.isPaid ? (<Message variant='success'>
                            Paid on {order.paidAt}
                        </Message>
                        ) : (
                            <Message id='a2' variant='primary'>Payment Processing</Message>
                            // <Message id='a2' variant='danger'>Not Paid</Message>
                        )}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Order Items</h2>
                        {order.orderItems.map((item ,index)=>(
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col md={1}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col>
                                    <Link to={`/product/${item.product}`}>
                                        {item.name}
                                    </Link>
                                    </Col>
                                    <Col md={4}>
                                        {item.qty} x ${item.price} = ${item.qty * item.price}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup.Item>
                </ListGroup>
            </Row>
        </Col>
        <Col md={4}>
        <Message variant="success"><h3>Order Placed Successfully</h3></Message>
            <Card>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                <Button type='button' className='btn btn-dark my-3' onClick={submitHandler} >
                            Finalize Order
                        </Button>
                </ListGroup.Item>
                    {/* PAY ORDER PLACEHOLDER */}
                    {/* MARK AS DELIVERED PLACEHOLDER */}
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default OrderScreen