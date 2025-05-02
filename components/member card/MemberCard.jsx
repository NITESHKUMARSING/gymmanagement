// import React from "react";
// import card1 from "../../assets/card1.jpg";
// import card2 from "../../assets/card2.jpg";
// import card3 from "../../assets/card3.jpg";
// import card4 from "../../assets/card4.jpg";
// import card5 from "../../assets/card5.jpg";
// import "./membercard.css";
// import { Link } from "react-router-dom";

// const MemberCard = () => {
//   return (
//     <>
//       <Link
//         to={"/member/12"}
//         className=" h-70 w-70 bg-gradient-to-r from-red-500 via-purple-500 to-green-500
//         text-white font-semibold transition-all duration-300 p-1
//         hover:scale-105 hover:shadow-lg hover:from-yellow-400 hover:via-orange-500 hover:to-green-600 cursor-pointer  rounded-2xl"
//       >
//         <div className="w-28 h-28 flex gap-2  justify-center relative items-center border-2 p-1 mt-2 mx-auto rounded-full">
//           <img className="w-full h-full rounded-full" src={card1} alt="" />
//         </div>
//         <div className="mx-auto mt-4 text-center text-2xl font-semibold font-mono">
//           {"Nitesh kumar singh"}
//         </div>
//         <div className="text-center text-xl font-semibold font-mono mx-auto">
//           {"+91 "}
//           {"6206830082"}
//         </div>
//         <div className="text-center text-xl font-semibold text-black font-mono mx-auto">
//           Next Bill Date: {"15/02/2003"}
//         </div>
//       </Link>
//     </>
//   );
// };

// export default MemberCard;
// // 3/52
import React from "react";
import card1 from "../../assets/card1.jpg";
import "./membercard.css";
import { Link } from "react-router-dom";

const MemberCard = () => {
  return (
    <>
      <Link
        to={"/member/12"}
        className=" customscroll h-70 w-70 bg-gradient-to-r from-[#a4c3b2] via-[#8cd2d2] to-[#a4c3b2] 
        text-white font-semibold transition-all duration-300 p-1
        hover:scale-105 hover:shadow-lg hover:from-[#a4c3b2] hover:via-[#80c3c3] hover:to-[#a4c3b2] cursor-pointer rounded-2xl"
      >
        <div className="w-28 h-28 flex gap-2 justify-center relative items-center border-2 p-1 mt-2 mx-auto rounded-full">
          <img className="w-full h-full rounded-full" src={card1} alt="" />
        </div>
        <div className="mx-auto mt-4 text-center text-2xl font-semibold font-mono">
          {"Nitesh kumar singh"}
        </div>
        <div className="text-center text-xl font-semibold font-mono mx-auto">
          {"+91 "}
          {"6206830082"}
        </div>
        <div className="text-center text-xl font-semibold text-black font-mono mx-auto">
          Next Bill Date: {"15/02/2003"}
        </div>
      </Link>
    </>
  );
};

export default MemberCard;
