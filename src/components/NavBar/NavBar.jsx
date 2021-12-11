
import CartWigdet from '../CartWidget/CartWidget.jsx';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom/'
import CategoryListContainer from '../CategoryListContainer/CategoryListContainer';


export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink className='navbar-brand' to='/'>MiTienda</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <CategoryListContainer />
            </Nav>
            <Nav>
              <CartWigdet />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}


export default NavBar;
