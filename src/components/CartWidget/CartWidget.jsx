import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const CartWigdet = () => {
    const { cartAmount } = useContext(CartContext);

    return (
        <>

            {cartAmount() !== 0 &&
                <NavLink to={'/cart'}>
                    <div className='col d-flex justify-content-end py-2'>
                        <button type="button" className="btn position-relative">
                            <i className="fa fa-shopping-cart text-white  fa-2x"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cartAmount()}
                            </span>
                        </button>
                    </div>
                </NavLink>
            }

        </>
    )
}

export default CartWigdet
