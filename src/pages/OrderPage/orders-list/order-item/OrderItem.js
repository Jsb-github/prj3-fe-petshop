import React from "react";
import styles from "./OrderItem.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@chakra-ui/react";
function OrderItem({ order }) {
  const navigate = useNavigate();
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
      <div>
        <Button
          isDisabled={order.reviewStatus !=0}

          onClick={() => navigate(`/review/write/${order.orderNo}`)}
        >
          {order.reviewStatus == 0 ? "리뷰 작성" : "작성완료"}
        </Button>
      </div>
    </li>
  );
}

export default OrderItem;
