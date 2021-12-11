import React from 'react'
import { NavLink } from 'react-router-dom'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return (
        <>
            {products.length === 0 ?
                (<div className="text-center">
                    <h1 className='display-5 pt-3'>No se encontraron productos <i className="far fa-sad-cry"></i></h1>
                    <NavLink to={'/'}>
                        <button className="btn mx-1">
                            <i className="fas fa-arrow-circle-left pe-3"></i>
                            Seguir comprando
                        </button>
                    </NavLink>
                </div>
                ) :
                (
                    < div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 g-4  mb-5 mt-3">
                        {
                            products.map((prod) =>
                                <Item
                                    key={prod.id}
                                    prod={prod}
                                />)
                        }
                    </div >
                )
            }
        </>
    )
}

export default ItemList
