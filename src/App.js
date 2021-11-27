
import NavBar from './components/NavBar/NavBar';
//import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';
function App() {

  return (
    <div className="App">
      <CartContext.Provider value={{}}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:category' element={<ItemListContainer />} />
            <Route exact path='/product/:id' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>

    </div >
  );
}

export default App;
