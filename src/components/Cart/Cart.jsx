import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import CartList from "./CartList";

const Cart = () => {
    const { cart, cartAmount, cartTotal, clearCart, numberWithDots } = useContext(CartContext);
    return (
        <><div className="container" >

            {cartAmount() === 0 ?
                <>
                    <div className="col card-body text-center">
                        <h1 className="display-5">Su carrito se encuentra vacío</h1>
                        <NavLink to={'/'}>
                            <button className="btn btn-primary mx-1">
                                <i className="fa fa-home pe-2"></i>
                                Volver a MiTienda
                            </button>
                        </NavLink>
                    </div>
                </>

                :
                <>
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-primary mt-3" onClick={() => clearCart()}>
                            Vaciar carrito
                            <i className="fa fa-shopping-cart text-white"></i>
                        </button>
                    </div>
                    <div className='row py-3  d-flex justify-content-center'>
                        {cart.map(({ item, quantity }) =>
                            <CartList
                                key={item.id}
                                {...item}
                                quantity={quantity}>
                            </CartList>
                        )
                        }
                    </div>

                    <div className="row bg-white d-flex justify-content-end mb-3" style={{

                        position: 'sticky',
                        bottom: 0,
                        height: '100%'
                    }}>
                        <div className=" py-md-3 p-0 " >
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between justify-content-md-end">
                                    <div className="d-flex align-items-center pb-2 ">
                                        <h4 className="m-0 p-0 ">Total: ${numberWithDots(cartTotal())}</h4>
                                    </div>
                                </div>
                                <NavLink to={'/checkout'} className=' d-grid d-flex align-items-center justify-content-md-end' style={{ textDecoration: 'none' }}>
                                    <button className="col col-md-3 btn btn-success mx-1 ">
                                        <p style={{ fontSize: '1.5rem' }} className="display-5 m-1">Continuar compra</p>
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>


                </>
            }



        </div>
        </>

    )
}
export default Cart
