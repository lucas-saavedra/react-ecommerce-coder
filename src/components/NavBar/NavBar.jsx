
import CartWigdet from '../CartWidget/CartWidget.jsx';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom/'
import CategoryListContainer from '../CategoryListContainer/CategoryListContainer';



export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className='px-3'>
        <Navbar.Brand ><CartWigdet /></Navbar.Brand>
        <Navbar.Brand as={NavLink} to='/'>E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="text-end">
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <CategoryListContainer />
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  )
}

export default NavBar;
