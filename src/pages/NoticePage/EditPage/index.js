import React, {useContext, useEffect, useState} from 'react';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import NoticeForm from "../../../components/form/Notice/Form";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchNotice} from "../../../store/notice/notice.slice";
import {LoginContext} from "../../../hooks/useAuth";

function NoticeEdit(props) {

  const navigate = useNavigate();
  const [erromesage, setErromesage] = useState();
  const {no} = useParams();
  const noticeNo = Number(no);
  const dispatch = useAppDispatch();

  const {notice,isLoading} = useAppSelector(state => state.noticeSlice);

  const { isAuthenticated, isAdmin } =
    useContext(LoginContext);
  useEffect(() => {
    dispatch(fetchNotice(noticeNo));
  }, [noticeNo]);;


  const handleEdit = (title,info)=>{
    axios
      .post("/api/notice/edit", {
       no, title,info
      })
      .then(() => navigate("/notice"))
      .catch((e) => setErromesage("bad"))
      .finally(() => console.log("done"));
  }
  if (!isAuthenticated() &&  isAdmin()) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <NoticeForm
      title={"수정하기"}
      getDataForm={handleEdit}
      erromesage={erromesage}
      item={notice}
   />
  );
}

export default NoticeEdit;