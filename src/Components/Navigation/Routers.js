import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Forms/Login";
import SignUp from '../Forms/SignUp'
import HomePage from "../Screens/HomePage";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SignUp" element={<SignUp />} />

      </Routes>
    </Router>
  );
}

export default Routers;
