import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { getTotalPrice } from "../../../../store/cart/cart.slice";

import { Link } from "react-router-dom";
import NavCartList from "./nav-cart-list/NavCartList";
import styles from "./NavCartBlock.module.scss";
function NavCartBlock(props) {
  const { totalPrice, products } = useAppSelector((state) => state.cartSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [products]);

  return (
    <div className={styles.nav_cart_block}>
      <NavCartList />
      <div className={styles.nav_cart_price}>
        <p>합계 :  {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</p>
      </div>

      <div className={styles.nav_cart_link}>
        <Link to={"cart"}>장바구니로 이동</Link>
      </div>
    </div>
  );
}

export default NavCartBlock;
