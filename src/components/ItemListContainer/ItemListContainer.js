import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemsByCategoryFromDatabase, getItemsFromDatabase } from "../../services/firestore";

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