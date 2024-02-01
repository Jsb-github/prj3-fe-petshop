import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import styles from "../Form.module.scss";
import {Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input, Textarea} from "@chakra-ui/react";
import styled from "@emotion/styled";
import {FaStar} from "react-icons/fa6";
function ReviewForm({title,getDataForm,erromesage}) {
  const {
    register,
    handleSubmit,
    formState :{errors},
    reset,
  } = useForm({mode:"onChange"});


  const ARRAY = [0, 1, 2, 3, 4];
  const [score, setScore] = useState([false, false, false, false, false]);
  const [point, setPoint] = useState(0);
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

  const sendReview = () => {
    let point = score.filter(Boolean).length;
    // point 값을 할당
    setPoint(point);
    // 할당된 값을 서버로 보낼수 있게 함
  };

  const onSubmit =  ({title,info,files}) =>{
      getDataForm(title,info,files,point);
      reset()
  }

  const userTitle = {
    required : "필수 사항입니다.",
    minLength : {
      value : 5,
      message : "최소 5자입니다."
    }
  }
  const userInfo = {
    required : "필수 사항입니다.",
    minLength : {
      value : 5,
      message : "최소 5자입니다."
    }
  }


  const userFiles = {
    required :"필수 사항입니다."
  }

  return (
        <Center>
          <Box mt={"130px"}  w={"5xl"}>
            <Heading mb={"15px"} textAlign={"center"}>리뷰작성</Heading>
            <Flex flexDirection={"column"} mb={5}>
              <FormControl >
                <FormLabel>제목</FormLabel>
                <Input
                  type="text"
                  placeholder="제목을 입력해주세요"
                  {...register("title",userTitle)}
                />
              </FormControl>
              {errors?.title && (
                <Box>
                  <span className={styles.form_error}>{errors.title.message}</span>
                </Box>
              )}
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

            <Flex flexDirection={"column"} mb={5}>
              <FormControl>
                <FormLabel>본문</FormLabel>

                <Textarea
                  placeholder="본문 작성"
                  {...register("info",userInfo)}
                />
              </FormControl>
              {errors?.info && (
                <Box>
                  <span className={styles.form_error}>{errors.info.message}</span>
                </Box>
              )}
            </Flex>

            <Flex flexDirection={"column"} mb={5}>
              <Input
                type="file"
                accept="image/*"
                multiple

                {...register("files",userFiles)}
              />

              {errors?.files && (
                <Box>
                  <span className={styles.form_error}>{errors.files.message}</span>
                </Box>
              )}
            </Flex>


            <Button type="submit" onClick={handleSubmit(onSubmit)}>{title}</Button>
            {erromesage && <span className={styles.form_error}>{erromesage}</span>}
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
export default ReviewForm;