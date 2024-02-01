import React from "react";
import ReviewList from "./Review-list/ReviewList";
import {Text} from "@chakra-ui/react";

// 구매한 상품 리뷰하는페이지
function ReviewPage(props) {
  return (
    <div className="page">
      <div className="container">
        <Text fontSize={"5xl"} mt={"15px"} > Review</Text>
        <ReviewList/>
      </div>

    </div>
  )
}

export default ReviewPage;
