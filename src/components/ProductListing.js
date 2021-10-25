import React from 'react'
import products from 'data/products'
import SingleProduct from 'components/SingleProduct'
import { Row,Col } from 'reactstrap'

const ProductListing = ({addProductToCart}) => {
  return (
    <Row>
      <h2>Products:</h2>
      {products.map(product=>(
        <Col md="4" key={product.id}>
          <SingleProduct product={product} addProductToCart={addProductToCart} />
        </Col>))
      }
    </Row>
  )
}

export default ProductListing
