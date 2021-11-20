import { useState } from 'react'
import './Item.css'
const Item = ({ prod, initialValue, onAddProd }) => {
    const { id, title, price, url, category, stock } = prod;
    const [cont, setCont] = useState(initialValue)
    const addProdAmount = () => {
        if (cont < stock) {
            setCont(cont + 1)
        }
    }
    const substractProdAmount = () => {
        if (cont > 1) {
            setCont(cont - 1)
        }
    }
    const addProductCart = () => {
        onAddProd(title, cont, id);
        setCont(initialValue)
    }

    return (
        <div className="col">
            <div className="card card h-100">
                <img src={url} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="h3">{title}</h5>
                    <p className="price h5">$ {price}</p>
                    <p className="h5"> <span className="category badge bg-primary">{category}</span> </p>
                    <div
                        className="d-flex py-1 justify-content-between">
                        <div >
                            <button className="btn btn-primary btn-sm mr-1" onClick={addProdAmount} >
                                <i className="fa fa-plus"></i>
                            </button>
                            <span className="mx-1 py-1">{cont}</span>
                            <button className="btn btn-danger btn-sm mx-1 py-1" onClick={substractProdAmount}>
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        {stock === 0 ?
                            <button className="btn btn-warning btn-sm mx-1">
                                ¡Sin stock!
                            </button>
                            :
                            <button className="btn btn-success btn-sm mx-1" onClick={addProductCart}>
                                Agregar
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Item
