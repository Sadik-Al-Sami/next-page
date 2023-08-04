import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './components/Home/Home'
import About from './components/About/About'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Books from './components/Books/Books'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "books",
                element: <Books />
            },
            {
                path: "about",
                element: <About />
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
