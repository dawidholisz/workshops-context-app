import React from 'react'
import { useToggle } from 'react-use'
import { Badge, Button, Collapse, Navbar, NavbarBrand, NavbarText, NavbarToggler } from 'reactstrap'

const MainNavbar = ({ itemsInCart }) => {
  const [isOpen, toggle] = useToggle(false)

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Selleo react workshops</NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <NavbarText>Context API</NavbarText>
        {itemsInCart > 0 && (
          <Button color="primary" className="ms-auto me-1">
            Items in cart <Badge color="success">{itemsInCart}</Badge>
          </Button>)}
      </Collapse>
    </Navbar>
  )
}

export default MainNavbar
