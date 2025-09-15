import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router/router'



const rootElement = document.getElementById('root')
if (!rootElement) throw new Error(`L'élément racine n'est pas rencontré.`)

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
