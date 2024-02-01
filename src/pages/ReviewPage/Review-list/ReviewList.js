import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {Table, Tbody, Td, Thead, Tr} from "@chakra-ui/react";
import ReviewItem from "./Review-item/ReviewItem";
import {fetchReviews} from "../../../store/review/reviews.slice";

function ReviewList(props) {
  const dispatch = useAppDispatch();

  const {reviews,isLoading} = useAppSelector(state => state.reviewsSlice);


  useEffect(() => {
    dispatch(fetchReviews())
  }, []);

  return (
    <Table mt={"50px"}>
      <Thead>
        <Tr>
          <Td>번호</Td>
          <Td>사진</Td>
          <Td>제목</Td>
          <Td>평점</Td>
          <Td>작성자</Td>
        </Tr>
      </Thead>
      <Tbody>
        {reviews.map((review)=>(
          <ReviewItem key={review.no} item={review} />
        ))}
      </Tbody>
    </Table>
  );
}

export default ReviewList;