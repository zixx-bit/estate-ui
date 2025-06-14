import React from 'react';
import HomePage from "./routes/homePage/HomePage.jsx";
import {Layout, RequireAuth } from "./routes/layout/layout.jsx";
import ListPage from './routes/listPage/listPage.jsx';
import SinglePage from './routes/singlePage/SinglePage.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProfilePage from './routes/profilePage/ProfilePage.jsx';
import Login from './routes/login/login.jsx';
import Register from './routes/register/register.jsx';
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage.jsx';
import NewPostPage from './routes/newPostPage/newPostPage.jsx';
import { listPageLoader, singlePageLoader, profilePageLoader} from './lib/loaders.js';


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
        loader: listPageLoader,
      },
      {
        path:'/login',
        element: <Login/>,
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: "/:id",
        element: <SinglePage/>,
        loader: singlePageLoader,
      },
      
    ],
  },
//  routes and paths that require authentication 
  {
    path:"/",
    element:<RequireAuth/>,
    children:[
      {
        path: "/profile",
        element: <ProfilePage/>,
        loader: profilePageLoader
      },
      {
        path: "/profile/update",
        element: <ProfileUpdatePage/>
      },
      {
        path: "/add",
        element: <NewPostPage/>
      }
    ],
  }
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