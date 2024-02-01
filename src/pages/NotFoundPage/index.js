import React from "react";
import styles from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";
import {Center} from "@chakra-ui/react";
function NotFoundPage() {
  return (
    <div className="page">
      <div className="container">
        <Center>
          <div className={styles.not_found}>
            <img src="/img/not-found.png" alt="페이지를 찾을 수 없음" />
            <p>
              <Link to={"/"}>홈페이지로 이동</Link>
            </p>
          </div>
        </Center>

      </div>
    </div>
  );
}

export default NotFoundPage;
