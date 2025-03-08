import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import {
  ShoppingCartState,
  useShoppingCart,
  ShoppingCartContext,
} from "./store/ShoppingCart.jsx";
import React from "react";

function App() {
  const ctxValue = useShoppingCart();
  return (
    <>
      <ShoppingCartState value={ctxValue}>
        <Header />
        <Shop />
      </ShoppingCartState>
      {/* <ShoppingCartContext>
        <Header />
        <Shop />
      </ShoppingCartContext> */}
    </>
  );
}

export default App;
