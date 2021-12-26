
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const ItemCount = ({ stock, addProductCart }) => {
    const [count, setCount] = useState(1);
    const [change, setChange] = useState(false);

    const addProdAmount = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const substractProdAmount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    const OnAdd = () => {
        setChange(true);
        addProductCart(count)
    }

    return (
        <>
            {
                stock === 0 ?
                    <>
                        <NavLink to={'/'}>
                            <button className="btn btn-warning mx-1">
                                <i className="fa fa-home pe-2"></i>
                                ¡Sin stock! Volver al inicio.
                            </button>
                        </NavLink>
                    </>

                    :
                    change === false ? (
                        <>
                            <div className="d-flex py-1 justify-content-between align-items-center">
                                <button className="btn mr-1 btn-lg" onClick={addProdAmount} >
                                    <i className="fa fa-plus"></i>
                                </button>
                                <h3 className="mx-1 ">{count}</h3>
                                <button className="btn mx-1 btn-lg" onClick={substractProdAmount}>
                                    <i className="fa fa-minus fa-1x"></i>
                                </button>
                            </div>
                            <button className="btn btn-success" onClick={() => OnAdd()}>
                                Agregar
                            </button>
                        </>)
                        :
                        <>
                            <NavLink to={'/cart'}>
                                <button className="btn btn-success mx-1">
                                    <i className="fa fa-shopping-cart text-white pe-2"></i>
                                    Terminar mi compra
                                </button>
                            </NavLink>
                            <NavLink to={'/'}>
                                <button className="btn btn-primary mx-1">
                                    <i className="fa fa-home text-white pe-2"></i>
                                    Seguir comprando
                                </button>
                            </NavLink>
                        </>

            }
        </>


    )
}

export default ItemCount
