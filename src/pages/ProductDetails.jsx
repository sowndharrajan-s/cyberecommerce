import React from 'react'
import ProductView from '../components/ProductView'
import ProductViewDetails from '../components/ProductViewDetails'
import Discounts from '../components/Discounts'

const ProductDetails = () => {
  return (
    <div>
      <ProductView/>
      <ProductViewDetails/>
      <Discounts/>
    </div>
  )
}

export default ProductDetails