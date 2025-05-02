// import React, { useState, useEffect } from "react";
// import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
// import AddIcon from "@mui/icons-material/Add";
// import { Link } from "react-router-dom";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import SearchIcon from "@mui/icons-material/Search";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import Modal from "../../components/modal/Modal";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import AddMemberShip from "../../addMembership/AddMemberShip";

// import MemberCard from "../../components/member card/MemberCard";
// import AddMember from "../../components/addMember/AddMember";

// const Member = () => {
//   const [addMembership, setAddMembership] = useState(false);
//   const [addMember, setAddMember] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [startForm, setStartForm] = useState(0);
//   const [entTo, setEndTo] = useState(9);
//   const [totalData, setTotalData] = useState(52); // Total members available
//   const [limit, setLimit] = useState(9);
//   const [noOfPage, setNoOfPage] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     // Fetch the total number of members (for simplicity, it's hardcoded as 52 here)
//     const totalMembers = 52;
//     setTotalData(totalMembers);

//     // Calculate number of pages based on total members and limit
//     const totalPages = Math.ceil(totalMembers / limit);
//     setNoOfPage(totalPages);

//     if (totalMembers === 0) {
//       setStartForm(-1);
//       setEndTo(0);
//     } else if (totalMembers < 10) {
//       setStartForm(0);
//       setEndTo(totalMembers);
//     }
//   };

//   const handleMembership = () => {
//     setAddMembership((prev) => !prev);
//   };

//   const handleMember = () => {
//     setAddMember((prev) => !prev);
//   };

//   // Handle previous page
//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       const newPage = currentPage - 1;
//       setCurrentPage(newPage);
//       const from = (newPage - 1) * limit;
//       const to = newPage * limit;
//       setStartForm(from);
//       setEndTo(to > totalData ? totalData : to);
//     }
//   };

//   // Handle next page
//   const handleNext = () => {
//     if (currentPage < noOfPage) {
//       const newPage = currentPage + 1;
//       setCurrentPage(newPage);
//       const from = (newPage - 1) * limit;
//       const to = newPage * limit;
//       setStartForm(from);
//       setEndTo(to > totalData ? totalData : to);
//     }
//   };

//   return (
//     <div className="w-3/4 text-black p-5 h-[100vh] relative">
//       {/* Banner Section */}
//       <div className="border-2 shadow-2xl bg-gray-500 flex justify-between w-full text-white rounded-lg p-4">
//         <div
//           onClick={handleMember}
//           className="flex gap-4 border-2 border-gray-400 rounded-2xl p-2 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
//         >
//           <FitnessCenterIcon />
//           Add Member
//         </div>
//         <div
//           onClick={handleMembership}
//           className="flex gap-4 border-2 border-gray-400 rounded-2xl p-2 bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
//         >
//           Add Membership
//           <AddIcon />
//         </div>
//       </div>

//       {/* Back to Dashboard */}
//       <div className="border-2 mt-5 bg-gradient-to-r from-gray-500 via-gray-500 to-gray-600 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-50 p-2 rounded-3xl cursor-pointer">
//         <Link to="/dashboard">
//           <ArrowBackIcon />
//           Back to Dashboard
//         </Link>
//       </div>

//       {/* Search Bar */}
//       <div className="mt-5 w-1/2 flex gap-2 p-2">
//         <input
//           type="text"
//           className="border-2 p-2 w-full rounded-lg"
//           placeholder="search by name & mobile no"
//         />
//         <div className="flex items-center justify-center border-2 p-3 rounded-2xl bg-gradient-to-r from-gray-500 via-gray-500 to-gray-600 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
//           <SearchIcon className="w-6 cursor-pointer h-6 transition-all duration-300 hover:text-gray-200" />
//         </div>
//       </div>

//       {/* Pagination Section */}
//       <div className="mt-5 text-xl flex justify-between items-center border-2 rounded-2xl p-2 shadow-xl border-white text-black">
//         <div className="font-mono">Total Members</div>
//         <div className="flex items-center gap-5">
//           <div className="flex font-mono items-center">
//             {startForm + 1} - {entTo} of {totalData} Members
//             <div
//               className={`icon-container ml-2 border-2 border-gray-400 p-2 rounded-full flex items-center justify-center bg-green-100 cursor-pointer ${
//                 currentPage === 1 ? "bg-gray-200 text-yellow-800" : ""
//               }`}
//               onClick={handlePrevious}
//             >
//               <KeyboardArrowLeftIcon className="hover:text-blue-500" />
//             </div>
//             <div
//               className={`icon-container ml-2 border-2 border-gray-400 p-2 rounded-full flex items-center justify-center bg-gray-500 cursor-pointer ${
//                 currentPage === noOfPage ? "bg-gray-200 text-yellow-800" : ""
//               }`}
//               onClick={handleNext}
//             >
//               <ChevronRightIcon className="hover:text-blue-500" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cards Display */}
//       <div className="customscroll bg-gray-200 p-5 mt-5 rounded-2xl grid gap-5 grid-cols-3 pb-5 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-20 max-h-[52vh]">
//         <MemberCard />
//         <MemberCard />
//         <MemberCard />
//         <MemberCard />
//         <MemberCard />
//         <MemberCard />
//         <MemberCard />
//         <MemberCard />
//         <MemberCard />
//         <MemberCard />
//         <MemberCard />
//         <MemberCard />
//         <MemberCard />
//       </div>

