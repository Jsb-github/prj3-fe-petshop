import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import NoticeForm from "../../../components/form/Notice/Form";

function NoticeRegistration() {

  const [erromesage, setErromesage] = useState();

  const navigate = useNavigate();

  const handleAdd = (title,info) => {
    axios
      .post("/api/notice/add", {
        title,info
      })
      .then(() => navigate("/notice"))
      .catch((e) => setErromesage("bad"))
      .finally(() => console.log("done"));
  };


  return (
    <NoticeForm
      title={"공지등록"}
      getDataForm={handleAdd}
      erromesage={erromesage}
    />
  );
}

export default NoticeRegistration;