import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import getFirestore from '../../Firebase/firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import CartList from "./CartList";

const Cart = () => {
    const { cart, cartAmount, cartTotal, clearCart } = useContext(CartContext);

    const getOrder = () => {
        const order = {}
        order.buyer = { name: 'Lucas Saavedra', phone: '+543456620180', email: 'saav15@hotmail.es' };
        const getItem = (item, quantity) => {
            return { id: item.id, title: item.title, price: quantity * item.price }
        }
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.items = cart.map(({ item, quantity }) => getItem(item, quantity))
        order.total = cartTotal()
        const db = getFirestore();
        db.collection('orders').add(order)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
            .finally(() => { })
    }

    return (
        <><div className="container-fluid bg-light" >
            <div className="row d-flex" >
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
                        <div className="col-md-8">
                            <div className='col d-flex justify-content-end py-3'>

                                <button type="button" className="btn btn-primary position-relative" onClick={() => clearCart()}>
                                    Vaciar carrito
                                    <i className="fa fa-shopping-cart text-white"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        <i className="fa fa-trash"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="col">
                                {cart.map(({ item, quantity }) =>
                                    <CartList
                                        key={item.id}
                                        {...item}
                                        quantity={quantity}>
                                    </CartList>
                                )
                                }
                            </div>
                        </div>
                        <div className="sticky-md-top d-flex justify-content-end" style={{ width: '18rem', height: '18rem' }}>
                            <div className="card">
                                <div className="card-body">
                                    <h3> Resumen del pedido</h3>
                                    <h4>Total: ${cartTotal()}</h4>
                                    <button className='btn btn-success'>Comprar</button>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
        </>

    )
}
export default Cart
