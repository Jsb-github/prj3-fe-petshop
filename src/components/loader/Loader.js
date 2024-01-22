import React from "react";
import styles from "./Loader.module.scss";
function Loader(props) {
  return (
    <div className={styles.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
