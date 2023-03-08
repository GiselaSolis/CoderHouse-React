import Item from "../Item/Item";
import './styles.scss';


function ItemList({products}) {

    return(
        <div className="itemList">
            {products.map((product) => (
                <Item product={product} />
             ))}
        </div>
    )
}

export default ItemList;