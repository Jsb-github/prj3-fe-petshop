import React, {useState} from 'react';
import styles from "../Form.module.scss";
import {useForm} from "react-hook-form";


function NoticeForm({ title, getDataForm, erromesage,item }) {
  const {
    register,
    handleSubmit,
    formState :{errors},
    reset,
  } = useForm({mode:"onChange"});


  const onSubmit = ({title,info})=>{
    getDataForm(title,info);
    reset();
  }


  const userTitle = {
    required : "필수 사항입니다.",
    minLength : {
      value : 5,
      message : "최소 5자입니다."
    }
  }

  const  userinfo = {
    required : "필수 사항입니다.",
    minLength : {
      value : 5,
      message : "최소 5자입니다."
    }
  }
  
  return (
    <div className="page">
      <div className="container">
        <h1>공지 사항 작성</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
        >
          <div>
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              {...register("title",userTitle)}
            />
            {errors?.title && (
              <div>
                <span className={styles.form_error}>{errors.title.message}</span>
              </div>
            )}
          </div>
          <div>

            <textarea
              placeholder="설명란"
              {...register("info",userinfo)}
            />
          </div>
          {errors?.title && (
            <div>
              <span className={styles.form_error}>{errors.title.message}</span>
            </div>
          )}
          <button type="submit">{title}</button>
          {erromesage && <span className={styles.form_error}>{erromesage}</span>}
        </form>
      </div>
    </div>
  );
}

export default NoticeForm;