import { Link } from 'react-router-dom';
import './styles.scss';

function Item({product}){

    return (
        <div className="itemCard">
            <Link to={`/item/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <div className='itemCardInfo'>
                    <h4>{product.name}</h4>
                    <p>${product.price} usd</p>
                </div>
                
            </Link>
        </div>
    )
}

export default Item;