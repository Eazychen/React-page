import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";

const apiUrl = process.env.REACT_APP_API_URL;

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${apiUrl}/api/submitForm`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      reset();
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const inputHandler = (e) => {
    e.target.value = e.target.value.replace(/\s+/g, "");
  };
  const keyDownHandler = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <div>
      <div className="border-grey-100  container-layout mb-16 mt-24 rounded-md border-2 border-solid py-5 shadow-md shadow-gray-200">
        <div className="mb-5 flex justify-center">
          <h4 className="p-4 text-5xl">預約服務</h4>
        </div>
        <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center">
            <div className="flex w-2/3 justify-center text-xl ">
              <label htmlFor="name" className="form-label-required">
                聯絡姓名：
              </label>
              <input
                type="text"
                placeholder="請輸入姓名"
                className={`form-input ${errors.service ? "form-input-error" : ""}`}
                id="name"
                onChange={inputHandler}
                onKeyDown={keyDownHandler}
                {...register("name", { required: "請輸入姓名" })}
              />
              <div className="error-message">
                {errors.name && <p>{errors.name.message}</p>}
              </div>
            </div>
          </div>
          <div className="my-3 flex justify-center">
            <div className="flex w-2/3 justify-center text-xl">
              <label htmlFor="tel" className="form-label-required">
                手機號碼：
              </label>
              <input
                type="tel"
                id="tel"
                placeholder="請輸入手機"
                className={`form-input ${errors.service ? "form-input-error" : ""}`}
                maxLength={10}
                onChange={inputHandler}
                onKeyDown={keyDownHandler}
                {...register("phone", {
                  required: "請輸入電話",
                  pattern: {
                    value: /^09\d{8}$/,
                    message: "請輸入有效電話號碼",
                  },
                })}
              />
              <div className="error-message">
                {errors.phone && <p>{errors.phone.message}</p>}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex w-2/3 justify-center text-xl">
              <label htmlFor="service" className="form-label-required">
                選擇服務：
              </label>
              <select
                id="service"
                className={`form-input ${errors.service ? "form-input-error" : ""}`}
                {...register("service", { required: "請選擇服務" })}
              >
                <option value="">請選擇服務</option>
                <option value="service1">家中電器維修</option>
                <option value="service2">家電安裝服務</option>
                <option value="service3">家電保養服務</option>
                <option value="service4">家電配置諮詢</option>
              </select>
              <div className="error-message">
                {errors.service && <p>{errors.service.message}</p>}
              </div>
            </div>
          </div>
          <div className="flex justify-center p-4">
            <button type="submit" className="form-button">
              送出
              <FaTelegramPlane />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
