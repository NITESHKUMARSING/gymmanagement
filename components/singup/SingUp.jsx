// import React, { useState } from "react";
// import Girl from "../../assets/autosave.jpg";
// import "./singup.css";
// import Modal from "../modal/Modal";
// import ForgotPassward from "../forgotpassward/ForgotPassward";
// import axios from "axios";
// import Stack from "@mui/material/Stack";
// import LinearProgress from "@mui/material/LinearProgress";

// const SingUp = () => {
//   const [loderImage, setLoderImage] = useState(false);
//   const [forgotPassword, setForgotPassword] = useState(false);
//   const [inputField, setInputField] = useState({
//     gymName: "",
//     email: "",
//     userName: "",
//     Password: "",
//     ProfilePic: Girl, // Default ProfilePic
//   });

//   const handleOnChange = (event, name) => {
//     setInputField({ ...inputField, [name]: event.target.value });
//   };

//   const handleClose = () => {
//     setForgotPassword((prev) => !prev);
//   };

//   const uplodeImage = async (event) => {
//     setLoderImage(true);
//     console.log("image upload");
//     const files = event.target.files;
//     const data = new FormData();

//     data.append("file", files[0]);
//     data.append("upload_preset", "gym-management");

//     try {
//       const response = await axios.post(
//         "https://api.cloudinary.com/v1_1/dqpbh7mou/image/upload",
//         data
//       );
//       console.log(response);
//       // Set the uploaded image URL in the state
//       const uploadedImageUrl = response.data.secure_url;
//       setLoderImage(false);
//       setInputField((prevState) => ({
//         ...prevState,
//         ProfilePic: uploadedImageUrl,
//       }));
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       alert("There was an issue uploading the image. Please try again.");
//       setLoderImage(false);
//     }
//   };

//   return (
//     <div>
//       <div className="customSignUp w-[450px] p-10 mt-20 ml-30 bg-gray-200 bg-opacity-60 opacity-90 border-4 border-gray-400 rounded-lg shadow-lg h-[500px] overflow-y-auto">
//         <div className="text-center mb-10 text-gray-800 text-4xl font-bold">
//           Register Your Gym
//         </div>
//         <input
//           value={inputField.email}
//           onChange={(event) => handleOnChange(event, "email")}
//           type="email"
//           className="w-full mb-10 p-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-gray-600 focus:outline-none transition-all"
//           placeholder="Enter Email"
//         />
//         <input
//           value={inputField.gymName}
//           onChange={(event) => handleOnChange(event, "gymName")}
//           type="text"
//           className="w-full mb-10 p-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-gray-600 focus:outline-none transition-all"
//           placeholder="Enter Gym Name"
//         />
//         <input
//           value={inputField.userName}
//           onChange={(event) => handleOnChange(event, "userName")}
//           type="text"
//           className="w-full mb-10 p-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-gray-600 focus:outline-none transition-all"
//           placeholder="Enter UserName"
//         />
//         <input
//           value={inputField.Password}
//           onChange={(event) => handleOnChange(event, "Password")}
//           type="password"
//           className="w-full mb-10 p-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-gray-600 focus:outline-none transition-all"
//           placeholder="Enter Password"
//         />

//         <div className="w-full mb-10">
//           <label className="block text-gray-600 font-semibold mb-2">
//             Upload File
//           </label>
//           <div className="relative w-full">
//             <input
//               type="file"
//               onChange={uplodeImage}
//               id="fileInput"
//               className="hidden"
//             />
//             <label
//               htmlFor="fileInput"
//               className="flex items-center justify-center w-full p-2 rounded-lg border-2 border-gray-400 text-gray-600 font-semibold cursor-pointer bg-white hover:bg-gray-400 hover:text-white transition-all duration-300"
//             >
//               Choose File
//             </label>
//           </div>
//         </div>

//         <img
//           src={inputField.ProfilePic}
//           alt="Profile"
//           className="w-40 mb-5 h-[150px] object-contain"
//         />
//         {loderImage && (
//           <Stack
//             sx={{ width: "100%", color: "grey.500", marginBottom: "8px" }}
//             spacing={2}
//           >
//             <LinearProgress color="secondary" />
//           </Stack>
//         )}

//         <div className="p-2 w-[80%] border-2 border-transparent bg-gray-600 mx-auto rounded-2xl text-center text-white font-semibold hover:border-white transition-all duration-300 mb-10 cursor-pointer">
//           Register
//         </div>
//         <div
//           className="p-2 w-[80%] border-2 border-transparent bg-gray-600 mx-auto rounded-2xl text-center text-white font-semibold hover:border-white transition-all duration-300 mb-10 cursor-pointer"
//           onClick={handleClose}
//         >
//           Forgot Password
//         </div>
//       </div>

