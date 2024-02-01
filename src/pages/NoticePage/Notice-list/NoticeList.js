import React, {useEffect} from 'react';
import styles from "./NoticeList.module.scss";
import NoticeItem from "./Notice-item/NoticeItem";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchNotices} from "../../../store/notice/notices.slice";
import {Table, Tbody, Td, Thead, Tr} from "@chakra-ui/react";
function NoticeList(props) {
  const dispatch = useAppDispatch();
  const {notices,isLoading} = useAppSelector(state => state.noticesSlice);

  useEffect(() => {
    dispatch(fetchNotices())
  }, []);


  return (
    <Table mt={"50px"} >
      <Thead>
        <Tr>
          <Td>번호</Td>
          <Td >제목</Td>
          <Td>작성자</Td>
          <Td>작성일</Td>
        </Tr>
      </Thead>
      <Tbody>
      {notices.map((notice)=>(
        <NoticeItem key={notice.no} item={notice} />
      ))}

      </Tbody>
    </Table>
  );
}

export default NoticeList;