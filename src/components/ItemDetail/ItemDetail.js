import products from "../../products/products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/itemCount";
import './styles.scss';


function ItemDetail(){
    const [product, setProduct] = useState({})
    
    const itemId = useParams().id



    const  getProductById = new Promise((resolve, reject) => {
        setTimeout(() => {
          let itemFinder = products.find((product) => product.id === Number(itemId));
          resolve(itemFinder)
        }, 1000);
    });


    useEffect(()=>{
       getProductById.then((res)=> {setProduct(res)})
    },[])


    return(
        <div className="details-container">
            <div className="details-left">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="details-right">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="price-container">
                    <p>${product.price} usd</p>
                    <ItemCount stock={product.stock} />
                </div>
                
                <button className="button-to-cart">add to cart</button>
            </div>
        </div>
    )
}

export default ItemDetail;