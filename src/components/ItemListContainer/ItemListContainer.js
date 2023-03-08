import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import products from "../../products/products"
import { useParams } from "react-router-dom";

function getProductsFromFile(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 1000);
  });
}

function getProductsByCategory(categoryURL){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let filteredProducts = products.filter(item => item.category === categoryURL)
      resolve(filteredProducts)
    }, 1000);
  });
}

function ItemListContainer() {

    const [products, setProducts] = useState([]);

    const params = useParams()
    const itemCategory = params.category;

    useEffect( () => {
      if ( itemCategory === undefined ){
        getProductsFromFile().then((res) => {
        setProducts(res)
        })
      } else {
        getProductsByCategory(itemCategory).then((res) => {
          setProducts(res)
        });
      }
      
    }, [itemCategory]);

    return (
      <div className="item-list-container">
        <ItemList products={products}/>
      </div>
    );
};
  
export default ItemListContainer;