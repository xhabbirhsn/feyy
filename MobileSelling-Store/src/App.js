import './App.css';
import Home from './pages/Home';
import Shop from "./pages/Shop"
import Contact from './pages/Contact';
import RegisterHandler from './pages/RegisterHandler';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path: "/shop",
    element: <Shop/>
},
{
  path: "/Contact",
  element: <Contact/>
},

{
  path: "/Register",
  element: <RegisterHandler/>
}
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
