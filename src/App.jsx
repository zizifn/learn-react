import React, { lazy } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const CartLazy = lazy(() => import("./components/Cart/Cart"));

  return (
    <Layout>
      <React.Suspense fallback={<div>Loading cart...</div>}>
        <CartLazy />
      </React.Suspense>
      <Products />
    </Layout>
  );
}

export default App;
