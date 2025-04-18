import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import Login from "./Login";

const Body = () => {

    const routes = createBrowserRouter([
        {
            path: "/",
            element:<Browse />
        },
        {
            path: "/login",
            element:<Login />
        }
    ])
  return (
    <RouterProvider router={routes} />
  )
}

export default Body