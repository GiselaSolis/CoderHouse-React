import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/itemCount";
import './styles.scss';
import CartContext from '../../CartContext';
import { useContext } from 'react';


import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCFGzBlIuEYGA1nrVzL3nudiUGqYLCazYY",

  authDomain: "ch-react-solis.firebaseapp.com",

  projectId: "ch-react-solis",

  storageBucket: "ch-react-solis.appspot.com",

  messagingSenderId: "834063658531",

  appId: "1:834063658531:web:7bc32df24ff2e406e6cb96"

};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getSingleItemFromDatabase(idItem) {
    // referencia de la colección y del documento
    const productsColectionRef = collection(db, "products");
    const docRef = doc(productsColectionRef, idItem);
  
    // getDoc -> datos
    const docSnapshot = await getDoc(docRef);
  
    // extra
    if (docSnapshot.exists() === false) throw new Error("No existe el documento");
  
    return { ...docSnapshot.data(), id: docSnapshot.id };
  }
  


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