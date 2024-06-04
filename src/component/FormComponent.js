import React, { useRef, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

const FormComponent = () => {
  const phoneRef = useRef();
  const nameRef = useRef();
  const [service, setService] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "", service: "" });
  const phoneValidate = (phone) => {
    const phoneRegex =
      /^(\+?\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return phoneRegex.test(phone);
  };
  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/\s+/g, "").trim();
  };
  const handlesubmit = () => {
    const phone = phoneRef.current.value.trim();
    const name = nameRef.current.value.trim();
    let formErrors = { name: "", phone: "", service: "" };
    let isValid = true;

    if (name === "") {
      formErrors.name = "請輸入名稱";
      isValid = false;
    }
    if (!phoneValidate(phone)) {
      formErrors.phone = "請輸入電話";
      isValid = false;
    }
    if (service === "") {
      formErrors.service = "請選擇服務";
      isValid = false;
    }
    setErrors(formErrors);

    if (!isValid) return;
    submitForm({ phone, name, service });
  };

  const submitForm = async (formData) => {
    try {
      const response = fetch(
        "/services",
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        },
        console.log(123),
      );
      const data = await response.json();
      nameRef.current.value = "";
      phoneRef.current.value = "";
      setService("");
      setErrors({ name: "", phone: "", service: "" });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="mx-56 mb-16 mt-24 flex justify-center px-6">
        <div className="border-grey-100 w-full rounded-md border-2 border-solid py-5 shadow-sm shadow-gray-200">
          <div className="flex justify-center p-4 text-xl">
            <label htmlFor="name" className="form-label-required">
              聯絡姓名：
            </label>
            <input
              type="text"
              className={`form-input ${errors.name ? "border-red-500" : ""}`}
              required
              ref={nameRef}
              placeholder="請輸入姓名"
              onChange={handleInput}
              id="name"
            />
          </div>
          <div className="flex justify-center p-4 text-xl">
            <label htmlFor="tel" className="form-label-required">
              手機號碼：
            </label>
            <input
              type="tel"
              className={`form-input ${errors.phone ? "border-red-500" : ""}`}
              ref={phoneRef}
              required
              id="tel"
              placeholder="請輸入手機"
              maxLength={10}
              onChange={handleInput}
            />
          </div>
          <div className="flex justify-center p-4 text-xl">
            <label htmlFor="service" className="form-label-required">
              選擇服務：
            </label>
            <select
              id="service"
              value={service}
              className={`form-input ${errors.service ? "border-red-500" : ""}`}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">請選擇服務</option>
              <option value="service1">家中電器維修</option>
              <option value="service2">家電安裝服務</option>
              <option value="service3">家電保養服務</option>
              <option value="service4">家電配置諮詢</option>
            </select>
          </div>
          <div className="flex justify-center p-4">
            <button
              type="button"
              className="form-button"
              onClick={handlesubmit}
            >
              送出
              <FaTelegramPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
