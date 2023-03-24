import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/itemCount";
import './styles.scss';
import CartContext from '../../CartContext';
import { useContext } from 'react';
import { getSingleItemFromDatabase } from "../../services/firestore";

function ItemDetail(){
    const [product, setProduct] = useState({})
    const {addToCart} = useContext(CartContext)
    
    const itemId = useParams().id


    function handleAddToCart(amount) {
        addToCart(product, amount);
    }

    useEffect(() => {
        getSingleItemFromDatabase(itemId)
          .then((res) => {
            setProduct(res);
          })
          .catch((error) => alert(error));
      }, []);


    return(
        <div className="details-container">
            <div className="details-left">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="details-right">
                <h2>{product.name}</h2>
                <p>{product.description}</p>

                <ItemCount stock={product.stock} price={product.price} handleAddToCart={handleAddToCart}/>

            </div>
        </div>
    )
}

export default ItemDetail;