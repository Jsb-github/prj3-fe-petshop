import React from "react";
import styles from "./CardItem.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { addToCart } from "../../../../store/cart/cart.slice";
function CardItem({ item }) {
  const { products } = useAppSelector((state) => state.cartSlice);
  const productMatching = products.some((product) => product.no === item.no);
  const dispatch = useAppDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.no}`}>
        <img
          src={item.url}
          width={"80%"}
          height={"200px"}
          alt="product card"
        />
      </Link>

      <h5>{item.title.substring(0, 15)}...</h5>
      <div>
        <button
          disabled={productMatching}
          onClick={() => !productMatching && addItemToCart()}
        >
          {productMatching ? "장바구니에 담긴 제품 " : " 장바구니에 담기"}
        </button>
        <p>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
      </div>
    </li>
  );
}

export default CardItem;
