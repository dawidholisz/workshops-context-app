import React from 'react'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap'
import { useCart } from 'contexts/CartContext'

const SingleProduct = ({ product }) => {
  const { id, product: name, price, image } = product
  const { addProductToCart } = useCart()
  return (
    <Card>
      <CardImg top width="100%" src={image} alt="Card image cap"/>
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{price}</CardSubtitle>
        <Button onClick={() => addProductToCart(id)}>Add to cart</Button>
      </CardBody>
    </Card>
  )
}

export default SingleProduct
