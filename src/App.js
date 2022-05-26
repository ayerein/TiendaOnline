import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './contenedor/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './contenedor/ItemDetailContainer/ItemDetailContainer';
import ContenedorCarrito from './contenedor/ContenedorCarrito/ContenedorCarrito';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
  
 

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />

            <Route path="/detalle/:id" element={<ItemDetailContainer />} />

            <Route path="/carrito" element={<ContenedorCarrito />} />


            <Route path="/*" element={ <Navigate to="/" />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>


  );
}

export default App;
