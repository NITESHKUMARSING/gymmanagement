import React, { useState } from "react";
import cards from "../../assets/card2.jpg";
import axios from "axios";

const AddMember = () => {
  const [inputField, setInputField] = useState({
    name: "",
    mobilenumber: "",
    address: "",
    membership: "",
    profilePic: cards, // Default profile pic
    joiningDate: "",
  });

  const uplodeImage = async (event) => {
    console.log("image upload");
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "gym-management");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dqpbh7mou/image/upload",
        data
      );
      console.log(response);
      // Set the uploaded image URL in the state
      const uploadedImageUrl = response.data.secure_url;
      setInputField((prevState) => ({
        ...prevState,
        profilePic: uploadedImageUrl, // Fixed key name
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("There was an issue uploading the image. Please try again.");
    }
  };

  const handleOnChange = (event, name) => {
    setInputField({ ...inputField, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log(inputField); // Log the inputField data to see the form data
    // Handle the submission, e.g., make an API call to save the member
  };

  return (
    <div>
      <form className="grid grid-cols-2 gap-4 p-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2">
            Name
          </label>
          <input
            value={inputField.name}
            onChange={(event) => handleOnChange(event, "name")}
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="border-2 rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="mobile" className="mb-2">
            Mobile Number
          </label>
          <input
            value={inputField.mobilenumber}
            onChange={(event) => handleOnChange(event, "mobilenumber")}
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter your mobile number"
            className="border-2 rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col col-span-2">
          <label htmlFor="address" className="mb-2">
            Address
          </label>
          <textarea
            value={inputField.address}
            onChange={(event) => handleOnChange(event, "address")}
            id="address"
            name="address"
            placeholder="Enter your address"
            className="border-2 rounded-lg p-2"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="mb-2">
            Select Date
          </label>
          <input
            value={inputField.joiningDate}
            onChange={(event) => handleOnChange(event, "joiningDate")}
            type="date"
            id="date"
            name="date"
            className="border-2 rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="file" className="mb-2">
            Choose File
          </label>
          <input
            onChange={(e) => uplodeImage(e)}
            type="file"
            id="file"
            name="file"
            className="border-2 rounded-lg p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="membership" className="mb-2">
            Membership Type
          </label>
          <select
            id="membership"
            name="membership"
            value={inputField.membership}
            onChange={(event) => handleOnChange(event, "membership")}
            className="border-2 rounded-lg p-2"
          >
            <option value="1_month">1 Month Membership</option>
            <option value="2_months">2 Month Membership</option>
            <option value="3_months">3 Month Membership</option>
            <option value="4_months">4 Month Membership</option>
            <option value="5_months">5 Month Membership</option>
            <option value="6_months">6 Month Membership</option>
            <option value="1_year">1 Year Membership</option>
          </select>
        </div>

        <div className="w-1/4 flex ml-20 justify-center">
          <img
            src={inputField.profilePic}
            className="w-[100px] h-[100px] object-cover rounded-full"
            alt="Profile"
          />
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMember;
