import React from 'react'
import ItemCount from '../Item/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import PageNotFound from '../PageNotFound/PageNotFound';


const ItemDetail = ({ item }) => {
    const { url, price, title, category, detail, color, stock } = item;
    const { addToCart, numberWithDots } = useContext(CartContext);
    const addProductCart = (count) => {
        addToCart(item, count)
    }
    return (
        <>
            {Object.keys(item).length === 0 ? (<PageNotFound />) : (
                <div className="row pt-3" >
                    <div className="col-md-6 col-xs-2">
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={url} className="border border-5 figure-img img-fluid rounded" alt="..."></img>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h5 className="h3">{title}</h5>
                            <p className="lead"> {detail}</p>
                            <div className="row">
                                <div className="col-6">  <p className="category h5">Categoria</p>
                                    <h5><span className="badge bg-primary" style={{ textTransform: 'capitalize' }}>{category}</span></h5></div>
                                <div className="col-6">     <p className="category h5">Color</p>
                                    <h5> <span className="badge bg-secondary" style={{ textTransform: 'capitalize' }}>{color}</span></h5></div>
                            </div>
                            <h3 className='display-6'>$ {numberWithDots(price)}</h3>
                            <div className="d-flex py-1 justify-content-between">
                                <ItemCount
                                    stock={stock}
                                    addProductCart={addProductCart}
                                />
                            </div>
                            <p className="">Disponible/s: {stock}</p>
                        </div>
                    </div>

                </div>
            )}
        </>

    )
}

export default ItemDetail
