import React from "react";
import styles from "./OrderItem.module.scss";
import { Link } from "react-router-dom";
function OrderItem({ order }) {
  return (
    <li className={styles.order_item}>
      <Link to={`/product/${order.no}`}>
        <img src={order.url} alt="product card" />
      </Link>

      <div className={styles.order_description}>
        <h4>{order.category}</h4>
        <h3>{order.title}</h3>
      </div>

      <div className={styles.order_price}>
        <h4>가격 : </h4>
        <span>
         {order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 X {order.quantity}{" "}
        </span>
      </div>

      <div className={styles.order_total}>
        <h4>합계 : </h4>
        <span> {order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</span>
      </div>
      <dv>
        <button>리뷰작성</button>
      </dv>
    </li>
  );
}

export default OrderItem;
