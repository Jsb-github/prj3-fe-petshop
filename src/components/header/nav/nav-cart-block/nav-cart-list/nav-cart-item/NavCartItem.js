import React from "react";
import { useAppDispatch } from "../../../../../../hooks/redux";
import { deleteFromCart } from "../../../../../../store/cart/cart.slice";
import styles from "./NavCartItem.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

function NavCartItem({ item }) {
  const dispatch = useAppDispatch();

  const deleteProduct = () => {
    dispatch(deleteFromCart(item.no));
  };

  return (
    <div className={styles.nav_cart_item}>
      <Link to={`/product/${item.no}`}>
        {" "}
        <img src={item.url} alt="product card" />
      </Link>

      <div className={styles.nav_cart_description}>
        <h3>{item.category}</h3>
        <h2>{item.title}</h2>
        <span>
          {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} X {item.quantity} = {item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </span>
      </div>

      <button onClick={deleteProduct} className={styles.nav_cart_delete}>
        <AiOutlineDelete />
      </button>
    </div>
  );
}

export default NavCartItem;
