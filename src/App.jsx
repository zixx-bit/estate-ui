import React from 'react';
import HomePage from "./routes/homePage/HomePage.jsx";
import Layout from "./routes/layout/layout.jsx";
import ListPage from './routes/listPage/listPage.jsx';
 import {createBrowserRouter,RouterProvider} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout />,  
      children: [
      {
      path: '/',
      element: <HomePage/>,
     },
      {
        path: 'list',
        element: <ListPage/>,
      },
    ],
  },
]);

  return (
      <RouterProvider router={router} />
  );
}

export default App