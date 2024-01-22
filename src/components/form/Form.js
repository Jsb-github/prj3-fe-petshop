import React from "react";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";

function Form({ title, getDataForm, erromesage }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = ({ email, password }) => {
    console.log(email, password);
    getDataForm(email, password);
    reset();
  };

  const userEmail = {
    required: "필수 필드입니다.",
    pattern: {
      value:
        /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
      message: "입력하신 이메일 주소가 올바르지 않습니다.",
    },
  };
  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 8,
      message: "최소 8자입니다.",
    },
    maxLength: {
      value: 13,
      message: "최대 13자입니다.",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm,
      message: `최소 8자, 영문 1자, 숫자 1자.;`,
    },
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            {...register("email", userEmail)}
          />
          {errors?.email && (
            <div>
              <span className={styles.form_error}>{errors.email.message}</span>
            </div>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", userPassword)}
          />
        </div>
        {errors?.password && (
          <div>
            <span className={styles.form_error}>{errors.password.message}</span>
          </div>
        )}
        <button type="submit">{title}</button>

        {erromesage && <span className={styles.form_error}>{erromesage}</span>}
      </form>
      ;
    </>
  );
}

export default Form;
