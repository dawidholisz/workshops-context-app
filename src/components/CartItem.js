import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'

const CartItem = ({item,removeProductFromCart}) => {
  const {product:name,id,price} = item
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{price}</CardSubtitle>
        <Button onClick={()=>removeProductFromCart(id)}>Remove from cart</Button>
      </CardBody>

    </Card>
  )
}

export default CartItem
