import { NavLink } from 'react-router-dom';
import ItemCount from './ItemCount';
import './Item.css'
import { onAddProd } from '../../helpers/onAddProd';
const Item = ({ prod }) => {
    const { id, title, price, url, category, stock } = prod;

    return (
        <div className="col">
            <div className="card card h-100">
                <img src={url} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className="h3">{title}</h5>
                    </div>
                    <p className="price h5">$ {price}</p>
                    <p className="h5"> <span className="category badge bg-primary">{category}</span> </p>
                    <div
                        className="d-flex py-1 justify-content-between">
                        <ItemCount
                            stock={stock}
                            initialValue={1}
                            onAddProd={onAddProd}
                        />
                    </div>
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
