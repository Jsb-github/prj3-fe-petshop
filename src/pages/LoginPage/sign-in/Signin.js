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
  const handleLogin = (email, pass) => {
    axios
      .post("/api/member/login", {
        email,
        pass,
      })
      .then((response) => {
        dispatch(
          setUser({
            email: response.data.email,
            id: response.data.user.uid,
          }),
        );
        dispatch(setUserId(response.user.uid));
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
