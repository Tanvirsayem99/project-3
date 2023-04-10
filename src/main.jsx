import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './components/Statistics/Statistics';
import Home from './components/Home/Home';
import AppJobs from './components/AppJobs/AppJobs';
import Blogs from './components/Blogs/Blogs';
import ItemDetails from './components/ItemDetails/ItemDetails';

const router = createBrowserRouter([
  {path: "/", element: <App></App>, 
children: [
  {path: "/", element: <Home></Home>, loader: () => fetch('/public/featured.json'),},
  {path: "/statistics", element: <Statistics></Statistics>,},
  {path: "details/:id", element: <ItemDetails></ItemDetails>, loader: () => fetch('/public/featured.json'),},
  {path: "/jobs", element: <AppJobs></AppJobs>, loader: () => fetch('/public/featured.json'),},
  {path: "/blog", element: <Blogs></Blogs>,}
]}
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
