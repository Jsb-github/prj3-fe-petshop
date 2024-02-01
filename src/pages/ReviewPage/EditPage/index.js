import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {
  Box, Button,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading, Image,
  Input, Spinner, Switch,
  Textarea,
  useToast
} from "@chakra-ui/react";
import {Navigate, useNavigate, useParams} from "react-router-dom";


import styled from "@emotion/styled";
import {FaStar} from "react-icons/fa6";
import {useImmer} from "use-immer";
import {LoginContext} from "../../../hooks/useAuth";

function ReviewEdit(props) {
  const [review, updateReview] = useImmer(null);
  const [removeFileIds, setRemoveFileIds] = useState([]);
  const [uploadFiles, setUploadFiles] = useState(null);


  const ARRAY = [0, 1, 2, 3, 4];
  const [score, setScore] = useState([false, false, false, false, false]);
  const [point, setPoint] = useState(0);

  const navigate = useNavigate();
  const toast = useToast();
  const { no } = useParams();

  const { isAdmin,hasAccess } =
    useContext(LoginContext);
  const handleStarClick = (index) => {
    let star = [...score];
    for (let i = 0; i < 5; i++) {
      star[i] = i <= index ? true : false;
    }
    setScore(star);
  };


  useEffect(() => {
    sendReview();
  }, [score]);

  useEffect(() => {
    axios
      .get(`/api/review/${no}`)
      .then((response) => {
        updateReview(response.data);
      })
      .catch(() => console.log("에러"));
  }, []);


  const sendReview = () => {
    let point = score.filter(Boolean).length;
    setPoint(point);
  };



  function handleSubmit() {
    axios
      .putForm("/api/review/edit", {
        no: review.no,
        title: review.title,
        info: review.info,
        removeFileIds,
        uploadFiles,
        point,
      })
      .then(() => {
        toast({
          description: + "번 게시글이 수정되었습니다",
          status: "success",
        })

        navigate("/review/" + no);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast({
            description: "빠진 내용이 없는지 확인해 주세요",
            status: "error",
          });
        } else {
          toast({
            description: "다시 등록해주세요",
            status: "error",
          });
        }
      })
      .finally(() => console.log("done"));
  }

  function handleRemoveFile(e) {
    if (e.target.checked) {
      setRemoveFileIds([...removeFileIds, e.target.value]);
    } else {
      setRemoveFileIds(removeFileIds.filter((item) => item !== e.target.value));
    }
  }

  if (review === null) {
    return <Spinner />;
  }

  if (review !== null){
    if (!(hasAccess(review.writer) || isAdmin())){
      return <Navigate to={"*"}/>
    }
  }


  return (
    <Center>
      <Box w={"4xl"} mt={"150px"}>
        <Heading>리뷰 수정하기</Heading>

        <Flex>
          <FormControl>
            <FormLabel>제목</FormLabel>
            <Input
              value={review.title}
              onChange={(e) => {
                updateReview((draft) => {
                  draft.title = e.target.value;
                });
              }}
            />
          </FormControl>
        </Flex>

        <Flex mb={5}>
          <Stars>
            {ARRAY.map((el, index) => (
              <FaStar
                key={index}
                size="30"
                onClick={() => handleStarClick(el)}
                className={score[el] && "yellowStar"}
              />
            ))}
          </Stars>
        </Flex>

        {/* 이미지 출력 */}
      <Flex>
        {review.files.length > 0 &&
          review.files.map((file) => (
            <Box margin={"10px"} key={file.no}>
              <FormControl display={"flex"} alignItems={"center"}>
                <FormLabel>

                </FormLabel>
                <Switch
                  value={file.no}
                  colorScheme="red"
                  onChange={handleRemoveFile}
                />
              </FormControl>
              <Box w={"150px"} h={"150px"}>
                <Image src={file.url} alt={file.name} />
              </Box>
            </Box>
          ))}
      </Flex>





        <FormControl>
          <FormLabel>사진 첨부</FormLabel>
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setUploadFiles(e.target.files)}
          />
          {/* 여러 파일 전송 */}
          <FormHelperText>
            한 개 파일은 1MB, 총 용량은 10MB를 넘길수 없습니다
          </FormHelperText>
        </FormControl>

        <FormControl marginY={"20px"}>
          <FormLabel>리뷰 작성하기</FormLabel>
          <Textarea
            h={"500px"}
            resize={"none"}
            value={review.info}
            onChange={(e) => {
              updateReview((draft) => {
                draft.info = e.target.value;
              });
            }}
          />
        </FormControl>

        <Button colorScheme="blue" onClick={handleSubmit}>
          수정
        </Button>
        <Button onClick={() => navigate(-1)} colorScheme="red">
          취소
        </Button>
      </Box>
    </Center>
  );
}

const Stars = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;

export default ReviewEdit;