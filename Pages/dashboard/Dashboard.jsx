// import React, { useState, useEffect, useRef } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import logo from "../../assets/gymlogo.png";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
// import ReportIcon from "@mui/icons-material/Report";
// import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
// import ReportOffIcon from "@mui/icons-material/ReportOff";
// import EventAvailableIcon from "@mui/icons-material/EventAvailable";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import UpcomingRoundedIcon from "@mui/icons-material/UpcomingRounded";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [accordianDashboard, setAccordianDashboard] = useState(false);
//   const ref = useRef();

//   useEffect(() => {
//     const checkIfClickedOutside = (e) => {
//       if (
//         accordianDashboard &&
//         ref.current &&
//         !ref.current.contains(e.target)
//       ) {
//         setAccordianDashboard(false);
//       }
//     };
//     document.addEventListener("mousedown", checkIfClickedOutside);
//     return () => {
//       document.removeEventListener("mousedown", checkIfClickedOutside);
//     };
//   }, [accordianDashboard]);

//   const handleOnclickMenu = (value) => {
//     sessionStorage.setItem("func", value);
//   };

//   return (
//     <div className="w-3/4 text-black p-5 relative">
//       <div className="w-full bg-gray-500 text-white rounded-lg flex p-3 justify-between items-center">
//         <MenuIcon
//           sx={{
//             cursor: "pointer",
//             transition: "color 0.3s ease, transform 0.2s ease",
//             "&:hover": {
//               color: "black",
//               transform: "scale(1.1)", // Slight zoom effect on hover
//             },
//             "&:active": {
//               transform: "scale(0.9)", // Slight shrink effect when clicked
//             },
//           }}
//           onClick={() => {
//             setAccordianDashboard((prev) => !prev);
//           }}
//         />
//         <div>
//           <img
//             src={logo}
//             alt=""
//             className="h-16 w-16 mr-4 border-2 rounded-full"
//           />
//         </div>
//       </div>

//       {accordianDashboard && (
//         <div
//           ref={ref}
//           className="absolute p-3 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-white rounded-xl text-lg font-light"
//         >
//           <div>Hi welcome to our Gym Management System</div>
//           <p>Feel free to ask any queries</p>
//         </div>
//       )}

//       <div className="mt-5 pt-3 rounded-2xl p-5 bg-gray-300 bg-opacity-50 grid gap-5 grid-cols-3 w-full pb-5 overflow-x-auto max-h-[80vh]">
//         <Link
//           to={"/specific/Joined Members"}
//           onClick={() => handleOnclickMenu("joinedmember")}
//           className="w-full h-fit border-gray-300 border-2 rounded-t-lg bg-gray-600 cursor-pointer"
//         >
//           <div className="h-3 rounded-t-lg bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></div>
//           <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-gray-700 hover:text-white">
//             <PeopleAltIcon
//               sx={{
//                 color: "white",
//                 fontSize: "50px",
//                 transition: "color 0.3s ease",
//                 "&:hover": {
//                   color: "black",
//                 },
//                 "&:active": {
//                   color: "black",
//                 },
//               }}
//             />
//             <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
//               Joined Members
//             </p>
//           </div>
//         </Link>

//         <Link
//           to={"/specific/Yearly Joined"}
//           onClick={() => handleOnclickMenu("yearlyjoined")}
//           className="w-full h-fit border-gray-300 border-2 rounded-t-lg bg-gray-600 cursor-pointer"
//         >
//           <div className="h-3 rounded-t-lg bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></div>
//           <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-gray-700 hover:text-white">
//             <EventAvailableIcon
//               sx={{
//                 color: "white",
//                 fontSize: "50px",
//                 transition: "color 0.3s ease",
//                 "&:hover": {
//                   color: "black",
//                 },
//                 "&:active": {
//                   color: "black",
//                 },
//               }}
//             />
//             <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
//               Yearly Joined
//             </p>
//           </div>
//         </Link>

//         <Link
//           to={"/specific/6-Month Joined"}
//           onClick={() => handleOnclickMenu("sixmonthlyjoined")}
//           className="w-full h-fit border-gray-300 border-2 rounded-t-lg bg-gray-600 cursor-pointer"
//         >
//           <div className="h-3 rounded-t-lg bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></div>
//           <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-gray-700 hover:text-white">
//             <CalendarMonthIcon
//               sx={{
//                 color: "white",
//                 fontSize: "50px",
//                 transition: "color 0.3s ease",
//                 "&:hover": {
//                   color: "black",
//                 },
//                 "&:active": {
//                   color: "black",
//                 },
//               }}
//             />
//             <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
//               6-Month Joined
//             </p>
//           </div>
//         </Link>

