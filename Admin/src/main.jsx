import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// fonts css
import "../src/assets/style/fonts/Fonts.css";

// style import
import "./assets/style/Export.min.scss";
import Dashboard from "./Dashboard/Dashboard.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Certificates from "./Certificates/Certificates.jsx";
import ShowProduct from "./ShowProduct/ShowProduct.jsx";
import Order from "./Orders/Order.jsx"
import AddNewProduct from "./ShowProduct/AddNewProduct.jsx";
import EditProducts from "./ShowProduct/EditProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },
      {
        path: "/showproduct",
        element: <ShowProduct />,
      },
      {
        path: "/addnewproduct",
        element: <AddNewProduct />,
      },
      {
        path: "/editproduct/:id",
        element: <EditProducts />,
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
