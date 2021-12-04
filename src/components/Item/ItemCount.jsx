
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const ItemCount = ({ stock, addProductCart }) => {
    const [count, setCount] = useState(1);
    const [change, setChange] = useState(false);
    const [timeMock, setimeMock] = useState(false);
    const addProdAmount = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const mockTime = () => {
        setTimeout(() => {
            setimeMock(true)
        }, 1000);
    }
    const substractProdAmount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    const OnAdd = () => {
        addProductCart(count);
        setChange(true)
        mockTime();
    }

    return (
        <>
            {

                stock === 0 ?
                    <button className="btn btn-warning ">
                        ¡Sin stock!
                    </button>
                    :
                    change === false ? (
                        <>
                            <button className="btn mr-1" onClick={addProdAmount} >
                                <i className="fa fa-plus"></i>
                            </button>
                            <h4 className="mx-1">{count}</h4>
                            <button className="btn mx-1" onClick={substractProdAmount}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-success mx-1" onClick={OnAdd}>
                                Agregar
                            </button>
                        </>)
                        :
                        <>
                            {timeMock === true ? <>
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
                                :
                                <>
                                    <button className="btn btn-success" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Cargando...
                                    </button>
                                </>
                            }
                        </>

            }
        </>


    )
}

export default ItemCount
