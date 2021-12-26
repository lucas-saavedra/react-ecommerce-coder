import React from 'react'
import Item from '../Item/Item'
import PageNotFound from '../PageNotFound/PageNotFound'

const ItemList = ({ products }) => {
    return (
        <>
            {products.length === 0 ?
                (<PageNotFound />) :
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
