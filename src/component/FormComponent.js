import React, { useRef, useState } from "react";

const FormComponent = () => {
  const phoneRef = useRef();
  const nameRef = useRef();
  const [service, setService] = useState("");
  const phoneValidate = (phone) => {
    const phoneRegex =
      /^(\+?\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return phoneRegex.test(phone);
  };
  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/\s+/g, "").trim();
  };
  return (
    <div>
      <div className="mx-56 mb-5 mt-20 flex justify-center px-6">
        <div className="w-full border-4 border-solid border-black py-5">
          <div className="flex justify-center p-4 text-xl">
            <label htmlFor="name" className="flex items-center p-2">
              聯絡姓名：
            </label>
            <input
              type="text"
              className="w-1/2 border-2 border-solid border-gray-300 p-4"
              required
              ref={nameRef}
              placeholder="請輸入姓名"
              onChange={handleInput}
            />
          </div>
          <div className="flex justify-center p-4 text-xl">
            <label htmlFor="tel" className="flex items-center p-2">
              手機號碼：
            </label>
            <input
              type="tel"
              className="w-1/2 border-2 border-solid border-gray-300 p-4 text-xl"
              ref={phoneRef}
              required
              id="tel"
              placeholder="請輸入手機"
              maxLength={10}
              onChange={handleInput}
            />
          </div>
          <div className="flex justify-center p-4 text-xl">
            <label htmlFor="service" className="flex items-center p-2">
              選擇服務：
            </label>
            <select
              id="service"
              value={service}
              className="flex w-1/2 border-2 border-solid border-gray-300 p-4 text-xl "
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
              className="btn-dangerous w-1/4"
              onClick={() => {
                const phone = phoneRef.current.value.trim();
                const name = nameRef.current.value.trim();
                if (name === "") {
                  alert("please enter a name");
                  return;
                }
                if (!phoneValidate(phone)) {
                  alert("please enter a phone");
                  return;
                }
                if (service === "") {
                  alert("please select a service");
                }
                fetch("/services", {
                  method: "post",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({ phone, name, service }),
                })
                  .then((res) => {
                    console.log(res);
                    return res.json();
                  })
                  .then((data) => {
                    console.log(data);
                    nameRef.current.value = "";
                    phoneRef.current.value = "";
                    setService("");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              送出
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
