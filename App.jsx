import Home from "./Pages/Home/Home";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import Member from "./Pages/member/Member";
import Generaluser from "./Pages/GeneralUser/Generaluser";
import MemberDetails from "./Pages/Memberdetails/MemberDetails";

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let isLogedIn = sessionStorage.getItem("isLogin");
    if (isLogedIn) {
      setIsLogin(true);
      // navigate("/dashboard");
    } else {
      setIsLogin(false);
      navigate("/");
    }
  }, [sessionStorage.getItem("isLogin")]);
  return (
    <div className="flex">
      {isLogin && <Sidebar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/member" element={<Member />} />
        <Route path="/specific/:page" element={<Generaluser />} />
        <Route path="/member/:id" element={<MemberDetails />} />
      </Routes>
    </div>
  );
}

export default App;
