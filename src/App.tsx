import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import ProductPage from "./pages/ProductPage";
import ProductListPage from "./pages/Products";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ProductListPage /> },
      { path: "/products/:id", element: <ProductPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
