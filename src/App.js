
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { CartProvider } from './CartContext';
import CartContainer from './components/CartContainer/CartContainer';



function App() {

  return (
    <div className="container">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/item/:id' element={<ItemDetail />}/>
            <Route path='/category/:category' element={<ItemListContainer />}/>
            <Route path='*' element='404 jelp'/>
            <Route path='/cart' element={<CartContainer />}/> 
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
