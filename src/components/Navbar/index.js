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
                <il><Link to="/category/mug">mugs</Link></il>
                <il><Link to="/category/plate">plates</Link></il>
                <il><Link to="/category/planter">planters</Link></il>
            </ul>
            <Cart />
        </div>
    );
}

export default Navbar;