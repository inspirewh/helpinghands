//import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Donation from './pages/Donation';

 
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
    }
  ]);

  return (
    <div>
      
      <RouterProvider router={router}/>



    </div>
  );
}

export default App;