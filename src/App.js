import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from 'data/products'

import MainNavbar from 'components/MainNavbar'
import { Col, Container, Row } from 'reactstrap'
import Cart from 'components/Cart'
import ProductListing from 'components/ProductListing'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])

  const addProductToCart = (id) =>{
    setCart([...cart,products.find(({id:productId})=>id===productId)])
  }
  const removeProductFromCart = (id) =>{
    setCart(cart.filter(({id:productId})=>id!==productId))
  }

  return (
    <div className="App">
     <MainNavbar itemsInCart={cart.length}/>
      <Container>
        <Row>
          <Col md="8"><ProductListing addProductToCart={addProductToCart}/></Col>
          <Col md="4"><Cart cart={cart} removeProductFromCart={removeProductFromCart}/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
