import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginField, setLoginField] = useState({ UserName: "", Password: "" });

  const handleLogin = () => {
    sessionStorage.setItem("isLogin", true);
    navigate("/dashboard");
  };

  const handleOnChange = (event, name) => {
    setLoginField({ ...loginField, [name]: event.target.value });
  };

  return (
    <div>
      <div className="w-[450px] p-10 mt-20 ml-30 bg-[#eaf4f4] opacity-90 border-4 border-[#a4c3b2] rounded-lg shadow-lg h-[450px]">
        <div className="text-center text-[#000000] text-4xl font-bold mb-6">
          Login
        </div>
        <input
          value={loginField.UserName}
          onChange={(event) => {
            handleOnChange(event, "UserName");
          }}
          type="text"
          className="w-full mb-10 p-3 rounded-lg border border-[#a4c3b2] focus:ring-2 focus:ring-[#a4c3b2] focus:outline-none transition-all"
          placeholder="Enter UserName"
        />
        <input
          value={loginField.Password}
          onChange={(event) => {
            handleOnChange(event, "Password");
          }}
          type="password"
          className="w-full mb-5 p-3 rounded-lg border border-[#a4c3b2] focus:ring-2 focus:ring-[#a4c3b2] focus:outline-none transition-all"
          placeholder="Enter Password"
        />
        <div
          className="p-2 w-[80%] border-2 border-transparent bg-[#a4c3b2] mx-auto rounded-2xl text-center text-white font-semibold hover:border-white transition-all duration-300 mt-5 cursor-pointer"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
