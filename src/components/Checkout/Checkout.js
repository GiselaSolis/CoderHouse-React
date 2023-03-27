import React, { useContext, useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import CartContext from '../../CartContext';
import { createOrder } from '../../services/firestore';
import './styles.scss'; 
import Swal from 'sweetalert2'

export default function Checkout() {

    const {cartItems, calculateCartTotal, clearCart} = useContext(CartContext)
    const [formData, setFormData] = useState({});

    const navigate = useNavigate();


    async function handleCheckout() {
        const orderData = {
                user: formData,
                items: cartItems,
                total: calculateCartTotal(),
                timeStamp: new Date(),
            };
 
        const orderId = await createOrder(orderData);
        Swal.fire({
            title: 'thanks for your purchase!',
            text: `your order ID is: ${orderId} ~ we will contact you soon ♡`,
            icon: 'success',
            iconColor: '#b9e4d8',
            confirmButtonText: '✿yaaay✿',
            confirmButtonColor: '#b9e4d8',
          })

        navigate('/');
        clearCart();
    }
    
   

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // handle form submission here
    };

    return (
        
        <form className='checkout' onSubmit={handleSubmit}>
            <h2>
                help us filling the form bellow ✿
            </h2>
            <label>
                <p>first name:</p>
                <input type="text" name="firstname" onChange={handleInputChange} />
            </label>
            <label>
                <p>last name:</p>
                <input type="text" name="lastname" onChange={handleInputChange} />
            </label>
            <label>
                <p>email:</p>
                <input type="email" name="email" onChange={handleInputChange} />
            </label>
            <label>
                <p>phone:</p>
                <input type="text" name="phone" onChange={handleInputChange} />
            </label>

            <button onClick={handleCheckout} type="submit">end purchase</button>
        </form>

  )
}
