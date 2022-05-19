import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './contenedor/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './contenedor/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ContenedorCarrito from './contenedor/ContenedorCarrito/ContenedorCarrito';

 

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>


  );
}

export default App;
