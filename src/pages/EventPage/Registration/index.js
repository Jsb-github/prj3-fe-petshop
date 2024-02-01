import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import EventForm from "../../../components/form/Event/Form";

function EventRegistration() {
  const navigate = useNavigate();
  const [erromesage, setErromesage] = useState();

  const onsubmit = (title,file) => {
    axios
      .postForm("/api/event/add", {
        title,file
      })
      .then(() => navigate("/event"))
      .catch((e) => setErromesage("bad"))
      .finally(() => console.log("done"));
  };


  return (
    <EventForm
        title ={"이벤트 등록"}
        getDataForm = {onsubmit}
        erromesage={erromesage}
    />
  );
}

export default EventRegistration;