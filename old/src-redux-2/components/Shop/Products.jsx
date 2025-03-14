import React from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="item1"
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
        <ProductItem
          id="item2"
          title="Test2"
          price={4}
          description="This is a second product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
