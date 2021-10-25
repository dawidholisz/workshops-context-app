import React from 'react'
import { Alert } from 'reactstrap'
import CartItem from 'components/CartItem'

const Cart = ({ cart, removeProductFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 && <Alert color="info">
        Your cart is empty
      </Alert>}
      {cart.map(cartItem=><CartItem item={cartItem} key={cartItem.id} removeProductFromCart={removeProductFromCart}/>)}
    </div>
  )
}

export default Cart
