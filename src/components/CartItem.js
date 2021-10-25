import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { useCart } from 'contexts/CartContext'

const CartItem = ({ item }) => {
  const { product: name, id, price } = item
  const { removeProductFromCart } = useCart()
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{price}</CardSubtitle>
        <Button onClick={() => removeProductFromCart(id)}>Remove from cart</Button>
      </CardBody>

    </Card>
  )
}

export default CartItem
