import React, { useContext, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchOrder } from "../../../store/order/order.slice";
import CartEmpty from "../../../components/cart-empty/CartEmpty";
import styles from "./OrdersList.module.scss";
import OrderItem from "./order-item/OrderItem";
import { LoginContext } from "../../../hooks/useAuth";
function OrdersList(props) {
  const { order } = useAppSelector((state) => state.orderSlice);
  const dispatch = useAppDispatch();

  const {login } =
    useContext(LoginContext);

  useEffect(() => {
    dispatch(fetchOrder(login.email))
  }, [login.email]);

  if (!order.length) return <CartEmpty title={"주문내역"} />;
  return (
    <div className={styles.orders}>
      {order.map((item) => (
        <div key={item.no}>
          <div className={styles.order_header}>
            <p>합계 :  {item.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</p>
          </div>

          <ul className={styles.orders_list}>
            {item.products.map((order) => (
              <OrderItem key={order.no} order={order} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default OrdersList;
