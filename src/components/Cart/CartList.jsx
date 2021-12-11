import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartList = (props) => {
    const { removeItem } = useContext(CartContext);
    const { id, url, category, title, price, quantity, color } = props;
    return (
        <div className='row pt-3 border-dark'>
            <div className="col-md-2 col-xs-2 d-flex justify-content-center align-items-center">
                <img style={{ height: '5rem' }} src={url} className="border border-5 figure-img img-fluid rounded" alt="..."></img>
            </div>
            <div className="col-md-9 ">
                <div className="row d-flex justify-content-end py-1">
                    <h5 className="h4">{title}</h5>
                    <span>Categoria: <span style={{ textTransform: 'capitalize' }}>{category} </span></span>
                    <span>Color: <span style={{ textTransform: 'capitalize' }}>{color}</span></span>
                </div>
                <div className="row d-flex justify-content-end py-1">
                    <div className="col align-items-center">
                        <span className='h4'>$ {price}</span>
                    </div>
                    <div className="col d-flex  align-items-center">
                        <span className="h5">Cantidad: {quantity}</span>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <button className="btn btn-danger btn-sm" onClick={() => removeItem(id)} >
                            <i className="fa fa-trash"></i>  Eliminar
                        </button>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default CartList
