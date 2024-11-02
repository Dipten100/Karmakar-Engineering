import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// fonts css
import "../src/assets/style/fonts/Fonts.css";

// style css
import "./assets/style/Export.min.scss";
import Home from "./Home/Home.jsx";
import Order from "./Order/Order.jsx";
import Certificates from "./Certificates/Certificates.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import ContextProvider from "./Context/ContextProvider.jsx";
import SinglePageProduct from "./Order/SinglePageProduct.jsx";
import CartPage from "./Components/CartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <App />
      </ContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order/:id",
        element: <SinglePageProduct />,
      },
      {
        path: "/cartpage",
        element: <CartPage />,
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
