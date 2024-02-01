import React from 'react';
import {Link} from "react-router-dom";
import styles from "./EventItem.module.scss";
function EventItem({item}) {
  return (
    <li className={styles.event_item}>
      <Link to={`/event/${item.no}`}>
        <img
          src={item.url}
          width={"100%"}
          height={"200px"}
          alt="event"
        />
      </Link>
          <h5>{item.title}</h5>
        <div>
          <p>{item.writer}</p>
        </div>


    </li>
  );
}

export default EventItem;