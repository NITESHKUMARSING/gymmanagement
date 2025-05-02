import { ArrowBack } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import caard from "../../assets/card1.jpg";
import Switch from "react-switch";

const MemberDetails = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Pending");
  const [renew, setRenew] = useState(false);

  const handleSwitchBtn = () => {
    let statuss = status === "Active" ? "Pending" : "Active"; // Corrected the status toggle
    setStatus(statuss);
  };

  return (
    <div className="w-3/4 text-black p-5">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="border-2 w-fit cursor-pointer text-2xl font-mono text-white p-2 rounded-2xl bg-[#a4c3b2]"
      >
        <ArrowBack /> go back
      </div>

      <div className="mt-10 p-2">
        <div className="w-[100vh] h-fit lg:flex">
          <div className="w-1/3 mx-auto">
            <img src={caard} alt="card" className="w-full mx-auto" />
          </div>

          <div className="w-2/3 mt-5 ml-7  p-3  text-2xl">
            <div className="mt-1 mb-2 text-2xl font-semibold">
              Name: Nitesh Singh
            </div>
            <div className="mt-1 mb-2 text-2xl font-semibold">
              Mobile No: 6206830082
            </div>
            <div className="mt-1 mb-2 text-2xl font-semibold">
              Address: Bihar
            </div>
            <div className="mt-1 mb-2 text-2xl font-semibold">
              Joined Date: 1/3/2025
            </div>
            <div className="mt-1 mb-2 text-2xl font-semibold">
              Next Bill Date: 22/3/2026
            </div>

            <div className="mt-1 mb-2 flex gap-4 text-2xl font-semibold">
              Status:{" "}
              <Switch
                className="mt-1"
                onColor="#6366F1"
                checked={status === "Active"}
                onChange={handleSwitchBtn} // Simplified the switch toggle logic
              />
            </div>

            <div
              onClick={() => {
                setRenew((prev) => !prev);
              }}
              className={`mt-5 bg-slate-400 rounded-2xl p-3 border-2 border-slate-500 text-center w-full md:w-1/2 cursor-pointer ${
                renew && status === "Active" // Fixed the status check (case-sensitive)
                  ? "bg-gradient-to-r from-indigo-50 via-red-300 text-white"
                  : ""
              }`}
            >
              Renew
            </div>
            {renew && status === "Active" ? (
              <div className="rounded-2xl p-3 mt-5 mb-5 text-xl font-mono h-fit bg-amber-200 md:w-[60%]">
                <div className="w-full">
                  <div className="my-5">
                    <div>Membership</div>
                    <select className="w-full border-2 p-2 rounded-2xl">
                      <option> 1 Month plan</option>
                      <option> 2 Month plan</option>
                      <option> 3 Month plan</option>
                      <option> 4 Month plan</option>
                    </select>
                    <div className=" rounded-2xl p-3 border-2 border-slate-400 text-center w-1/2 mx-auto cursor-pointer mt-2 ">
                      Save
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;

//  5/57
