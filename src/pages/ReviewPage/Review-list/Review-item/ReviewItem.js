import React from 'react';
import {Image, Td, Tr} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

function ReviewItem({item}) {
  const navigate = useNavigate();
  return (
   <Tr>
     <Td>{item.no}</Td>
     <Td  w={"140px"} h={"100px"} cursor={"pointer"}
       onClick={()=>navigate(`/review/${item.no}`)}>
       {item.files.length > 0 &&
         item.files.map((file) => (
           <Image
             w={"100%"}
             h={"100%"}
             key={file.no}
             src={file.url}
             alt="stay slide"
           />
         ))}
     </Td>
     <Td>{item.title}</Td>
     <Td>  <StarRatings
       rating={item.point}
       starDimension="25px"
       starSpacing="8px"
       starRatedColor="#fcc419"
       numberOfStars={5}
     /></Td>
     <Td>{item.writer}</Td>
   </Tr>
  );
}

export default ReviewItem;