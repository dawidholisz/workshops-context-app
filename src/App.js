import { Col, Container, Row } from 'reactstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MainNavbar from 'components/MainNavbar'
import Cart from 'components/Cart'
import ProductListing from 'components/ProductListing'

function App () {
  return (
    <div className="App">
      <MainNavbar/>
      <Container>
        <Row>
          <Col md="8"><ProductListing/></Col>
          <Col md="4"><Cart/></Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
