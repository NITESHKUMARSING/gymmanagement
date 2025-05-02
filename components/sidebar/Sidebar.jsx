// import React, { useState, useEffect } from "react";
// import Gymicon from "../../assets/gymicon.jpg";
// import HomeIcon from "@mui/icons-material/Home";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { useNavigate, useLocation } from "react-router-dom";

// const Sidebar = () => {
//   const [greeting, setGreeting] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const greetingMessage = () => {
//     const currentHour = new Date().getHours();
//     if (currentHour < 12) {
//       setGreeting("Good Morning 🌞");
//     } else if (currentHour < 18) {
//       setGreeting("Good Afternoon ☀️");
//     } else if (currentHour < 21) {
//       setGreeting("Good Evening 🌕");
//     } else {
//       setGreeting("Good Night 🌙");
//     }
//   };

//   const handleClick = () => {
//     navigate("/member");
//   };

//   const handleClicks = () => {
//     navigate("/dashboard");
//   };

//   useEffect(() => {
//     greetingMessage();
//   }, []);

//   const handleLogout = async () => {
//     sessionStorage.clear();
//     navigate("/");
//   };

//   return (
//     <div
//       className="w-1/4 p-5 h-[100vh] border border-gray-500 bg-gray-700 bg-gradient-to-r from-gray-800 via-gray-500 to-gray-400
//      font-semibold transition-all duration-300 text-yellow-50"
//     >
//       <div className="text-center mt-10 font-semibold text-3xl font-serif">
//         Power Zone
//       </div>
//       <div className="flex gap-10  my-10">
//         <div className="w-20 h-20 flex">
//           <img
//             src={Gymicon}
//             alt="Gym Icon"
//             className="w-full h-full rounded-full border-2"
//           />
//         </div>

//         <div>
//           <div className="text-2xl">{greeting}</div>
//           <div className="text-xl font-semibold font-sans mt-5">admin</div>
//         </div>
//       </div>
//       <div className="mt-15 p-5 border-t-2 border-gray-400">
//         <div
//           onClick={handleClicks}
//           className={`flex gap-4 border-2 mb-12 mt-15 border-gray-400 rounded-2xl p-2
//     bg-gradient-to-r from-gray-500 via-purple-500 to-gray-500
//     text-white font-semibold transition-all duration-300
//     hover:scale-105 hover:shadow-lg hover:from-gray-600 hover:via-pink-500 hover:to-purple-600 cursor-pointer ${
//       location.pathname === "/dashboard" ? "border-3  border-white" : null
//     }`}
//         >
//           <div>
//             <HomeIcon />
//           </div>
//           <div>Dashboard</div>
//         </div>

//         <div
//           onClick={handleClick}
//           className={`flex gap-4 border-2 mb-12 border-gray-400 rounded-2xl p-2
//     bg-gradient-to-r from-gray-500 via-purple-500 to-green-500
//     text-white font-semibold transition-all duration-300
//     hover:scale-105 hover:shadow-lg hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 cursor-pointer ${
//       location.pathname === "/member" ? "border-3  border-white" : null
//     }`}
//         >
//           <div>
//             <PeopleAltIcon />
//           </div>
//           <div>Members</div>
//         </div>

//         <div
//           onClick={() => {
//             handleLogout();
//           }}
//           className={`flex gap-4 border-2 mb-10 border-gray-400 rounded-2xl p-2
//     bg-gradient-to-r from-gray-500 via-purple-500 to-gray-500
//     text-white font-semibold transition-all duration-300
//     hover:scale-105 hover:shadow-lg hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 cursor-pointer ${
//       location.pathname === "/logout" ? "border-3  border-white" : null
//     }`}
//         >
//           <div>
//             <LogoutIcon />
//           </div>
//           <div>Logout</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect } from "react";
import Gymicon from "../../assets/gymicon.jpg";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const greetingMessage = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning 🌞");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon ☀️");
    } else if (currentHour < 21) {
      setGreeting("Good Evening 🌕");
    } else {
      setGreeting("Good Night 🌙");
    }
  };

  const handleClick = () => {
    navigate("/member");
  };

  const handleClicks = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    greetingMessage();
  }, []);

  const handleLogout = async () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div
      className="w-1/4 p-5 h-[100vh] border border-gray-500 bg-[#a4c3b2] bg-gradient-to-r from-[#a4c3b2] via-[#8bd4d4] to-[#a4c3b2]
     font-semibold transition-all duration-300 text-yellow-50"
    >
      <div className="text-center mt-10 font-semibold text-3xl font-serif">
        Power Zone
      </div>
      <div className="flex gap-10 my-10">
        <div className="w-20 h-20 flex">
          <img
            src={Gymicon}
            alt="Gym Icon"
            className="w-full h-full rounded-full border-2"
          />
        </div>

        <div>
          <div className="text-2xl">{greeting}</div>
          <div className="text-xl font-semibold font-sans mt-5">admin</div>
        </div>
      </div>
      <div className="mt-15 p-5 border-t-2 border-[#eaf4f4]">
        <div
          onClick={handleClicks}
          className={`flex gap-4 border-2 mb-12 mt-15 border-[#eaf4f4] rounded-2xl p-2 
    bg-gradient-to-r from-[#a4c3b2] via-[#9cdede] to-[#a4c3b2] 
    text-white font-semibold transition-all duration-300 
    hover:scale-105 hover:shadow-lg hover:from-[#a4c3b2] hover:via-[#a5e2e2] hover:to-[#a4c3b2] cursor-pointer ${
      location.pathname === "/dashboard" ? "border-3  border-white" : null
    }`}
        >
          <div>
            <HomeIcon />
          </div>
          <div>Dashboard</div>
        </div>

        <div
          onClick={handleClick}
          className={`flex gap-4 border-2 mb-12 border-[#bacaca] rounded-2xl p-2 
    bg-gradient-to-r from-[#a4c3b2] via-[#99c7c7] to-[#a4c3b2] 
    text-white font-semibold transition-all duration-300 
    hover:scale-105 hover:shadow-lg hover:from-[#a4c3b2] hover:via-[#eaf4f4] hover:to-[#a4c3b2] cursor-pointer ${
      location.pathname === "/member" ? "border-3  border-white" : null
    }`}
        >
          <div>
            <PeopleAltIcon />
          </div>
          <div>Members</div>
        </div>

        <div
          onClick={() => {
            handleLogout();
          }}
          className={`flex gap-4 border-2 mb-10 border-[#eaf4f4] rounded-2xl p-2 
    bg-gradient-to-r from-[#a4c3b2] via-[#a3d2d2] to-[#a4c3b2] 
    text-white font-semibold transition-all duration-300 
    hover:scale-105 hover:shadow-lg hover:from-[#a4c3b2] hover:via-[#98d0d0] hover:to-[#a4c3b2] cursor-pointer ${
      location.pathname === "/logout" ? "border-3  border-white" : null
    }`}
        >
          <div>
            <LogoutIcon />
          </div>
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
