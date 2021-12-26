import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartList = (props) => {
    const { removeItem, numberWithDots } = useContext(CartContext);
    const { id, url, category, title, price, quantity, color } = props;
    return (
        <>

            <div className="card mb-3 mx-0 p-0" >
                <div className="row g-0">
                    <div className="col-2 d-flex align-items-center p-1 ">
                        <img src={url} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col p-2 ms-2">
                        <div className="card-body p-0">
                            <h5 className="card-title">{title}</h5>
                            <span className="card-text">
                                <small className="text-muted">Categoria: <span style={{ textTransform: 'capitalize' }}>{category}, </span></small>
                                <small className="text-muted">Color: <span style={{ textTransform: 'capitalize' }}>{color}, </span></small>
                            </span>
                            <p className="card-text mb-0">
                                <small className="text-muted">{quantity} Unidad/es, </small>
                                <small className="text-muted">precio unitario: ${numberWithDots(price)}</small>
                            </p>
                            <p className='h4 pt-2 justify-content-end'>$ {numberWithDots(price * quantity)}</p>
                            <button className="btn d-flex justify-content-start p-0" onClick={() => removeItem(id)} >
                                <div>
                                    <i className="fa fa-trash"></i>  Eliminar
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default CartList
