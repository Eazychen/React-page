import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const MySwal = withReactContent(Swal);
  const onSubmit = async (data) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await fetch(`${apiUrl}/api/submitForm`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      const result = await response.json();
      reset();

      MySwal.fire({
        icon: "success",
        title: "提交成功!",
        text: "我們將盡快與您聯繫",
        confirmButtonColor: "#3085d6",
      });
      return result;
    } catch (error) {
      console.log(error);
      MySwal.fire({
        icon: "error",
        title: "提交失敗",
        text: "請稍後再試或聯繫客服0953-537-123",
        confirmButtonColor: "#d33",
      });
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
    <div className="bg-gray-100">
      <div className="border-grey-500 container-layout container-layout-lg container-layout-xl my-32 flex flex-col items-center rounded-xl border-2 bg-sky-50 shadow-md">
        <div className="my-5">
          <h4 className="p-4 text-3xl text-blue-800 md:text-5xl">預約服務 </h4>
        </div>
        <form
          className="flex w-full flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 w-full max-w-xs">
            <label
              htmlFor="tel"
              className="mb-2 block text-base font-medium text-gray-700"
            >
              客戶姓名：
            </label>
            <input
              type="tel"
              id="tel"
              className={`w-full rounded-lg px-3 py-2 text-base outline-none transition-colors duration-200 ease-in-out ${
                errors.phone
                  ? "border-2 border-red-500"
                  : "border-2 border-gray-600 hover:border-blue-600 focus:border-blue-600"
              }`}
              placeholder="請輸入姓名"
              onChange={inputHandler}
              onKeyDown={keyDownHandler}
              {...register("name", { required: "請輸入姓名" })}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4 w-full max-w-xs">
            <label
              htmlFor="tel"
              className="mb-2 block text-base font-medium text-gray-700"
            >
              手機號碼：
            </label>
            <input
              type="tel"
              id="tel"
              className={`w-full rounded-lg px-3 py-2 text-base outline-none transition-colors duration-200 ease-in-out ${
                errors.phone
                  ? "border-2 border-red-500 focus:border-red-500"
                  : "border-2 border-gray-600 hover:border-blue-600 focus:border-blue-600"
              }`}
              placeholder="請輸入手機"
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
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="mb-4 w-full max-w-xs">
            <label
              htmlFor="service"
              className="mb-2 block text-base font-medium text-gray-700"
            >
              選擇服務：
            </label>
            <div className="relative">
              <select
                id="service"
                className={`w-full appearance-none rounded-lg px-3 py-2 text-base outline-none transition-colors duration-200 ease-in-out ${
                  errors.service
                    ? "border-2 border-red-500 focus:border-red-500"
                    : "border-2 border-gray-600 hover:border-blue-600 focus:border-blue-600"
                }`}
                {...register("service", { required: "請選擇服務" })}
              >
                <option value="default">請選擇服務</option>
                <option value="service1">家中電器維修</option>
                <option value="service2">家電安裝服務</option>
                <option value="service3">家電保養服務</option>
                <option value="service4">家電配置諮詢</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {errors.service && (
              <p className="mt-1 text-sm text-red-500">
                {errors.service.message}
              </p>
            )}
          </div>
          <div className="flex justify-center p-4">
            <button type="submit" className="btn btn-primary">
              送出
              <FaTelegramPlane />
            </button>
          </div>
          <div className="my-8 w-full max-w-md text-center text-sm text-gray-600">
            <h5 className="p-2 font-semibold text-gray-700">注意事項：</h5>
            <ul className="space-y-1 p-2">
              <li>我們將在 24 小時內與您聯繫確認預約</li>
              <li>如需取消預約，請提前 4 小時通知我們</li>
              <li>服務時間為週一至週六 9:00-18:00</li>
              <li>您的個人信息將受到嚴格保護</li>
            </ul>
            <p className="p-2 italic">如有任何疑問，請撥打專線0953-537-123</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
