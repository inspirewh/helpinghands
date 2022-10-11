//import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Donation from './pages/Donation';
import Signup from './pages/Signup';
import Login from './pages/Login';

 
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/donation-feed",
      element: <Donation/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/login",
      element: <Login/>,
    }
  ]);

  return (
    <div>
      
      <RouterProvider router={router}/>



    </div>
  );
}

export default App;