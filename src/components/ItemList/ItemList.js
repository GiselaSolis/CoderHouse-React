import Item from "../Item/Item";
import './styles.scss';


function ItemList({products}) {

    return(
        <div className="itemList">
            {products.map((product) => (
                <Item key={product.id} product={product} />
             ))}
        </div>
    )
}

export default ItemList;