import React from 'react'
import Item from '../Item/Item'
const onAddProd = (title, amount, id) => {
    console.log(`ID: ${id} Nombre: ${title} Cantidad: ${amount}`)
}
const ItemList = ({ products }) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4  mb-5 mt-3"> {products.map((prod) =>
            <Item
                key={prod.id}
                prod={prod}
                initialValue={1}
                onAddProd={onAddProd} />)
        }
        </div>
    )
}

export default ItemList
