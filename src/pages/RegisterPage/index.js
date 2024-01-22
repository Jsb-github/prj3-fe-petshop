import React from "react";

import { Link } from "react-router-dom";
import SingUp from "./sign-up/SignUp";
function RegisterPage() {
  return (
    <div className="page">
      <div className="form_container">
        <h1>회원가입</h1>
        <SingUp />
        <p>
          이미 계정이 있습니까? <Link to={"/login"}>로그인</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
