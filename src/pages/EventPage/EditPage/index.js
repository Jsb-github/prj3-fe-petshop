import React, {useContext, useEffect, useState} from 'react';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import EventForm from "../../../components/form/Event/Form";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchEvent} from "../../../store/event/event.slice";
import {LoginContext} from "../../../hooks/useAuth";

function EventEdit() {
  const navigate = useNavigate();
  const [erromesage, setErromesage] = useState();

  const {no} = useParams();
  const eventNo = Number(no);
  const dispatch = useAppDispatch();

  const {event,isLoading} = useAppSelector(state => state.eventSlice);
  const { isAuthenticated } =
    useContext(LoginContext);
  useEffect(() => {
    dispatch(fetchEvent(eventNo));
  }, [eventNo]);

  if (!isAuthenticated()) {
    return <Navigate to={"/"} replace />;
  }
  const onSubmit = (title,file) => {
    axios
      .putForm("/api/event/edit", {
        no,title,file
      })
      .then(() => navigate("/event"))
      .catch((e) => setErromesage("bad"))
      .finally(() => console.log("done"));
  };


  return (
    <EventForm
        title ={"이벤트 수정"}
        getDataForm = {onSubmit}
        erromesage={erromesage}
    />
  );
}

export default EventEdit;