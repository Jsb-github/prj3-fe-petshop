import React from "react";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Nav } from "./nav/Nav";
import { FiUser } from "react-icons/fi";

function SearchComponent() {
  return (
    <>
      <input
        style={{ width: "300px", border: "1px solid black" }}
        placeholder="상품검색"
      />
      <button>검색</button>
    </>
  );
}

function Header() {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <div className={styles.header_logo}>
            <Link to={"/"}>
              <h2>Pet Shop</h2>
            </Link>
          </div>
          <Nav />
        </div>
        <div className={styles.header_wrapper}>
          <div className={styles.sub_menu}>
            <ul>
              <li>
                <div className={styles.counter}>
                  <Link to={"/"}>전체 상품</Link>
                </div>
              </li>
              <li>
                <div className={styles.counter}>
                  <Link to={"/event"}>이벤트 행사</Link>
                </div>
              </li>
              <li>
                <div className={styles.counter}>
                  <Link to={"/notice"}>공지 사항</Link>
                </div>
              </li>
              <li>
                <div className={styles.counter}>
                  <Link to={"/review"}>REVIEW</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