//         <Link
//           to={"/specific/Monthly-Jion"}
//           onClick={() => handleOnclickMenu("monthlyjoined")}
//           className="w-full h-fit border-gray-300 border-2 rounded-t-lg bg-gray-600 cursor-pointer"
//         >
//           <div className="h-3 rounded-t-lg bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></div>
//           <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-gray-700 hover:text-white">
//             <SignalCellularAltIcon
//               sx={{
//                 color: "white",
//                 fontSize: "50px",
//                 transition: "color 0.3s ease",
//                 "&:hover": {
//                   color: "black",
//                 },
//                 "&:active": {
//                   color: "black",
//                 },
//               }}
//             />
//             <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
//               Monthly Jion
//             </p>
//           </div>
//         </Link>

//         <Link
//           to={"/specific/Expiring Within 3 Days"}
//           onClick={() => handleOnclickMenu("threedayexpire")}
//           className="w-full h-fit border-gray-300 border-2 rounded-t-lg bg-gray-600 cursor-pointer"
//         >
//           <div className="h-3 rounded-t-lg bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></div>
//           <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-gray-700 hover:text-white">
//             <AccessAlarmsIcon
//               sx={{
//                 color: "white",
//                 fontSize: "50px",
//                 transition: "color 0.3s ease",
//                 "&:hover": {
//                   color: "black",
//                 },
//                 "&:active": {
//                   color: "black",
//                 },
//               }}
//             />
//             <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
//               Expiring Within 3 Days
//             </p>
//           </div>
//         </Link>

//         <Link
//           to={"/specific/Expiring Within 4-7 Days"}
//           onClick={() => handleOnclickMenu("fourtosevendayexpire")}
//           className="w-full h-fit border-gray-300 border-2 rounded-t-lg bg-gray-600 cursor-pointer"
//         >
//           <div className="h-3 rounded-t-lg bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></div>
//           <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-gray-700 hover:text-white">
//             <ErrorOutlineIcon
//               sx={{
//                 color: "white",
//                 fontSize: "50px",
//                 transition: "color 0.3s ease",
//                 "&:hover": {
//                   color: "black",
//                 },
//                 "&:active": {
//                   color: "black",
//                 },
//               }}
//             />
//             <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
//               Expiring Within 4-7 Days
//             </p>
//           </div>
//         </Link>

