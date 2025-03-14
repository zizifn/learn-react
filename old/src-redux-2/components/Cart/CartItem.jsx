import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/index";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const disPatch = useDispatch();

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              disPatch(cartActions.decrementQTY(id));
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              disPatch(cartActions.addQTY(id));
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
