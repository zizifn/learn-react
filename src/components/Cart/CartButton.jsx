import React from "react";
import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/index";

const CartButton = (props) => {
  const carts = useSelector((state) => state.carts.carts);
  console.log("---CartButton--------", carts, carts.length);
  const dispatch = useDispatch();

  function toggleCart() {
    dispatch(cartActions.showCart());
  }
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{carts.length}</span>
    </button>
  );
};

export default CartButton;