//         <Link
//           to={"/specific/Expired"}
//           onClick={() => handleOnclickMenu("expired")}
//           className="w-full h-fit border-gray-300 border-2 rounded-t-lg bg-gray-600 cursor-pointer"
//         >
//           <div className="h-3 rounded-t-lg bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600"></div>
//           <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-gray-700 hover:text-white">
//             <ReportIcon
//               sx={{
//                 color: "white",
//                 fontSize: "50px",
//                 transition: "color 0.3s ease",
//                 "&:hover": {
//                   color: "black",
//                 },
//                 "&:active": {
//                   color: "black",
//                 },
//               }}
//             />
//             <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
//               Expired
//             </p>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/gymlogo.png";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ReportIcon from "@mui/icons-material/Report";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import ReportOffIcon from "@mui/icons-material/ReportOff";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UpcomingRoundedIcon from "@mui/icons-material/UpcomingRounded";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [accordianDashboard, setAccordianDashboard] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        accordianDashboard &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setAccordianDashboard(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [accordianDashboard]);

  const handleOnclickMenu = (value) => {
    sessionStorage.setItem("func", value);
  };

  return (
    <div className="w-3/4 text-black p-5 relative">
      <div className="w-full bg-[#eaf4f4] text-[#000000] rounded-lg flex p-3 justify-between items-center">
        <MenuIcon
          sx={{
            cursor: "pointer",
            transition: "color 0.3s ease, transform 0.2s ease",
            "&:hover": {
              color: "#a4c3b2",
              transform: "scale(1.1)",
            },
            "&:active": {
              transform: "scale(0.9)",
            },
          }}
          onClick={() => {
            setAccordianDashboard((prev) => !prev);
          }}
        />
        <div>
          <img
            src={logo}
            alt=""
            className="h-16 w-16 mr-4 border-2 rounded-full"
          />
        </div>
      </div>

      {accordianDashboard && (
        <div
          ref={ref}
          className="absolute p-3 bg-gradient-to-r from-[#a4c3b2] via-[#eaf4f4] to-[#a4c3b2] text-[#000000] rounded-xl text-lg font-light"
        >
          <div>Hi welcome to our Gym Management System</div>
          <p>Feel free to ask any queries</p>
        </div>
      )}

      <div className="mt-5 pt-3 rounded-2xl p-5 bg-[#eaf4f4] bg-opacity-50 grid gap-5 grid-cols-3 w-full pb-5 overflow-x-auto max-h-[80vh]">
        <Link
          to={"/specific/Joined Members"}
          onClick={() => handleOnclickMenu("joinedmember")}
          className="w-full h-fit border-[#a4c3b2] border-2 rounded-t-lg bg-[#a4c3b2] cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-[#a4c3b2] via-[#eaf4f4] to-[#a4c3b2]"></div>
          <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-[#a4c3b2] hover:text-white">
            <PeopleAltIcon
              sx={{
                color: "white",
                fontSize: "50px",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#000000",
                },
                "&:active": {
                  color: "#000000",
                },
              }}
            />
            <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
              Joined Members
            </p>
          </div>
        </Link>

        <Link
          to={"/specific/Yearly Joined"}
          onClick={() => handleOnclickMenu("yearlyjoined")}
          className="w-full h-fit border-[#a4c3b2] border-2 rounded-t-lg bg-[#a4c3b2] cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-[#a4c3b2] via-[#eaf4f4] to-[#a4c3b2]"></div>
          <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-[#a4c3b2] hover:text-white">
            <EventAvailableIcon
              sx={{
                color: "white",
                fontSize: "50px",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#000000",
                },
                "&:active": {
                  color: "#000000",
                },
              }}
            />
            <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
              Yearly Joined
            </p>
          </div>
        </Link>

        <Link
          to={"/specific/6-Month Joined"}
          onClick={() => handleOnclickMenu("sixmonthlyjoined")}
          className="w-full h-fit border-[#a4c3b2] border-2 rounded-t-lg bg-[#a4c3b2] cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-[#a4c3b2] via-[#eaf4f4] to-[#a4c3b2]"></div>
          <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-[#a4c3b2] hover:text-white">
            <CalendarMonthIcon
              sx={{
                color: "white",
                fontSize: "50px",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#000000",
                },
                "&:active": {
                  color: "#000000",
                },
              }}
            />
            <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
              6-Month Joined
            </p>
          </div>
        </Link>

        <Link
          to={"/specific/Monthly-Jion"}
          onClick={() => handleOnclickMenu("monthlyjoined")}
          className="w-full h-fit border-[#a4c3b2] border-2 rounded-t-lg bg-[#a4c3b2] cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-[#a4c3b2] via-[#eaf4f4] to-[#a4c3b2]"></div>
          <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-[#a4c3b2] hover:text-white">
            <SignalCellularAltIcon
              sx={{
                color: "white",
                fontSize: "50px",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#000000",
                },
                "&:active": {
                  color: "#000000",
                },
              }}
            />
            <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
              Monthly Jion
            </p>
          </div>
        </Link>

        <Link
          to={"/specific/Expiring Within 3 Days"}
          onClick={() => handleOnclickMenu("threedayexpire")}
          className="w-full h-fit border-[#a4c3b2] border-2 rounded-t-lg bg-[#a4c3b2] cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-[#a4c3b2] via-[#eaf4f4] to-[#a4c3b2]"></div>
          <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-[#a4c3b2] hover:text-white">
            <AccessAlarmsIcon
              sx={{
                color: "white",
                fontSize: "50px",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#000000",
                },
                "&:active": {
                  color: "#000000",
                },
              }}
            />
            <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
              Expiring Within 3 Days
            </p>
          </div>
        </Link>

        <Link
          to={"/specific/Expiring Within 4-7 Days"}
          onClick={() => handleOnclickMenu("fourtosevendayexpire")}
          className="w-full h-fit border-[#a4c3b2] border-2 rounded-t-lg bg-[#a4c3b2] cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-[#a4c3b2] via-[#eaf4f4] to-[#a4c3b2]"></div>
          <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-[#a4c3b2] hover:text-white">
            <ErrorOutlineIcon
              sx={{
                color: "white",
                fontSize: "50px",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#000000",
                },
                "&:active": {
                  color: "#000000",
                },
              }}
            />
            <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
              Expiring Within 4-7 Days
            </p>
          </div>
        </Link>

        <Link
          to={"/specific/Expired"}
          onClick={() => handleOnclickMenu("expired")}
          className="w-full h-fit border-[#a4c3b2] border-2 rounded-t-lg bg-[#a4c3b2] cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-[#a4c3b2] via-[#eaf4f4] to-[#a4c3b2]"></div>
          <div className="py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-[#a4c3b2] hover:text-white">
            <ReportIcon
              sx={{
                color: "white",
                fontSize: "50px",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#000000",
                },
                "&:active": {
                  color: "#000000",
                },
              }}
            />
            <p className="text-xl my-3 font-semibold font-mono hover:text-blue-500 transition-colors duration-200">
              Expired
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
