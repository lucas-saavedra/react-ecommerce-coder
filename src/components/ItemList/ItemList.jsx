import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 g-4  mb-5 mt-3">
            {products.map((prod) =>
                <Item
                    key={prod.id}
                    prod={prod}
                />)
            }
        </div>
    )
}

export default ItemList
