import React from 'react'
import { createOrder } from '../../services/firestore';
import { Link } from 'react-router-dom';
import './styles.scss'; 

export default function Checkout({cart, total}) {


    async function handleCheckout() {
        const orderData = {
                buyer: {firstName: "Ya", lastName: "Ye", email: "yi", phone: "123"},
                items: cart,
                total: total,
                timeStamp: new Date(),
            };
        
        const orderId = await createOrder(orderData);
        console.log('your order ID is ', orderId)
    }
    

    return (
        <div className='checkout'>
            <button onClick={handleCheckout}>
                end purchase
            </button>
        </div>
  )
}
