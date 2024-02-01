import React, { useContext } from "react";
import { LoginContext } from "../../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import OrdersList from "./orders-list/OrdersList";
import {Text} from "@chakra-ui/react";

function OrderPage() {
  const { isAuthenticated } =
    useContext(LoginContext);

  // 권한없으면 뒤로 가기
  if (!isAuthenticated()) {
    return <Navigate to={"/"} replace />;
  }
  return (
    <div className="page">
      <div className="container">
        <Text fontSize={"5xl"} mt={"15px"} >주문 히스토리</Text>
        <OrdersList />
      </div>
    </div>
  );
}

export default OrderPage;
