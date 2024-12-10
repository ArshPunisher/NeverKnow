import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/page';
import Login from './pages/auth/login/page';
import SignUp from './pages/auth/signup/page';
import Cart from './pages/cart/page';
import Checkout from './pages/checkout/page';
import Wishlist from './pages/wishlist/page';
import AllProducts from './pages/products/page';
import ProductDetails from './pages/products/[product_Id]/page';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/auth/login' element={<Login/>} />
        <Route path='/auth/signup' element={<SignUp/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/products' element={<AllProducts/>} />
        <Route path='/products/:product_id' element={<ProductDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
