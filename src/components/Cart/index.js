import { AiOutlineShopping } from 'react-icons/ai';
import './styles.scss'

function Cart(){
    return (
        <div>
            <a href="/">
                <AiOutlineShopping/>
            </a>
            <div class='cart-number'>2</div>
        </div>
    )
}

export default Cart;