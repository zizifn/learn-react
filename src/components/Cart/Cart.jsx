import React, { useEffect, useRef } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartActions, uiActions } from "../store/index";

const Cart = (props) => {
  const isInitial = useRef(false);
  const carts = useSelector((store) => store.carts.carts);
  const dispatch = useDispatch();
  console.log("----", carts);
  const showCart = useSelector((store) => store.carts.showCart);
  console.log("showCart", showCart);

  useEffect(() => {
    console.log("Cart---useEffect1----", isInitial.current);
    isInitial.current = true;
  }, []);

  useEffect(() => {
    console.log("Cart---useEffect2----", isInitial.current);
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    async function updateData() {
      const resp = await fetch(
        "https://zizifn-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(carts),
        },
      );
      if (!resp.ok) {
        console.log("not ok");
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: "sending cart data faild",
          }),
        );
      }
      dispatch(
        uiActions.showNotification({
          status: "sucess",
          title: "sucess",
          message: " sending cart data success",
        }),
      );
      const json = await resp.json();
    }
    updateData();

    return () => {
      console.log("cleanup");
    };
  }, [carts, dispatch]);

  if (!showCart) {
    return <></>;
  }
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {carts.map((item) => {
          const total = Number(item.qty) * Number(item.price);
          console.log("--total--", total);
          return (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.qty,
                total: total,
                price: item.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
