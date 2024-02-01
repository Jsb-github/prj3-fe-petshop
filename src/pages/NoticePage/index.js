import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import NoticeList from "./Notice-list/NoticeList";
import {Button, Text} from "@chakra-ui/react";
import {LoginContext} from "../../hooks/useAuth";
// 추석 명절 배송 서비등 사이트 운영 공지사항
function NoticePage(props) {
  const { isAdmin } =
    useContext(LoginContext);

  const navigate = useNavigate();
  return <div className="page">
    <div className="container">
      <Text fontSize={"5xl"} mt={"15px"} >Notice</Text>

      <NoticeList />
      {isAdmin() &&
        <Button onClick={() => navigate("/notice/write")}>글쓰기</Button>
      }

    </div>
  </div>;
}

export default NoticePage;
