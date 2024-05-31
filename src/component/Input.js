import React, { useRef } from "react";

const Input = () => {
  const emailRef = useRef();
  const emailValidate = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <div className="m-auto w-1/2">
      <input type="email" className="footer-input" ref={emailRef} required />
      <div className="m-auto flex justify-center">
        <button
          type="button"
          className="btn-dangerous"
          onClick={() => {
            const email = emailRef.current.value.trim();
            if (!emailValidate(email)) {
              alert("please enter a email");
              return;
            }
            fetch("/api/stock/signup", {
              method: "post",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ email }),
            })
              .then((res) => {
                console.log(res);
                return res.json();
              })
              .then((data) => {
                console.log(data);
                emailRef.current.value = "";
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
  );
};

export default Input;
