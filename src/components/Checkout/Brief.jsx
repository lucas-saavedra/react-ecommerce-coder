import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Brief = () => {
    const { cart, cartTotal, numberWithDots } = useContext(CartContext);
    return (
        <>
        
            <div className='row pt-3'>
                <div className="card text-dark bg-light col-md-5 mx-auto">
                    <div className="card-body">
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th >Resumen</th>
                                    <th className='text-end'>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(({ item, quantity }) =>
                                    <tr key={item.id}>
                                        <td>{item.title} (${item.price}) x {quantity} unidad/es</td>
                                        <td className='text-end'>${numberWithDots(item.price * quantity)}</td>
                                    </tr>
                                )
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td className='text-start'> <h4>Total</h4></td>
                                    <td className='text-end'> <h4>${numberWithDots(cartTotal())}</h4></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Brief
