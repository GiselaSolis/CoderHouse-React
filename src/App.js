
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/itemCount';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Holi'} />
      <ItemCount />
    </div>
  );
}

export default App;
