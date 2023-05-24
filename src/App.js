import './App.css';
import ResponsiveDrawer from './components/Drawer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Eventos from './pages/Eventos';
import Salas from './pages/Salas';
import Usuarios from './pages/Usuarios';

function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveDrawer/>
        <Routes>
          <Route path='/eventos' element={<Eventos/>} />
          <Route path="/salas" element={<Salas/>}/>
          <Route path="/usuarios" element={<Usuarios/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
