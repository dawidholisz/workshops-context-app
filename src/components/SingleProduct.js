import React from 'react'
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const SingleProduct = ({ product,addProductToCart }) => {
  const {id,product:name,price,image} = product
  return (
    <Card>
      <CardImg top width="100%" src={image} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{price}</CardSubtitle>
        <Button onClick={()=>addProductToCart(id)}>Add to cart</Button>
      </CardBody>
    </Card>
  )
}

export default SingleProduct
