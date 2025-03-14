import React, { lazy, Suspense } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector } from "react-redux";
const CartLazy = lazy(() => import("./components/Cart/Cart"));

function App() {
  const notification = useSelector((store) => store.ui.notification);
  console.log("notification", notification);
  return (
    <>
      {notification && <Notification {...notification}></Notification>}
      <Layout>
        <Suspense fallback="loading.........">
          <CartLazy></CartLazy>
        </Suspense>
        <Products />
      </Layout>
    </>
  );
}

export default App;
