import React from "react";
import { Link } from "react-router-dom";
import Signin from "./sign-in/Signin";

function LoginPage() {
  return (
    <div className="page">
      <div className="form_container">
        <h1>로그인</h1>
        <Signin />
        <p>
          계정이 없습니까? <Link to={"/register"}>가입하기</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
