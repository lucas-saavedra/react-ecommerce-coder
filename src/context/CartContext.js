import { createContext, useState } from "react";
export const CartContext = createContext()
export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item, quantity) => {
        let temp = cart;
        const isInCartIndex = itemId => {
            return cart.indexOf(cart.find(({ item: itemCart }) => itemCart.id === itemId))
        };

        if (isInCartIndex(item.id) !== -1) {
            temp[isInCartIndex(item.id)].quantity += quantity;
        }
        else {
            temp.push({ item, quantity });
        }
        setCart([...temp])
    }
    const removeItem = itemId => {
        let tempCart = cart.filter(({ item: itemCart }) => itemCart.id !== itemId);
        setCart(tempCart);
    }

    const clearCart = () => {
        setCart([])
    }
    const cartTotal = () => (cart.map(({ item, quantity }) => item.price * quantity)).reduce(((acc, value) => { return acc + value }), 0)
    const cartAmount = () => (cart.map(({ quantity }) => quantity)).reduce(((acc, value) => { return acc + value }), 0)
    const numberWithDots = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (
        <CartContext.Provider value={{ cart, cartAmount, addToCart, cartTotal, removeItem, clearCart, numberWithDots }} >
            {props.children}
        </CartContext.Provider >
    )
}



