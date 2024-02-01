import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {
  Box,
  Button, Center, Flex, Heading, Image,
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay, SimpleGrid, Spinner, Text, Textarea,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import StarRatings from "react-star-ratings/build/star-ratings";
import {LoginContext} from "../../../hooks/useAuth";

function ReviewDetail(props) {

  const {no} = useParams();

  const [review, setReview] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const navigate = useNavigate();

  const [url, setUrl] = useState("");

  const { isAdmin,hasAccess } =
    useContext(LoginContext);


  useEffect(() => {
    axios
      .get(`/api/review/${no}`)
      .then((response) => {
        setReview(response.data);
        setUrl(response.data.files[0].url);
      })
      .catch(() => console.log("에러"));
  }, []);



  function handleDelete() {
    axios
      .delete(`/api/review/remove/${no}` )
      .then((response) => {
        toast({
          description: no + "번 게시물이 삭제되었습니다.",
          status: "success",
        });
        navigate("/review");
      })
      .catch((error) => {
        toast({
          description: "삭제 중 문제가 발생하였습니다.",
          status: "error",
        });
      })
      .finally(() => onClose());
  }



  function handleClick(url) {
    setUrl(url);
  }

  if (review === null) {
    return (
      <Center>
        <Spinner/>
      </Center>
    );
  }
  return (
    <Center>
      <Box w={"5xl"} mt={"150px"}>
        <Heading mb={8}>제목 : {review.title}</Heading>
        <Box mb={8} h={"500px"} >
          <Flex>
            <Center w={"60%"}>
              <Image maxH={"450px"} maxW={"550px"} src={url} />
            </Center>
            <Box w={"40%"} h={"500px"} overflowY={"auto"}>
              <SimpleGrid
                marginTop={5}
                columns={{ base: 2, md: 2, lg: 2, "2xl": 2 }}
              >
                {review.files.length !== null &&
                  review.files.map((file) => (
                    <Button
                      mt={2}
                      bg={"white"}
                      h="180px"
                      key={file.no}
                      overflow={"hidden"}
                      onClick={() => handleClick(file.url)}
                    >
                      <Image
                        maxH={"160px"}
                        borderRadius="lg"
                        src={file.url}
                        alt="stay slide"
                      />
                    </Button>
                  ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>

        <Box mb={8} h="100px"  lineHeight="50px">
          <Flex>
            <Box lineHeight="50px">
              <Text fontSize="25px">별점 : </Text>
            </Box>
            <Box lineHeight="50px" ml={5}>
                <StarRatings
                  rating={review.point}
                  starDimension="30px"
                  starSpacing="3px"
                  starRatedColor="#fcc419"
                  numberOfStars={5}
                />
            </Box>
          </Flex>
        </Box>

        <Box mb={8}>
          <Box>
            <Heading size={"lg"} mb={5}>
              내용
            </Heading>
            <Textarea>{review.info}</Textarea>
          </Box>
          {(hasAccess(review.writer) || isAdmin())&&(
          <Box mt={8}>
              <Flex gap={8}>
                <Button
                  colorScheme="purple"
                  onClick={() => navigate(`/review/edit/${no}`)}
                >
                  수정
                </Button>
                <Button colorScheme="red" onClick={onOpen}>
                  삭제
                </Button>
              </Flex>
          </Box>
          )}
        </Box>
      </Box>


      {/* 삭제 모달  */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>삭제 확인</ModalHeader>
          <ModalCloseButton />
          <ModalBody>작성하신 리뷰는 다시 작성이 불가합니다.<br/> 삭제 하시겠습니까 ?</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>닫기</Button>
            <Button onClick={handleDelete} colorScheme="red">
              삭제하기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}

export default ReviewDetail;