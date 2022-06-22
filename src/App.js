import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ContenedorCarrito from './contenedor/ContenedorCarrito/ContenedorCarrito';
import ContenedorProductos from './contenedor/ContenedorProductos/ContenedorProductos';
import ContenedorDetalles from './contenedor/ContenedorDetalles/ContenedorDetalles';
import ProveedorContexto from './contexto/Contexto';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <ProveedorContexto >
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ContenedorProductos />} />

            <Route path="/categoria/:categoria" element={<ContenedorProductos />} />

            <Route path="/detalle/:id" element={<ContenedorDetalles />} />

            <Route path="/carrito" element={<ContenedorCarrito />} />

            <Route path="/*" element={ <Navigate to="/" />} />
          </Routes>
        </div>
      </ProveedorContexto>
    </BrowserRouter>
  );
}

export default App;
