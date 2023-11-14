import react from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FinalScreen = () => {
    return(
        <div className=''>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <h1><center>Order Finalized</center></h1>
            <h4><center>Your Order will be Delivered in 2 to 3 Working Days</center></h4>
            <Link to='/'>
                <center><Button className='btn btn-dark my-3'>HomePage</Button></center>
            </Link>
        </div>
    )
}

export default FinalScreen;