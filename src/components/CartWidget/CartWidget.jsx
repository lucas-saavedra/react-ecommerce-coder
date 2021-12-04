import { NavLink } from 'react-router-dom';

const CartWigdet = () => {
    return (
        <>
            <NavLink to={'/cart'}>
                <i className="fa fa-shopping-cart text-white fa-2x"></i>
            </NavLink>
        </>
    )
}

export default CartWigdet
