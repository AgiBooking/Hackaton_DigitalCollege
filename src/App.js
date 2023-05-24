import './App.css';
import ResponsiveDrawer from './components/Drawer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Eventos from './pages/Eventos';
import Salas from './pages/Salas';
import Usuarios from './pages/Usuarios';
import Login from './pages/Login';

const authRoutes = [
  {
    path: '/eventos',
    element: <Eventos />
  },
  {
    path: '/salas',
    element: <Salas />
  },
  {
    path: '/usuarios',
    element: <Usuarios />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }

]

const ResponsivePage = ({element}) => (
  <>
    <ResponsiveDrawer />
    {element}
  </>
)


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          {
            authRoutes.map((route, index) =>
              <Route key={index} path={route.path} element={<ResponsivePage element={route.element}/>} />
            )
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
