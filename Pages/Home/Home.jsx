import React from "react";
import Logo from "../../assets/gymlogo.png";
import Body from "../../assets/bgg.jpg";
import Login from "../../components/login/Login";
import SingUp from "../../components/singup/SingUp";

const Home = () => {
  return (
    <div className="w-full h-[100vh]  rounded-2xl bg-[#eaf4f4]">
      <div className="flex justify-between items-center border-4  border-[#aeeac9] bg-gradient-to-r from-[#eaf4f4] via-[#a4c3b2] to-[#eaf4f4] text-[#000000] text-4xl font-bold px-6 py-4 ">
        {" "}
        WELCOME TO GYM
        <img
          src={Logo}
          alt="Gym Logo"
          className="h-16 w-16 mr-4 rounded-full"
        />
      </div>
      <div
        className="bg-[#a4c3b2] flex justify-center  h-[85vh] bg-cover bg-center bg-fixed"
        //style={{ backgroundImage: `url(${Body})` }}
      >
        <div className="w-full ml-5 lg:flex gap-30">
          <Login />
          <SingUp />
        </div>
      </div>
    </div>
  );
};

export default Home;
