import React, { useState } from "react";

const ForgotPassward = () => {
  const [emailSubmit, setEmailSubmit] = useState(false);
  const [otpValidate, setOtpValidate] = useState(false);
  const [contentVal, setContentValue] = useState("SUBMIT EMAIL");
  const [inputField, setinputField] = useState({
    email: "",
    otp: "",
    newPassword: "",
  });

  const handleOnChange = (event, name) => {
    setinputField({ ...inputField, [name]: event.target.value });
  };
  const handleSubmit = () => {
    if (!emailSubmit) {
      setEmailSubmit(true);
      setContentValue("SUBMIT OTP");
    } else if (emailSubmit && !otpValidate) {
      setOtpValidate(true);
      setContentValue("SUBMIT NEW PASSWORD");
    }
  };
  return (
    <div className="w-full">
      <div className="w-full">
        <div>Enter Your Email</div>

        <input
          value={inputField.email}
          onChange={(event) => {
            handleOnChange(event, "email");
          }}
          className="w-1/2 mb-10 mt-5 p-3 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-600 focus:outline-none transition-all"
          type="email"
          name="Email"
          placeholder="Email"
          id=""
        />
      </div>
      {emailSubmit && (
        <div className="w-full">
          <div>Enter Your OTP</div>
          <input
            value={inputField.otp}
            onChange={(event) => {
              handleOnChange(event, "otp");
            }}
            className="w-1/2 mb-10 mt-5 p-3 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-600 focus:outline-none transition-all"
            type="OTP"
            name="OTP"
            placeholder="Enter OTP"
            id=""
          />
        </div>
      )}
      {otpValidate && (
        <div className="w-full">
          <div>Enter Your New Password</div>
          <input
            value={inputField.newPassword}
            onChange={(event) => {
              handleOnChange(event, "newPassword");
            }}
            className="w-1/2 mb-10 mt-5 p-3 rounded-lg border border-red-500 focus:ring-2 focus:ring-red-600 focus:outline-none transition-all"
            type="password "
            name="OTP"
            placeholder="Enter New Password "
            id=""
          />
        </div>
      )}
      <div
        className="p-2 w-[50%] text-center mx-auto rounded-lg border-2 border-red-500 text-red-500 font-semibold cursor-pointer bg-white hover:bg-red-500 hover:text-white transition-all duration-300"
        onClick={() => handleSubmit()}
      >
        {contentVal}
      </div>
    </div>
  );
};

export default ForgotPassward;

// 1/40
