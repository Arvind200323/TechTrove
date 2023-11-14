import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
 } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import './assets/styles/index.css';
// import './assets/styles/bootstrap.custom.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homescreen from './screens/homescreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminRoute from './components/AdminRoute';
import OrderListScreen from './screens/admin/OrderListScreen';
import FinalScreen from './screens/FinalScreen';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route index={true} path="/" element={<Homescreen />} />
    <Route path="/product/:id" element={<ProductScreen />} />
    <Route path="/cart" element={<CartScreen />} />
    <Route path="/login" element={<LoginScreen />} /> 
    <Route path="/register" element={<RegisterScreen />} /> 
    
    
    {/* private routes */}
    <Route path='' element={<PrivateRoute />}>
    <Route path="/shipping" element={<ShippingScreen />} /> 
    <Route path="/payment" element={<PaymentScreen />} />
    <Route path="/placeorder" element={<PlaceOrderScreen />} />
    <Route path="/orders/:id" element={<OrderScreen />} />
    <Route path="/final" element={<FinalScreen />} />
    <Route path="/profile" element={<ProfileScreen />} /> 

    {/* admin routes */}
    <Route path='' element={<AdminRoute />}>
    <Route path="/admin/orderlist" element={<OrderListScreen />} /> 
    
    </Route>
    </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
