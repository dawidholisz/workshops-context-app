import React from 'react'
import { Alert } from 'reactstrap'
import CartItem from 'components/CartItem'
import { useCart } from 'contexts/CartContext'

const Cart = () => {
  const { cart } = useCart()
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 && <Alert color="info">
        Your cart is empty
      </Alert>}
      {cart.map(cartItem => <CartItem item={cartItem} key={cartItem.id}/>)}
    </div>
  )
}

export default Cart
