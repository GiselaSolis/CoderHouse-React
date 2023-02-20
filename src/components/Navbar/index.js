import Cart from '../Cart';
import './styles.scss';
  
function Navbar() {
    return (
        <div class='navbar'>
            <a href="/">
                <img src="./../../img/logo.png" alt='logo'/>
            </a>
            <ul>
                <il><a href="/">Tazas</a></il>
                <il><a href="/">Platos</a></il>
                <il><a href="/">Macetas</a></il>
            </ul>
            <Cart />
        </div>
    );
}

export default Navbar;