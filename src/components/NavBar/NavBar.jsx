
import CartWigdet from '../CartWidget/CartWidget';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand>
            <NavLink className='navbar-brand' to='/'>MiTienda</NavLink>
          </Navbar.Brand>
          <Nav.Link href="!#home">Inicio</Nav.Link>
          <Nav.Link href="!#news">Novedades</Nav.Link>
          <Nav.Link href="!#pricing">Precios</Nav.Link>
        </Nav>
        <CartWigdet />
      </Container>
    </Navbar >
  )
}


export default NavBar;
