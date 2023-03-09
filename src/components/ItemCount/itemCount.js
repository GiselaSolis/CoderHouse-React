import { useState } from 'react';
import './styles.scss';

function ItemCount ({stock}) {
    const [amount, setAmount] = useState(1);

    console.log(stock)

    function addItems() {
        if (amount < stock ) {
            setAmount(amount + 1)      
        } 
    }    

    function deleteItems(){
        if (amount > 1){
            setAmount (amount -1 )
        }
    }

    return (
        <div className='item-counter'>
            <button onClick={deleteItems}>-</button>
            <p>{amount}</p>
            <button id='id1' onClick={addItems}>+</button>
        </div>
    )
}

export default ItemCount