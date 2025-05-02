import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
const Modal = ({ handleClose, content, header }) => {
  return (
    <div className="w-full h-screen fixed bg-red-100/60 text-black top-0 left-0 flex justify-center">
      <div className="w-1/2 bg-white rounded-xl h-fit p-5 items-center mt-32">
        <div className="flex justify-between ">
          <div className="text-3xl font-semibold">{header}</div>
          <div onClick={() => handleClose()}>
            <ClearIcon sx={{ fontSize: "32px" }} />
          </div>
        </div>
        <div className="mt-10">{content}</div>
      </div>
    </div>
  );
};

export default Modal;

// 1/26
