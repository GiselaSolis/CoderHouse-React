import { Link } from 'react-router-dom';
import Cart from '../Cart';
import './styles.scss';

function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/">
                <img src="/img/logo.png" alt='logo'/>
            </Link>
            <ul>
                <li><Link to="/category/mug">mugs</Link></li>
                <li><Link to="/category/plate">plates</Link></li>
                <li><Link to="/category/planter">planters</Link></li>
            </ul>
            <Cart />
        </div>
    );
}

export default Navbar;