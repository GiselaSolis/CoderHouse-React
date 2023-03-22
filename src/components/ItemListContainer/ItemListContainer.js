import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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


async function getItemsFromDatabase() {
  const productsColectionRef = collection(db, "products");
  let snapshotProducts = await getDocs(productsColectionRef);
  const documents = snapshotProducts.docs;

  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

async function getItemsByCategoryFromDatabase(categoryURL) {
  const productsColectionRef = collection(db, "products");

  const q = query(productsColectionRef, where("category", "==", categoryURL));

  let snapshotProducts = await getDocs(q);
  const documents = snapshotProducts.docs;
  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}


function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams()
    const itemCategory = params.category;


    async function getData() {
      if (itemCategory === undefined) {
        let respuesta = await getItemsFromDatabase();
        setProducts(respuesta);
        setIsLoading(false);
      } else {
        let respuesta = await getItemsByCategoryFromDatabase(itemCategory);
        setProducts(respuesta);
        setIsLoading(false);
      }
    }
  

    useEffect( () => {
      getData();
    }, [itemCategory]);

    return (
      <div className="item-list-container">
        {isLoading ? <p>loading</p> : <ItemList products={products}/>}
       
      </div>
    );
};
  
export default ItemListContainer;