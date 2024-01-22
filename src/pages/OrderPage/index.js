import React, { useContext } from "react";
import { LoginContext } from "../../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import OrdersList from "./orders-list/OrdersList";

function OrderPage() {
  const { fetchLogin, login, isAuthenticated, isAdmin } =
    useContext(LoginContext);

  // 권한없으면 뒤로 가기
  // if (!isAuthenticated()) {
  //   return <Navigate to={"/"} replace />;
  // }
  return (
    <div className="page">
      <div className="container">
        <h1>주문 히스토리</h1>
        <OrdersList />
      </div>
    </div>
  );
}

export default OrderPage;
