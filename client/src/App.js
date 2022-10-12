//import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Donation from './pages/Donation';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Dashboard from './pages/user/Dashboard';
import DonationForm from './pages/user/DonationForm';

 
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
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
    }
    ,
    {
      path: "/donate",
      element: <DonationForm/>,
    }
  ]);

  return (
    <div>
      
      <RouterProvider router={router}/>



    </div>
  );
}

export default App;