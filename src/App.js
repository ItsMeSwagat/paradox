import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home'
import Navbar from './pages/navbar/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element: <Home />
      },
    ]
  },
  
]);


function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>    
  );
}

export default App;
