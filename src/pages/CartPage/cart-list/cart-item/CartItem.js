import React from "react";

import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppDispatch } from "../../../../hooks/redux";

import styles from "./CartItem.module.scss";
import {
  decrementProduct,
  deleteFromCart,
  incrementProduct,
} from "../../../../store/cart/cart.slice";
function CartItem({ item }) {
  const dispatch = useAppDispatch();

  const deleteProduct = () => {
    dispatch(deleteFromCart(item.no));
  };

  const incrementCount = () => {
    dispatch(incrementProduct(item.no));
  };

  const decrmentCount = () => {
    dispatch(decrementProduct(item.no));
  };

  return (
    <div className={styles.cart_item}>
      <Link to={`/product/${item.no}`}>
        <img src={item.url} alt="product card" />
      </Link>
      <div className={styles.cart_description}>
        <h3>{item.category}</h3>
        <h2>{item.title}</h2>
        <span>
          {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} X {item.quantity} = {item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </span>
      </div>
      <div className={styles.cart_count}>
        <div>
          <button disabled={item.quantity === 1} onClick={decrmentCount}>
            -
          </button>
          <span>{item.quantity}</span>
          <button disabled={item.quantity === 10} onClick={incrementCount}>
            +
          </button>
        </div>
      </div>

      <button onClick={deleteProduct} className={styles.cart_delete}>
        <AiOutlineDelete />
      </button>
    </div>
  );
}

export default CartItem;
