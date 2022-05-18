import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />

          <Route path="/detalle/:id" element={<ItemDetailContainer />} />


          <Route path="/*" element={ <Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
