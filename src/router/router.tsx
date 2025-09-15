import App from "@/App";
import ErrorPage from "@/components/pages/error/ErrorPage";
import OrderPage from "@/components/pages/order/OrderPage";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
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