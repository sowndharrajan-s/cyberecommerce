import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Address from './pages/Address'
import Navbar from './components/Navbar'
import Payment from './pages/Payment'
import Shipping from './pages/Shipping'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' '>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/productsdetails" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path="/shipping" element={<Shipping/>} />
        <Route path="/payment" element={<Payment/>} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App