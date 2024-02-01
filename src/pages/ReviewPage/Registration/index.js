import React, {useState} from 'react';
import ReviewForm from "../../../components/form/Review/Form";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {Box, Text} from "@chakra-ui/react";

function ReviewRegistration(props) {
  const [erromesage, setErromesage] = useState()
  const {no} = useParams();
  const navigate = useNavigate();
  const onsubmit = (title,info,uploadFiles,point) => {
    axios
      .postForm("/api/review/add", {
        no,title,info,uploadFiles,point
      })
      .then(() => navigate("/"))
      .catch((e) => setErromesage("bad"))
      .finally(() => console.log("done"));
  };

  return (
      <Box mt={"20px"} mb={"50px"}>
        <ReviewForm
          title ={"리뷰 등록"}
          getDataForm = {onsubmit}
          erromesage={erromesage}
        />
      </Box>


  );
}

export default ReviewRegistration;