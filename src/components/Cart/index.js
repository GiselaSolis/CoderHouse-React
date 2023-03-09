import { AiOutlineShopping } from 'react-icons/ai';
import './styles.scss'

function Cart(){
    return (
        <div className='cart-container'>
            <a href="/">
                <AiOutlineShopping/>
            </a>
            <div className='cart-number'>2</div>
        </div>
    )
}

export default Cart;