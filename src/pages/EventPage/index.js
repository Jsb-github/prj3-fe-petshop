// 이벤트 공지사항

import React, {useContext} from "react";
import EventList from "./Event-list/EventList";
import {useNavigate} from "react-router-dom";
import {LoginContext} from "../../hooks/useAuth";
import {Text} from "@chakra-ui/react";



function EventPage() {
  const navigate = useNavigate();
  const { isAdmin } =
    useContext(LoginContext);
  return(
    <div className="page">
      <div className="container">
        <Text fontSize={"5xl"} mt={"15px"} >EVENT</Text>
        <EventList />
        {isAdmin() &&
          <button onClick={() => navigate("/event/write")}>글쓰기</button>
        }

      </div>
    </div>
  );
}

export default EventPage;
