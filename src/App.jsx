import React from 'react';
import HomePage from "./routes/homePage/HomePage.jsx";
import Layout from "./routes/layout/layout.jsx";
import ListPage from './routes/listPage/listPage.jsx';
import SinglePage from './routes/singlePage/SinglePage.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProfilePage from './routes/profilePage/ProfilePage.jsx';
// import { path } from 'express/lib/application.js';

function App() {
  const router = createBrowserRouter(
    [
    {
      path:"",
      element: <Layout />, 

    children: [
      {
      path: '/',
      element: <HomePage/>,
      },
      {
        path: '/list',
        element: <ListPage/>,
      },
      {
        path: "/:id",
        element: <SinglePage/>,
      },
      {
        path: "/profile",
        element: <ProfilePage/>,
      },

    ],
  },
]);
      // createRoutesFromElements(
      //   <Routes>
      //   <Route element ={<Layout/>}>
      //   <Route path = "/" element ={<HomePage/>}></Route>
      //   <Route path = "list" element = {<ListPage/>}></Route>
      // </Route>
      // </Routes>
      // ));

  return (
      <RouterProvider router={router} />
  );
}

export default App