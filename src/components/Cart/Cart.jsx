import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const removeItem = itemId => {
        let tempCart = cart;
        let item = Object.values(tempCart).find((e) => e.id === itemId);
        delete tempCart[item.id];
        setCart(tempCart)
    }
    const addItem = (item) => {
        let temp = {};
        temp = cart;
        if (cart.hasOwnProperty(item.id)) {
            item.amount = temp[item.id].amount + 1;
        } else {
            item.amount = 1;
        }
        temp[item.id] = {
            ...item
        };
        setCart(temp)
    }
    const subsItem = (itemId) => {
        let tempCart = cart;
        let item = Object.values(tempCart).find((e) => e.id === itemId);
        tempCart[item.id].amount--;
        if (tempCart[item.id].amount === 0) {
            delete tempCart[item.id];
        }
        setCart(tempCart)
    }
    const clear = () => {
        setCart({})
    }

    return (
        <>
            <p>Carrito</p>
            {/* <div>
            <div className='d-flex justiy-content-center'>
                <button className="btn mx-1" onClick={() => clear()}>
                    Todos
                    <i className="fa fa-trash"></i>
                </button>
            </div>
            {Object.values(cart).map(item =>
                <div key={item.id}>
                    <p> {item.title}</p>
                    <div className='d-flex justiy-content-center'>
                        <button className="btn mr-1" onClick={() => addItem(item)} >
                            <i className="fa fa-plus" ></i>
                        </button>
                        <h4 className="mx-1">{item.amount}</h4>
                        <button className="btn mx-1" onClick={() => subsItem(item.id)}>
                            <i className="fa fa-minus" ></i>
                        </button>
                        <button className="btn mx-1" onClick={() => removeItem(item.id)} >
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>)}
        </div> */}
        </>

    )
}
export default Cart
