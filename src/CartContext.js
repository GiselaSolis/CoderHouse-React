import { createContext, useState } from "react";

const CartContext = createContext()


export function CartProvider({children}){
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product, amount) => {
        const newCart = JSON.parse(JSON.stringify(cartItems));

        if (isInCart(product.id)) {
            let index = cartItems.findIndex((itemInCart) => itemInCart.id === product.id);
            newCart[index].amount = newCart[index].amount + amount;
          } else {
            newCart.push({ ...product, amount });
          }
          setCartItems(newCart);
        }

    const deleteFromCart = (id) => {
        setCartItems(prevState => prevState.filter(item => item.id !== id));
    }

    function isInCart(id) {
        return cartItems.some((item) => item.id === id);
      }

    function calculateCartTotal() {
      const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.amount), 0);
      return cartTotal
    }

    function clearCart(){
      setCartItems([])
    }

    return(
        <CartContext.Provider value= {{cartItems, addToCart, deleteFromCart, calculateCartTotal, clearCart}}>{children}</CartContext.Provider>
    )
}

export default CartContext;