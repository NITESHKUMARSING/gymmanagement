import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "./Generaluser.css";
import MemberCard from "../../components/member card/MemberCard";
import { useEffect, useState } from "react";

const Generaluser = () => {
  const [header, setHeader] = useState("");

  useEffect(() => {
    const func = sessionStorage.getItem("func");
    functionCall(func);
  }, []); // Run only once when the component mounts

  const functionCall = (func) => {
    switch (func) {
      case "monthlyjoined":
        setHeader("Monthly Joined Members");
        break;
      case "joinedmember":
        setHeader("Joined Members");
        break;

      case "yearlyjoined":
        setHeader("Yearly Joined Members");
        break;
      case "sixmonthlyjoined":
        setHeader("Six Monthly Joined Members");
        break;
      case "threedayexpire":
        setHeader("Expired in Three Days");
        break;
      case "fourtosevendayexpire":
        setHeader("Expired in Four to Seven Days");
        break;
      case "expired":
        setHeader("Expired");
        break;
      default:
        setHeader("No header available");
        break;
    }
  };

  return (
    <div className="text-black p-5 w-full flex-col h-[100vh]">
      <div className="border-2 bg-[#a4c3b2] flex justify-between w-full text-white rounded-2xl p-3 ">
        <Link
          to={"/dashboard"}
          className="border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer "
        >
          <ArrowBackIcon /> Back to Dashboard
        </Link>
      </div>
      <div className="mt-5 text-2xl text-slate-700">{header}</div>

      {/* Grid Container */}
      <div className="customscroll grid grid-cols-3 gap-4 overflow-x-auto mt-8 h-[70vh]">
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
    </div>
  );
};

export default Generaluser;
