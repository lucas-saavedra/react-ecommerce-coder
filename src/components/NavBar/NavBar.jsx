
import CartWigdet from '../CartWidget/CartWidget';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MiTienda</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="!#home">Inicio</Nav.Link>
          <Nav.Link href="!#news">Novedades</Nav.Link>
          <Nav.Link href="!#pricing">Precios</Nav.Link>
        </Nav>
        <CartWigdet />
      </Container>
    </Navbar>
  )
}


export default NavBar;
