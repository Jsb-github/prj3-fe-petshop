import React, {useContext, useEffect} from "react";
import styles from "./Checkout.module.scss";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../hooks/redux";
import { getTotalPrice, postOrder } from "../../../store/cart/cart.slice";
import { Link } from "react-router-dom";
import {LoginContext} from "../../../hooks/useAuth";

function Checkout() {
  const cart = useSelector((state) => state.cartSlice);
  const {isAuthenticated} =
    useContext(LoginContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cart]);

  const sendOrder = () => {
    dispatch(postOrder(cart));
  };

  return (
    <div className={styles.checkout}>
      <div>
        <p>
          {" "}
          <span>합계 : </span> {cart.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </p>

        {isAuthenticated() && (
        <button className={styles.checkout_button} onClick={() => sendOrder()}>
          계산하기
        </button>
          )}

        {isAuthenticated() || (
        <Link to={"/login"} className={styles.checkout_button}>
          로그인
        </Link>
      )}
      </div>
    </div>
  );
}

export default Checkout;
