import { NavLink } from 'react-router-dom';
import './Item.css'
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';

const Item = ({ prod }) => {
    const { id, title, price, url, category, stock } = prod;

    const { numberWithDots } = useContext(CartContext);

    return (
        <div className="col">
            <div className="card card h-100">
                <img src={url} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className="h3">{title}</h5>
                    </div>
                    <p className="price h5">$ {numberWithDots(price)}</p>
                    <p className="h5"> <span className="category badge bg-primary">{category}</span> </p>
                    <p className="">Disponible/s: {stock}</p>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="h5"> <NavLink className='btn btn-outline-dark ' to={`/product/${id}`}>Ver más <i className='fa fa-eye'></i></NavLink>
                    </p>
                </div>
            </div>
        </div >
    )
}
export default Item
