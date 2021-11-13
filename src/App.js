import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='¡Bienvenido a mi tienda!' />
      <Footer />
    </div >
  );
}

export default App;
