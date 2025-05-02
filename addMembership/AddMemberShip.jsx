import React, { useState } from "react";

const AddMemberShip = () => {
  const [inputField, setInputField] = useState({
    months: "",
    price: "",
  });

  const handleOnChange = (event, name) => {
    setInputField({ ...inputField, [name]: event.target.value });
  };

  return (
    <div className="text-black">
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {/* block for membership details */}
        <div className="text-lg bg-red-600 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-2xl font-semibold">
          <div>1 One month membership</div>
          <div>₹ 1000</div>
        </div>
      </div>
      <hr className="mt-10 mb-10" />
      <div className="flex gap-10 items-center">
        <input
          value={inputField.months}
          onChange={(event) => handleOnChange(event, "months")}
          type="number"
          placeholder="Add No. OF Months"
          className="border-2 rounded-lg text-lg w-1/3 h-1/2 p-2"
        />
        <input
          value={inputField.price}
          onChange={(event) => handleOnChange(event, "price")}
          type="number"
          placeholder="Price"
          className="border-2 ml-5 rounded-lg text-lg w-1/3 h-1/2 p-2"
        />
        <div className="text-black mt-0 p-2 cursor-pointer w-auto border-2 rounded-xl ">
          add
        </div>
      </div>
    </div>
  );
};

export default AddMemberShip;
