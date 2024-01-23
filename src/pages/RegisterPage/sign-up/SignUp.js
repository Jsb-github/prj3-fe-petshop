import React, { useState } from "react";
import Form from "../../../components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [erromesage, setErromesage] = useState();

  const handleSignup = (email, password) => {
    axios
      .post("/api/member/signup", {
        email,
        password,
      })
      .then(() => navigate("/"))
      .catch((e) => setErromesage("bad"))
      .finally(() => console.log("done"));
  };

  return (
    <Form
      title={"가입하기"}
      getDataForm={handleSignup}
      erromesage={erromesage}
    />
  );
}

export default SignUp;
