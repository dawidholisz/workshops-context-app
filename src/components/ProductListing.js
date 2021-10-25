import React from 'react'
import { Col, Row } from 'reactstrap'

import products from 'data/products'
import SingleProduct from 'components/SingleProduct'

const ProductListing = () => {
  return (
    <Row>
      <h2>Products:</h2>
      {products.map(product => (
        <Col md="4" key={product.id}>
          <SingleProduct product={product}/>
        </Col>))
      }
    </Row>
  )
}

export default ProductListing
