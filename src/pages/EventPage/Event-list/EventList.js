import React, {useEffect} from 'react';
import styles from "./EventList.module.scss";
import EventItem from "./Event-Item/EventItem";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchEvents} from "../../../store/event/events.slice";

function EventList(props) {
  const dispatch = useAppDispatch();
  const {events,isLoading} = useAppSelector(state => state.eventsSlice);

  useEffect(() => {
    dispatch(fetchEvents())
  }, []);


  return (
    <ul className={styles.Event_list}>
      {events.map((events)=> (
        <EventItem key={events.no} item={events}/>
      ))}
    </ul>
  );
}

export default EventList;