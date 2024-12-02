import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import OrderPage from './components/pages/order/OrderPage.jsx'
import ErrorPage from './components/pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/order",
    element: <OrderPage />
  }
])

const rootElement = document.getElementById('root')

rootElement ? (
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
) : (
  console.error('Root element is not found.')
)