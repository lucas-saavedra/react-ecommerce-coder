import Brief from "./Brief"
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import getFirestore from '../../Firebase/firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import PageNotFound from "../PageNotFound/PageNotFound";
import { NavLink } from 'react-router-dom'
import Loader from "../Loader/Loader";
import OrderForm from "./OrderForm";

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState();
    const [loading, setLoading] = useState(true)

    const submitOrder = (order) => {

        const getItem = (item, quantity) => {
            return { id: item.id, title: item.title, quantity, price: quantity * item.price }
        }
        order.items = cart.map(({ item, quantity }) => getItem(item, quantity))
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.total = cartTotal()
        const db = getFirestore();
        db.collection('orders').add(order)
            .then(resp => setOrderId(resp.id), clearCart())
            .catch(err => console.log(err))
            .finally(setLoading(false))
    }

    return (
        <>

            {!orderId && !loading &&
                (<Loader msg='Procesando su compra' />)
            }
            {orderId && (
                <>
                    <div className="row">
                        <div className="col">
                            <div className="p-5 mb-4 bg-success rounded-3">
                                <div className="container-fluid py-5">
                                    <h1 className="display-5 fw-bold">¡Exito! Compra realizada <i className="far fa-smile-beam"></i></h1>
                                    <p className="col-md-8 fs-4">El ID de su orden es:</p>
                                    <p className="col-md-8 fs-4" >{orderId}</p>
                                    <NavLink to={'/'}>
                                        <button className="btn btn-outline-light btn-lg" type="button">Volver al inicio</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div >
                    </div >
                </>)}

            {cart.length === 0 ? (<PageNotFound msg="Su carrito está vacío" icon='' />) :
                (<>
                    <div className="container">
                        <Brief />
                        <OrderForm submitOrder={submitOrder} />
                    </div>

                </>
                )
            }

        </>
    )
}

export default Checkout