//       {/* Modals for adding membership or member */}
//       {addMembership && (
//         <Modal
//           header="Add Membership"
//           handleClose={handleMembership}
//           content={<AddMemberShip />}
//         />
//       )}
//       {addMember && (
//         <Modal
//           header="Add New Member"
//           handleClose={handleMember}
//           content={<AddMember />}
//         />
//       )}
//     </div>
//   );
// };

// export default Member;

//
import "./Member.css";
import React, { useState, useEffect } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Modal from "../../components/modal/Modal";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddMemberShip from "../../addMembership/AddMemberShip";

import MemberCard from "../../components/member card/MemberCard";
import AddMember from "../../components/addMember/AddMember";

const Member = () => {
  const [addMembership, setAddMembership] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [startForm, setStartForm] = useState(0);
  const [entTo, setEndTo] = useState(9);
  const [totalData, setTotalData] = useState(52); // Total members available
  const [limit, setLimit] = useState(9);
  const [noOfPage, setNoOfPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const totalMembers = 52;
    setTotalData(totalMembers);

    const totalPages = Math.ceil(totalMembers / limit);
    setNoOfPage(totalPages);

    if (totalMembers === 0) {
      setStartForm(-1);
      setEndTo(0);
    } else if (totalMembers < 10) {
      setStartForm(0);
      setEndTo(totalMembers);
    }
  };

  const handleMembership = () => {
    setAddMembership((prev) => !prev);
  };

  const handleMember = () => {
    setAddMember((prev) => !prev);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      const from = (newPage - 1) * limit;
      const to = newPage * limit;
      setStartForm(from);
      setEndTo(to > totalData ? totalData : to);
    }
  };

  const handleNext = () => {
    if (currentPage < noOfPage) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      const from = (newPage - 1) * limit;
      const to = newPage * limit;
      setStartForm(from);
      setEndTo(to > totalData ? totalData : to);
    }
  };

  return (
    <div className="w-3/4 text-black p-5 h-[100vh] relative">
      {/* Banner Section */}
      <div className="border-2 shadow-2xl bg-[#a4c3b2] flex justify-between w-full text-white rounded-lg p-4">
        <div
          onClick={handleMember}
          className="flex gap-4 border-2 border-[#eaf4f4] rounded-2xl p-2 bg-gradient-to-r from-[#a4c3b2] via-[#eaf4f4] to-[#a4c3b2] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          <FitnessCenterIcon />
          Add Member
        </div>
        <div
          onClick={handleMembership}
          className="flex gap-4 border-2 border-[#eaf4f4] rounded-2xl p-2 bg-gradient-to-r from-[#a4c3b2] via-[#eaf4f4] to-[#a4c3b2] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          Add Membership
          <AddIcon />
        </div>
      </div>

      {/* Back to Dashboard */}
      <div className="border-2 mt-5 bg-gradient-to-r from-[#a4c3b2] via-[#a4c3b2] to-[#eaf4f4] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-50 p-2 rounded-3xl cursor-pointer">
        <Link to="/dashboard">
          <ArrowBackIcon />
          Back to Dashboard
        </Link>
      </div>

      {/* Search Bar */}
      <div className="mt-5 w-1/2 flex gap-2 p-2">
        <input
          type="text"
          className="border-2 p-2 w-full rounded-lg"
          placeholder="search by name & mobile no"
        />
        <div className="flex items-center justify-center border-2 p-3 rounded-2xl bg-gradient-to-r from-[#a4c3b2] via-[#a4c3b2] to-[#eaf4f4] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <SearchIcon className="w-6 cursor-pointer h-6 transition-all duration-300 hover:text-gray-200" />
        </div>
      </div>

      {/* Pagination Section */}
      <div className="mt-5 text-xl flex justify-between items-center border-2 rounded-2xl p-2 shadow-xl border-white text-black">
        <div className="font-mono">Total Members</div>
        <div className="flex items-center gap-5">
          <div className="flex font-mono items-center">
            {startForm + 1} - {entTo} of {totalData} Members
            <div
              className={`icon-container ml-2 border-2 border-[#eaf4f4] p-2 rounded-full flex items-center justify-center bg-[#a4c3b2] cursor-pointer ${
                currentPage === 1 ? "bg-[#eaf4f4] text-yellow-800" : ""
              }`}
              onClick={handlePrevious}
            >
              <KeyboardArrowLeftIcon className="hover:text-blue-500" />
            </div>
            <div
              className={`icon-container ml-2 border-2 border-[#eaf4f4] p-2 rounded-full flex items-center justify-center bg-[#a4c3b2] cursor-pointer ${
                currentPage === noOfPage ? "bg-[#eaf4f4] text-yellow-800" : ""
              }`}
              onClick={handleNext}
            >
              <ChevronRightIcon className="hover:text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Cards Display */}
      <div className="customscroll bg-[#eaf4f4] p-5 mt-5 rounded-2xl grid gap-5 grid-cols-3 pb-5 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-20 max-h-[52vh]">
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>

      {/* Modals for adding membership or member */}
      {addMembership && (
        <Modal
          header="Add Membership"
          handleClose={handleMembership}
          content={<AddMemberShip />}
        />
      )}
      {addMember && (
        <Modal
          header="Add New Member"
          handleClose={handleMember}
          content={<AddMember />}
        />
      )}
    </div>
  );
};

export default Member;
