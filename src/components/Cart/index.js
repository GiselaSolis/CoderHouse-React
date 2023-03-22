import { AiOutlineShopping } from 'react-icons/ai';
import './styles.scss'
import CartContext from '../../CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Cart(){
    const {cartItems} = useContext(CartContext)
    const totalInCart = cartItems.reduce((total, item) => total + item.amount, 0);

    return (
        <div className='cart-icon-container'>
            <Link to="/cart">
                <AiOutlineShopping/>
            </Link>
            {totalInCart > 0 && <div className='cart-number'> {totalInCart} </div> }
        </div>
    )
}

export default Cart;