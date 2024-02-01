import React, {useContext, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {
  Box, Button,
  Card, CardBody, CardFooter,
  CardHeader,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import {fetchNotice} from "../../../store/notice/notice.slice";
import {fetchEvent} from "../../../store/event/event.slice";
import axios from "axios";
import Loader from "../../../components/loader/Loader";
import {LoginContext} from "../../../hooks/useAuth";

function EventDetail(props) {
  const {no} = useParams();
  const eventNo = Number(no);

  const dispatch = useAppDispatch();

  const {event, isLoading} = useAppSelector(state => state.eventSlice);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const navigate = useNavigate();
  const { isAdmin } =
    useContext(LoginContext);

  useEffect(() => {
    dispatch(fetchEvent(eventNo));
  }, [eventNo]);

  function handleDelete() {
    axios
      .delete("/api/event/remove/" + no)
      .then((response) => {
        toast({
          description: no + "번 게시물이 삭제되었습니다.",
          status: "success",
        });
        navigate("/event");
      })
      .catch((error) => {
        toast({
          description: "삭제 중 문제가 발생하였습니다.",
          status: "error",
        });
      })
      .finally(() => onClose());
  }
  return (
    <div className="page">
      {isLoading ? (
        <Loader />
      ) :(
        <Box mt={"50px"}>
          <Center>
            <Card w={"lg"} border={"1px solid black"}>
              <CardHeader >
                <FormControl mb={5}>
                  <Flex>
                    <FormLabel w={"100px"}>제목</FormLabel>
                    <Input value={event.title} readOnly/>
                  </Flex>

                </FormControl>
              </CardHeader>
              <CardBody>
                <Flex>
                  <FormLabel w={"100px"}>작성자</FormLabel>
                  <Input value={event.writer} readOnly/>
                </Flex>
              </CardBody>
              <CardFooter>
                <FormControl mb={5}>
                  <img
                    src={event.url}
                    width={"100%"}
                    height={"200px"}
                    alt="event"
                  />
                </FormControl>
              </CardFooter>
            </Card>

          </Center>
        </Box>
      )}
      {isAdmin() &&
        <div>
          <Button onClick={()=>navigate(`/event/edit/${no}`)}>수정</Button>
          <Button onClick={onOpen}>삭제</Button>
        </div>
      }



      {/* 삭제 모달 */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>삭제 확인</ModalHeader>
          <ModalCloseButton />
          <ModalBody>삭제 하시겠습니까?</ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>닫기</Button>
            <Button onClick={handleDelete} colorScheme="red">
              삭제
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default EventDetail;