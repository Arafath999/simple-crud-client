import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostUser from './Components/PostUser.jsx';
import DisplayUser from './Components/DisplayUser.jsx';
import UpdateUser from './Components/UpdateUser';
const router = createBrowserRouter([
  {
    path: "/",
    element: <PostUser></PostUser>,
  },
  {
    path: "/users",
    element: <DisplayUser></DisplayUser>,
    loader: () => fetch('http://localhost:5001/users')
  },
  {
    path: "/users/:id",
    element: <UpdateUser/>,
    loader: ({params}) => {
      return  fetch (`http://localhost:5001/users/${params.id}`)
    }
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
