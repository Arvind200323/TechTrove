import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Button, Row, Col ,ListGroup, Image, Card} from "react-bootstrap"
import { toast } from "react-toastify"
import CheckoutSteps from '../components/CheckoutSteps';
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useCreateOrderMutation } from '../slices/ordersApiSlice'
import { clearCartItems } from '../slices/cartSlice'

const PlaceOrderScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

   
    

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const [createOrder, {isLoading, error}] = useCreateOrderMutation();

    useEffect(()=>{
        if(!cart.shippingAddress.address){
            navigate('/shipping');
        }
        else if(!cart.paymentMethod){
            navigate('/payment');
        }
    },[cart.paymentMethod, cart.shippingAddress.address, navigate]);


    // used to display total price since itemsPrice and total price are not working in cartUtils.js
    const itemsPrice = Number(cartItems.reduce((acc, item)=> acc + item.qty * item.price, 0).toFixed(2));
    const shippingPrice = Number(cart.shippingPrice);
    const taxPrice = Number(cart.taxPrice);
    const total = itemsPrice + shippingPrice + taxPrice;

    const PlaceOrderHandler = async () => {
        try{
            const res = await createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                // itemsPrice: cart.itemsPrice, (replaced by below line)
                itemsPrice: cartItems.reduce((acc, item)=> acc + item.qty * item.price, 0).toFixed(2),
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                // totalPrice: cart.totalPrice  (replaced by below line)
                totalPrice: total
            }).unwrap();
            dispatch(clearCartItems());
            navigate(`/orders/${res._id}`);
        } catch(error){
            toast.error(error.message);
        }
    }

  return (
    <>
    <CheckoutSteps step1 step2 step3 step4 />
    <Row>
        <Col md={8}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h2>Shipping</h2>
                    <p>
                        <strong>Address: </strong>
                        {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                    </p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h2>Payment Method</h2>
                    <strong>Method: </strong>
                    {cart.paymentMethod}
                </ListGroup.Item>
                <ListGroup.Item>
                    <h2>Order Items</h2>
                    {cart.cartItems.length === 0 ? (
                        <Message>Your Cart is Empty</Message>
                    ) : (
                        <ListGroup variant="flush">
                            {cart.cartItems.map((item ,index) => (
                                <ListGroup.Item>
                                    <Row>
                                        <Col md={1}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col>
                                            <Link to={`/products/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={4}>
                                            {item.qty} x ${item.price} = ${item.qty * item.price}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))};
                        </ListGroup>
                    )}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>Order Summary</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Items: </Col>
                            <Col>${ cartItems.reduce((acc, item)=> acc + item.qty * item.price, 0).toFixed(1)}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Shipping: </Col>
                            <Col>${cart.shippingPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Tax: </Col>
                            <Col>${cart.taxPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Total: </Col>
                            <Col>${total}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {error && <Message variant='danger'>{error}</Message>}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button type="button" className="btn btn-dark my-3" disabled={cart.cartItems.length===0} onClick={PlaceOrderHandler}>Place Order</Button>
                        {isLoading && <Loader />}
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default PlaceOrderScreen