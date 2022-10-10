//import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

 
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    }
  ]);

  return (
    <div>
      
      <RouterProvider router={router}/>



    </div>
  );
}

export default App;