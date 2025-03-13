import React from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const carts = useSelector((store) => store.carts.carts);
  console.log("----", carts);
  const showCart = useSelector((store) => store.carts.showCart);
  console.log("showCart", showCart);
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
