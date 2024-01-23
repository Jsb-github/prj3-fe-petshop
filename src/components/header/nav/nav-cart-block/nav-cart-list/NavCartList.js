import React from "react";

import styles from "./NavCartList.module.scss";
import { useAppSelector } from "../../../../../hooks/redux";
import NavCartItem from "./nav-cart-item/NavCartItem";

function NavCartList(props) {
  const { products } = useAppSelector((state) => state.cartSlice);
  return (
    <div className={styles.nav_cart_list}>
      {products.map((item) => (
        <NavCartItem key={item.no} item={item} />
      ))}
    </div>
  );
}

export default NavCartList;
