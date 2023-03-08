import products from "../../products/products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/itemCount";

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
        <div className="itemCard">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price} usd</p>
            <ItemCount />
            <button>Add to cart</button>
        </div>
    )
}

export default ItemDetail;