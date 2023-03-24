import React from 'react'
import CartContext from '../../CartContext';
import { useContext } from 'react';
import './styles.scss'; 
import { AiOutlineDelete } from 'react-icons/ai';
import Checkout from '../Checkout/Checkout';

export default function CartContainer() {
    const {cartItems, deleteFromCart} = useContext(CartContext)
    function calculateCartTotal() {
        return cartItems.reduce((total, item) => total + (item.price * item.amount), 0);
    }

    return (
        <div className='cart-container'>
            {cartItems.length === 0
                ? <div className='cart-empty'>You have no items yet, go find some!</div>
                : <div className='cart-table'>
                    <div className='cart-row head'>
                        <div className='cart-table-amount title'>product</div>
                        <div className='cart-table-amount title'>amount</div>
                        <div className='cart-table-price title'>subtotal</div>
                    </div>

                    {cartItems.map((item) => (
                        <div className='cart-row body'>
                            <div>
                                <img src={item.image} alt={item.name} />
                                <div className='cart-table-details'>
                                    <p>{item.name}</p>
                                    <p>${item.price}usd</p>
                                </div>
                            </div>
                            <div className='cart-table-amount'>{item.amount}</div>
                            <div className='cart-table-price'>${item.price * item.amount}usd</div>
                            <span onClick={()=> deleteFromCart(item.id)} className='item-delete'><AiOutlineDelete/></span>
                        </div>
                    ))}

                    <div className='cart-row final'>
                        <div className='cart-table-amount'></div>
                        <div className='cart-table-amount'>Total</div>
                        <div className='cart-table-price'>${calculateCartTotal()}usd</div>
                    </div>
        
                    <Checkout cart={cartItems} total={calculateCartTotal()} />

                </div>
            }
            
        </div>


        
  )
}