//       {forgotPassword && (
//         <Modal
//           header="Forgot Password"
//           handleClose={handleClose}
//           content={<ForgotPassward />}
//         />
//       )}
//     </div>
//   );
// };

// export default SingUp;

import React, { useState } from "react";
import Girl from "../../assets/autosave.jpg";
import "./singup.css";
import Modal from "../modal/Modal";
import ForgotPassward from "../forgotpassward/ForgotPassward";
import axios from "axios";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const SingUp = () => {
  const [loderImage, setLoderImage] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [inputField, setInputField] = useState({
    gymName: "",
    email: "",
    userName: "",
    Password: "",
    ProfilePic: Girl, // Default ProfilePic
  });

  const handleOnChange = (event, name) => {
    setInputField({ ...inputField, [name]: event.target.value });
  };

  const handleClose = () => {
    setForgotPassword((prev) => !prev);
  };

  const uplodeImage = async (event) => {
    setLoderImage(true);
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
      setLoderImage(false);
      setInputField((prevState) => ({
        ...prevState,
        ProfilePic: uploadedImageUrl,
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("There was an issue uploading the image. Please try again.");
      setLoderImage(false);
    }
  };

  return (
    <div>
      <div className="customSignUp w-[450px] p-10 mt-20 ml-30 bg-[#eaf4f4] opacity-90 border-4 border-[#a4c3b2] rounded-lg shadow-lg h-[500px] overflow-y-auto">
        <div className="text-center mb-10 text-[#0c0d0c] text-4xl font-bold">
          Register Your Gym
        </div>
        <input
          value={inputField.email}
          onChange={(event) => handleOnChange(event, "email")}
          type="email"
          className="w-full mb-10 p-3 rounded-lg border border-[#a4c3b2] focus:ring-2 focus:ring-[#a4c3b2] focus:outline-none transition-all"
          placeholder="Enter Email"
        />
        <input
          value={inputField.gymName}
          onChange={(event) => handleOnChange(event, "gymName")}
          type="text"
          className="w-full mb-10 p-3 rounded-lg border border-[#a4c3b2] focus:ring-2 focus:ring-[#a4c3b2] focus:outline-none transition-all"
          placeholder="Enter Gym Name"
        />
        <input
          value={inputField.userName}
          onChange={(event) => handleOnChange(event, "userName")}
          type="text"
          className="w-full mb-10 p-3 rounded-lg border border-[#a4c3b2] focus:ring-2 focus:ring-[#a4c3b2] focus:outline-none transition-all"
          placeholder="Enter UserName"
        />
        <input
          value={inputField.Password}
          onChange={(event) => handleOnChange(event, "Password")}
          type="password"
          className="w-full mb-10 p-3 rounded-lg border border-[#a4c3b2] focus:ring-2 focus:ring-[#a4c3b2] focus:outline-none transition-all"
          placeholder="Enter Password"
        />

        <div className="w-full mb-10">
          <label className="block text-[#a4c3b2] font-semibold mb-2">
            Upload File
          </label>
          <div className="relative w-full">
            <input
              type="file"
              onChange={uplodeImage}
              id="fileInput"
              className="hidden"
            />
            <label
              htmlFor="fileInput"
              className="flex items-center justify-center w-full p-2 rounded-lg border-2 border-[#a4c3b2] text-[#a4c3b2] font-semibold cursor-pointer bg-white hover:bg-[#a4c3b2] hover:text-white transition-all duration-300"
            >
              Choose File
            </label>
          </div>
        </div>

        <img
          src={inputField.ProfilePic}
          alt="Profile"
          className="w-40 mb-5 h-[150px] object-contain"
        />
        {loderImage && (
          <Stack
            sx={{ width: "100%", color: "grey.500", marginBottom: "8px" }}
            spacing={2}
          >
            <LinearProgress color="secondary" />
          </Stack>
        )}

        <div className="p-2 w-[80%] border-2 border-transparent bg-[#a4c3b2] mx-auto rounded-2xl text-center text-white font-semibold hover:border-white transition-all duration-300 mb-10 cursor-pointer">
          Register
        </div>
        <div
          className="p-2 w-[80%] border-2 border-transparent bg-[#a4c3b2] mx-auto rounded-2xl text-center text-white font-semibold hover:border-white transition-all duration-300 mb-10 cursor-pointer"
          onClick={handleClose}
        >
          Forgot Password
        </div>
      </div>

      {forgotPassword && (
        <Modal
          header="Forgot Password"
          handleClose={handleClose}
          content={<ForgotPassward />}
        />
      )}
    </div>
  );
};

export default SingUp;
