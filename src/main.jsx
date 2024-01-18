import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Projects } from './pages/index.jsx';
// import { HashRouter as Router } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/Portfolio/",
    element: <App/>,
    children: [
      {
        path: "/Portfolio/",
        element: <Projects/>
      },
      {
        path: "/Portfolio/",
        element: <Projects/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
