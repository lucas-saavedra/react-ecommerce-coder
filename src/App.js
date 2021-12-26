
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import './App.css';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import PageNotFound from './components/PageNotFound/PageNotFound';
function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:category' element={<ItemListContainer />} />
            <Route exact path='/product/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />
            <Route
              path="*"
              element={
                <PageNotFound msg='No se encuentra la pagina solicitada ' icon='fas fa-unlink' />
              }
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div >
  );
}

export default App;
