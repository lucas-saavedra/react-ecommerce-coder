import React from 'react'
import { useState } from 'react'
const ItemCount = ({ initialValue, stock, onAddProd }) => {
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
        onAddProd(cont);
        setCont(initialValue)
    }

    return (
        <>


            {stock === 0 ?
                <button className="btn btn-warning ">
                    ¡Sin stock!
                </button>
                :
                <>

                    <button className="btn mr-1" onClick={addProdAmount} >
                        <i className="fa fa-plus"></i>
                    </button>
                    <h4 className="mx-1">{cont}</h4>
                    <button className="btn mx-1" onClick={substractProdAmount}>
                        <i className="fa fa-minus"></i>
                    </button>
                    <button className="btn btn-success mx-1" onClick={addProductCart}>
                        Agregar
                    </button>
                </>

            }
        </>
    )
}

export default ItemCount
