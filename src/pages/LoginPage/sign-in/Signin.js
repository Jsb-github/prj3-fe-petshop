import React, { useState } from "react";
import Form from "../../../components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { setUser } from "../../../store/user/user.slice";
import { setUserId } from "../../../store/cart/cart.slice";

function Signin() {
  const navigate = useNavigate();
  const [erromesage, setErromesage] = useState();
  const dispatch = useAppDispatch();
  const handleLogin = (email, password) => {
    axios
      .post("/api/member/login", {
        email,
        password,
      })
      .then((response) => {

        navigate("/");
      })
      .catch((e) => setErromesage("bad"))
      .finally(() => console.log("done"));
  };

  return (
    <Form title={"로그인"} getDataForm={handleLogin} erromesage={erromesage} />
  );
}

export default Signin;
