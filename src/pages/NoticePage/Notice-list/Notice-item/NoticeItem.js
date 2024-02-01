import React from 'react';
import {useNavigate} from "react-router-dom";
import {Td, Tr} from "@chakra-ui/react";

function NoticeItem({item}) {
  const navigate = useNavigate();
  return (
   <Tr>
     <Td>{item.no}</Td>
     <Td  onClick={() => navigate(`/notice/${item.no}`)}>{item.title}</Td>
      <Td>{item.writer}</Td>
      <Td>{item.inserted}</Td>
   </Tr>
  );
}

export default NoticeItem;