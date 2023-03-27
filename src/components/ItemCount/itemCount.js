import { useState } from 'react';
import './styles.scss';

function ItemCount ({stock, price,  handleAddToCart }) {
    const [maxStock, setMaxStock] = useState(false)
    const [amount, setAmount] = useState(1);

    function addItems() {
        if (amount < stock) {
            setAmount(amount + 1);
        } else {
            setMaxStock(true);
            console.log('max stock reached');
        }
    }    

    function deleteItems(){
        if (amount > 1) {
            setAmount(amount - 1);
          }
    }

    return (
        <div>
            <div className='price-container'>
                <p>${price} usd</p>
                <div className='item-counter'>
                    <button onClick={deleteItems}>-</button>
                    <p>{amount}</p>
                    <button className={!maxStock === true ? "" : "disabled"} onClick={addItems}>+</button>
                </div>
            </div>
            
        
            <button className="button-to-cart" onClick={() => handleAddToCart(amount)}> add to cart </button>
            
        </div>

    )
}

export default ItemCount